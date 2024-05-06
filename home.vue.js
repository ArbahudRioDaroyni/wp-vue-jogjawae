import ListArticle from './components/list-article.vue.js'

const Home = {
  name: 'Home',
  template: `
    <Navigation />
    <main class="section mt-6">
      <section class="container">
        <div class="columns is-multiline">
          <!-- list-article.vue.js -->
            <ListArticle :posts="posts" />
          <!-- list-article.vue.js -->
        </div>
      </section>
    </main>
    <Footer />
  `,
  data() {
    return {
      loading: false,
      posts: [],
      error: null,
    }
  },
  created() {
    this.fetchData();
  },
  components: {
    ListArticle
  },
  methods: {
    async fetchData() {
      this.loading = true
      try {
        const API_field = "id,modified_gmt,slug,title,excerpt,featured_media,yoast_head_json.author";
        const response = await fetch(`${this.$rootlocal}/wp-json/wp/v2/posts?_fields=${API_field}&per_page=8`);
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