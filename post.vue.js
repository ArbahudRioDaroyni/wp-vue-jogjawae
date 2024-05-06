import TableOfContents from './components/table-of-contents.vue.js'
import FeaturedImage from './components/featured-image.vue.js'

const Post = {
  name: 'Post',
  template: `
    <Navigation />

    <main
      v-if="!loading"
      v-for="(p, index) in post"
      :key="p.id"
      class="mt-6">

        <article>

          <section class="hero">
            <div class="hero-body">
              <h1 v-html="p.title.rendered" class="title mb-1"></h1>
              <p class="subtitle">
                <time :datetime="p.modified_gmt">{{ p.formattedModified }}</time>
              </p>
            </div>
          </section>

          <section class="hero">
            <div class="hero-body pt-0">
              <featured-image :id="p.featured_media" :hasclass="{ 'figure': 'is-16by9' }" />
            </div>
          </section>
          
          <section class="container is-fluid">

            <div class="columns">
              <div class="column is-8 is-offset-2">
                <table-of-contents />
              </div>
            </div>

            <div class="content content-single columns">
              <div class="column is-8 is-offset-2">

                <div class="content-article" v-html="p.content.rendered"></div>

                <aside>
                  <div class="section px-0">
                    <h3>Kategori</h3>
                    <div class="menu">
                      <template v-if="categories.length">
                        <ul class="menu-list mx-0" style="list-style: none;">
                          <li
                            v-for="category in categories"
                            :key="category.id">
                            <router-link
                              :to="'/' + 'category/' + category.slug + '/'">
                              {{ category.name }}
                            </router-link>
                          </li>
                        </ul>
                      </template>
                      <template v-else>
                        <p class="menu-label">No categories found.</p>
                      </template>
                    </div>
                  </div>
                  
                  <div class="section px-0">
                    <h3>Artikel Terbaru</h3>
                    <div class="menu">
                      <template v-if="latestposts.length">
                        <ul class="menu-list mx-0" style="list-style: none;">
                          <li
                            v-for="latestpost in latestposts"
                            :key="latestposts.id">
                            <router-link :to="'/' + latestpost.slug.toLowerCase()" v-html="latestpost.title.rendered">
                            </router-link>
                          </li>
                        </ul>
                      </template>
                      <template v-else>
                        <p class="menu-label">No latest posts found.</p>
                      </template>
                    </div>
                  </div>
                </aside>

              </div>
            </div>
          </section>
        </article>

    </main>

    <div v-else class="mt-6">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title mb-1 is-skeleton">----- ----- ----- --------- ---, ----, - ------ ---- -- ---, ---- -------</h1>
          <p class="subtitle is-skeleton">-- ----- ----</p>
        </div>
      </section>
      <section class="hero">
        <div class="hero-body pt-0">
          <figure class="image is-16by9 is-skeleton">
          </figure>
        </div>
      </section>
      <div class="container is-fluid skeleton-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      </br>
      <div class="container is-fluid skeleton-lines mt-3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    
    <Footer />
  `,
  data() {
    return {
      error: null,
      loading: false,
      post: [],
      categories: [],
      latestposts: []
    }
  },
  components: {
    TableOfContents,
    FeaturedImage
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.$watch(
        function() {
          return this.$route.params.slug
        },
        function() {
          // check slug is valid?
          const isValidSlug = /^[a-zA-Z0-9-]+$/.test(this.$route.params.slug)
          if (isValidSlug) {
            this.loading = true
            this.fetchPostBySlug()
            this.fetchCategories()
            this.fetchLatestPosts()
          } else {
            this.$router.push({ path: '/' })
          }
        },
        { immediate: true }
      )
    },
    async fetchPostBySlug() {
      this.error = this.post = null
      this.loading = true
      let API_field = "id,modified_gmt,title,content,featured_media"
      let response = null
      let data = null
      
      // Mencoba mengambil post berdasarkan slug
      try {
        response = await fetch(`${this.$rootlocal}/wp-json/wp/v2/posts?slug=${this.$route.params.slug}&_fields=${API_field}`);
        data = await response.json();
      } catch (error) {
        console.error("Error fetching post:", error);
      }

      // Jika tidak ada post ditemukan, coba untuk mengambil halaman
      if (data.length === 0) {
        try {
          response = await fetch(`${this.$rootlocal}/wp-json/wp/v2/pages?slug=${this.$route.params.slug}&_fields=${API_field}`);
          data = await response.json();
        } catch (error) {
          console.error("Error fetching page:", error);
        }
      }

      // Menangani respons
      if (data.length !== 0) {
        // reformating gmt to date
        let modifiedDate = new Date(data[0].modified_gmt)
        data[0].formattedModified = modifiedDate.toLocaleString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'}) // weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
        // Set document title to post title
        if (data && data.length > 0 && data[0].title && data[0].title.rendered) {
          document.title = data[0].title.rendered;
        }
        // store all
        this.post = data;
        this.loading = false
        this.scrollToTop();
      } else {
        // console.error("No post or page found");
        this.$router.push('/404');
      }
    },
    async fetchCategories() {
      try {
        const API_field = "id,name,slug"
        const response = await fetch(`${this.$rootlocal}/wp-json/wp/v2/categories?_fields=${API_field}`)
        const data = await response.json()
        // store data
        this.categories = data
      } catch (error) {
        console.error('Error fetching categories:', error)
        // Handle error
      }
    },
    async fetchLatestPosts() {
      try {
        const API_field = "id,slug,title"
        const response = await fetch(`${this.$rootlocal}/wp-json/wp/v2/posts?per_page=3&_fields=${API_field}`)
        const data = await response.json()
        // store data
        this.latestposts = data
      } catch (error) {
        console.error('Error fetching latest posts:', error);
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0 });
    },
    // async fetchRelatedPosts() {
      // if (this.post && this.post[0] && this.post[0].tags && this.post[0].tags.length > 0) {
      //   const tagIds = this.post[0].tags.map(tag => tag.id).join(',');
      //   const response = await fetch(`${this.$rootlocal}/wp-json/wp/v2/posts?tags=${tagIds}&per_page=3`);
        // if (response.ok) {
        // if (this.post) {
          // this.relatedPosts = await response.json();
        //   console.error(this.post.tags[0]);
        // } else {
        //   console.error('Failed to fetch related posts');
        // }
      // }
    // }
  }
}

export default Post