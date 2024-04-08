const { watchEffect } = Vue

const Post = {
  name: 'Post',
  template: `
    <main v-if="!loading" v-for="{ modified_gmt, yoast_head_json, title, content, formattedModified } in post" :key="post.id">
      <article>
        <section class="hero">
          <div class="hero-body">
            <h1 v-html="title.rendered" class="title"></h1>
            <p class="subtitle"><time :datetime="modified_gmt">{{ formattedModified }}</time></p>
          </div>
        </section>
        <section class="hero">
          <div class="hero-body">
            <figure class="image is-16by9">
              <img class="image" :src="yoast_head_json.og_image[0].url" :alt="title.rendered">
            </figure>
          </div>
        </section>
        <section class="container">
          <div class="content content-single columns">
            <div class=" column is-8 is-offset-2">
              <div v-html="content.rendered"></div>
              <aside>
                <div>
                  <h3>Kategori</h3>
                  <div v-if="categories.length">
                    <ul v-for="category in categories" :key="category.id">
                      <router-link :to="'/' + category.name.toLowerCase()">{{ category.name }}</router-link>
                    </ul>
                  </div>
                  <div v-else>
                    No categories found.
                  </div>
                </div>
                <div v-if="latestposts && latestposts.length">
                  <h3>Artikel Terbaru</h3>
                  <div class="content-body" v-for="latestpost in latestposts" :key="latestposts.id">
                    <ul style="padding: 0;list-style: none;">
                      <li>
                        <router-link :to="'/' + latestpost.slug.toLowerCase()">
                          <span v-html="latestpost.title.rendered"></span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>
    </main>
    <div v-else class="container is-max-desktop is-fluid">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title is-skeleton">Title</h1>
          <p class="subtitle is-skeleton">Subtitle</p>
        </div>
      </section>
      <div class="skeleton-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  data() {
    return {
      loading: false,
      post: null,
      categories: [],
      latestposts: [],
      error: null,
    }
  },
  created() {
    const slug = this.$route.params.slug;
    const isValidSlug = /^[a-zA-Z0-9-]+$/.test(slug);

    if (isValidSlug) {
      console.warn('Slug valid:', slug);
      this.$watch(
        function() {
          return this.$route.params.slug;
        },
        function() {
          if (this.$route.params.slug !== undefined && this.$route.params.slug !== null) {
            this.loading = true;
            this.fetchDataPost();
            this.fetchCategories();
            this.fetchLatestPosts();
          }
        },
        { immediate: true }
      )
    } else {
      this.$router.push({ path: '/' });
    }
  },
  methods: {
    async fetchDataPost() {
      this.error = this.post = null
      this.loading = true
      // const url = `${API_URL}${this.$route.params.slug}`
      // this.post = await (await fetch(url)).json()
      try {
        const url = `https://jogjawae.com/wp-json/wp/v2/posts?slug=${this.$route.params.slug}`;
        const postData = await (await fetch(url)).json();
        
        // Memformat tanggal modified_gmt
        for (let index = 0; index < postData.length; index++) {
          // const element = array[index];
          if (postData[index] && postData[index].modified_gmt) {
            const modifiedDate = new Date(postData[index].modified_gmt);
            postData[index].formattedModified = modifiedDate.toLocaleString('id-ID', {day: 'numeric', month: 'long', year: 'numeric'});
            //modifiedDate.toLocaleString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' });
          }
        }
  
        this.post = postData;
      } catch (error) {
        // console.error('Error fetching data:', error);
        this.error = 'Error fetching data.';
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const url = 'https://jogjawae.com/wp-json/wp/v2/categories';
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
        const response = await fetch(`https://jogjawae.com/wp-json/wp/v2/posts?per_page=3&_embed`);
        if (response.ok) {
          this.latestposts = await response.json();
        } else {
          console.error('Failed to fetch related posts');
        }
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    },
    // async fetchRelatedPosts() {
      // if (this.post && this.post[0] && this.post[0].tags && this.post[0].tags.length > 0) {
      //   const tagIds = this.post[0].tags.map(tag => tag.id).join(',');
      //   const response = await fetch(`https://jogjawae.com/wp-json/wp/v2/posts?tags=${tagIds}&per_page=3`);
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
}

export default Post