const Home = {
  name: 'Home',
  template: `
    <main class="section pt-0">
      <secrion class="container">
        <div class="columns is-multiline">
          <!-- list-article.vue.js -->
            <ListArticle :posts="posts" />
          <!-- list-article.vue.js -->
        </div>
      </secrion>
    </main>
  `,
  data() {
    return {
      loading: false,
      posts: null,
      error: null,
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      this.error = this.posts = null
      this.loading = true
      try {
        const API_field = "id,modified_gmt,slug,title,excerpt,yoast_head_json.author,yoast_head_json.og_image";
        const response = await fetch(`${window.location.origin}/wp-json/wp/v2/posts?_fields=${API_field}`);
        this.posts = await response.json();
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