import TableOfContents from './components/table-of-contents.vue.js'

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
              <figure class="image is-16by9">
                <img
                  :src="p.yoast_head_json.og_image[0].url"
                  :alt="p.title.rendered"
                  class="image fit-cover"
                  loading="lazy"
                  decoding="async">
              </figure>
            </div>
          </section>
          
          <section class="container is-fluid">

            <div class="columns">
              <div class="column is-8 is-offset-2">
                <table-of-contents :headings="headings" />
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
                            <router-link :to="'/' + latestpost.slug.toLowerCase()">
                              {{ latestpost.title.rendered }}
                            </router-link>
                          </li>
                        </ul>
                      </template>
                      <template v-else>
                        <p class="menu-label">No posts found.</p>
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
      latestposts: [],
      headings: [], // table-of-contents
      slug: [] // table-of-contents
    }
  },
  components: {
    TableOfContents
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
      // this.scrollToTop();
      this.error = this.post = null
      this.loading = true
      try {
        const API_field = "id,modified_gmt,title,content,featured_media,yoast_head_json.og_image"
        const response = await fetch(`${window.location.origin}/wp-json/wp/v2/posts?slug=${this.$route.params.slug}&_fields=${API_field}`)
        const data = await response.json();
        // reformating gmt to date
        const modifiedDate = new Date(data[0].modified_gmt)
        data[0].formattedModified = modifiedDate.toLocaleString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'}) // weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
        // store all
        this.post = data;
      } catch (error) {
        this.error = 'Error fetching data.'
      } finally {
        this.loading = false
      }
    },
    async fetchCategories() {
      try {
        const url = `${window.location.origin}/wp-json/wp/v2/categories`
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const categories = await response.json();
        // Lakukan sesuatu dengan data kategori, misalnya simpan dalam properti di komponen
        this.categories = categories;
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Handle error
      }
    },
    async fetchLatestPosts() {
      try {
        const response = await fetch(`${window.location.origin}/wp-json/wp/v2/posts?per_page=3&_embed`);
        if (response.ok) {
          this.latestposts = await response.json();
        } else {
          console.error('Failed to fetch related posts');
        }
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    },
    scrollToTop() {
      window.scrollTo({ top: 0 });
    },
    createTableofContents() {
      const headings = Array.from(document.querySelectorAll(".content-article h1, .content-article h2, .content-article h3, .content-article h4, .content-article h5, .content-article h6"));
    
      this.headings = headings.map((heading, index) => {
        const id = heading.textContent.trim().replace(/\s+/g, '-');
        heading.id = id;
        const level = parseInt(heading.tagName.substring(1));
        let parentId = null;
    
        // Find the closest parent heading with a lower level
        for (let i = headings.indexOf(heading) - 1; i >= 0; i--) {
          if (parseInt(headings[i].tagName.substring(1)) < level) {
            parentId = headings[i].id;
            break;
          }
        }
    
        return {
          index: index,
          id: id,
          title: heading.textContent,
          level: level,
          parentId: parentId,
          data: [] // Menambahkan properti data untuk menyimpan anak-anak heading
        };
      });
    
      // Menyusun headings ke headings.parent.data jika parentId tidak null
      this.headings.forEach(heading => {
        if (heading.parentId) {
          const parentHeading = this.headings.find(h => h.id === heading.parentId);
          if (parentHeading) {
            parentHeading.data.push(heading);
          }
        }
      });
    
      // Menghapus anak-anak dari array headings
      this.headings = this.headings.filter(heading => !heading.parentId);
      this.slug = this.$route.params.slug;
    }    
    
    // async fetchRelatedPosts() {
      // if (this.post && this.post[0] && this.post[0].tags && this.post[0].tags.length > 0) {
      //   const tagIds = this.post[0].tags.map(tag => tag.id).join(',');
      //   const response = await fetch(`${window.location.origin}/wp-json/wp/v2/posts?tags=${tagIds}&per_page=3`);
        // if (response.ok) {
        // if (this.post) {
          // this.relatedPosts = await response.json();
        //   console.error(this.post.tags[0]);
        // } else {
        //   console.error('Failed to fetch related posts');
        // }
      // }
    // }
  },
  updated() {
    // Start Table 0f Contents
    if (this.headings.length == 0 || this.slug !== this.$route.params.slug) {
      this.createTableofContents();
    }
    // End Table 0f Contents
  }
}

export default Post