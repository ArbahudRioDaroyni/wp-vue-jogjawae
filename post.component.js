const { watchEffect } = Vue
const API_URL = `https://jogjawae.com/wp-json/wp/v2/posts?slug=`

const Post = {
  name: 'Post',
  template: `
    <section class="hero post" v-for="{ modified_gmt, yoast_head_json, title, content, formattedModified } in post" :key="post.id">
      <div class="hero-body">
        <div class="container">
          
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <figure class="image is-16by9">
                <img :src="yoast_head_json.og_image[0].url" :alt="title.rendered">
              </figure>
            </div>
          </div>

          <main class="section">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="content is-medium">
                  <p class="subtitle is-4"><time :datetime="modified_gmt">{{ formattedModified }}</time></p>
                  <div class="control"><span class="tag is-info is-uppercase ">story</span></div>

                  <h1 class="title" v-html="title.rendered"></h1>
                  <div v-html="content.rendered"></div>
                </div>
              </div>
            </div>
          </main>

          <div class="is-divider"></div>

          <div class="container">
            <nav class="pagination is-centered" role="navigation" aria-label="pagination">

              <a class="button bd-fat-button is-info is-light bd-pagination-prev" href="#" title="previous article">
                <span class="icon is-left">
                  <i class="fa fa-arrow-left"></i>
                </span>
                <span>
                  <strong>Previous Article</strong>
                </span>
              </a>

              <a class="button bd-fat-button is-info is-light bd-pagination-prev" href="#" title="next article">
                <strong>Next Article</strong>
                <span class="icon is-left">
                  <i class="fa fa-arrow-right"></i>
                </span>
                <span>
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      loading: false,
      post: null,
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
            this.fetchData();
          }
        },
        { immediate: true }
      )
    } else {
      this.$router.push({ path: '/' });
    }
  },
  methods: {
    async fetchData() {
      this.error = this.post = null
      this.loading = true
      // const url = `${API_URL}${this.$route.params.slug}`
      // this.post = await (await fetch(url)).json()
      try {
        const url = `${API_URL}${this.$route.params.slug}`;
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
        console.error('Error fetching data:', error);
        this.error = 'Error fetching data.';
      } finally {
        this.loading = false;
      }
    },
  },
}

export default Post