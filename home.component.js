const { watchEffect } = Vue
const API_URL = `https://jogjawae.com/wp-json/wp/v2/posts?_fields=slug,title,content,yoast_head_json,excerpt,modified_gmt`

const Home = {
  name: 'Home',
  template: `
  <main class="container">
    <section class="articles">
      <div class="column is-8 is-offset-2">
        <article class="card article" v-for="{ slug, title, content, yoast_head_json, excerpt, formattedModified } in post" :key="post.id">
          <div class="card-content">
            <figure class="image is-16by9">
              <img :src="yoast_head_json.og_image[0].url" :alt="title.rendered" class="obj-fit-cover">
            </figure>
            <div class="media">
                <div class="media-content has-text-centered">
                    <h2 class="title article-title">
                      <router-link :to="slug" v-html="title.rendered"></router-link>
                    </h2>
                    <div class="tags has-addons level-item">
                        <span class="tag is-rounded is-info">@{{ yoast_head_json.author }}</span>
                        <span class="tag is-rounded">{{ formattedModified }}</span>
                    </div>
                </div>
            </div>
            <div class="content article-body" v-html="excerpt.rendered">
            </div>
          </div>
        </article>
      </div>
    </section>
  </main>
  `,
  data() {
    return {
      loading: false,
      post: null,
      error: null,
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.error = this.post = null
      this.loading = true
      // this.post = await (await fetch(API_URL)).json()
      try {
        // const url = `${API_URL}${this.$route.params.slug}`;
        const postData = await (await fetch(API_URL)).json()
  
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

export default Home