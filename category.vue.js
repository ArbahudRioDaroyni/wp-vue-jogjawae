import ListArticle from './components/list-article.vue.js'

const Category = {
  name: 'Category',
  template: `
    <Navigation />
    <section class="section mt-6">
      <div class="container">
        <div class="mb-6 columns is-multiline is-centered">
          <div class="column is-12 is-7-fullhd is-8-desktop has-text-centered">
            <h1 class="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">{{ $route.params.category.charAt(0).toUpperCase() + $route.params.category.slice(1) }}</h1>
            <p class="subtitle has-text-grey">Dapatkan informasi wisata {{ $route.params.category.charAt(0).toUpperCase() + $route.params.category.slice(1) }} yang menarik di JogjaWae.com.</p>
          </div>
        </div>
      </div>
    </section>
    <section class="section pt-0">
      <div class="container">
        <div class="columns is-multiline">
        <!-- list-article.vue.js -->
          <ListArticle :posts="posts" />
        <!-- list-article.vue.js -->
        </div>
        <div
          v-if="showLoadMoreButton"
          class="has-text-centered">
          <button
            @click="loadMorePosts"
            :class="['button', loading ? 'is-loading' : '']">
            {{ loading ? 'Memuat' : 'Muat lainnya' }}
          </button>
        </div>
      </div>
    </section>
    <Footer />
  `,
  data() {
    return {
      loading: false,
      categoryName: this.$route.params.category, // Nama kategori yang ingin Anda dapatkan
      categoryId: null,
      posts: [],
      page: 1,
      perPage: 5,
      totalPosts: null
    }
  },
  computed: {
    showLoadMoreButton() {
      return this.posts.length >= this.perPage && this.posts.length < this.totalPosts
    }
  },
  created() {
    // Mendapatkan ID kategori berdasarkan nama kategori
    this.getCategoryId();
  },
  components: {
    ListArticle
  },
  methods: {
    async getCategoryId() {
      try {
        const response = await fetch(`${window.location.origin}/wp-json/wp/v2/categories?search=${this.categoryName}`);
        const data = await response.json();
        if (data.length > 0) {
          this.categoryId = data[0].id;
          // Memuat daftar post berdasarkan kategori setelah mendapatkan ID kategori
          this.getPostsByCategory();
        }
      } catch (error) {
        console.error('Error fetching category ID:', error);
      }
    },
    async getPostsByCategory() {
      try {
        this.loading = true;
        const API_field = "id,modified_gmt,slug,title,excerpt,yoast_head_json.author,yoast_head_json.og_image";
        const response = await fetch(`${window.location.origin}/wp-json/wp/v2/posts?categories=${this.categoryId}&per_page=${this.perPage}&page=${this.page}&_fields=${API_field}`);
        const newPosts = await response.json();
        this.posts = [...this.posts, ...newPosts];
        // Update totalPosts setelah menerima data
        this.totalPosts = response.headers.get('X-WP-Total');
      } catch (error) {
        console.error('Error fetching posts by category:', error);
      } finally {
        this.loading = false;
      }
    },
    async loadMorePosts() {
      this.loading = true;
      this.page++;
      await this.getPostsByCategory();
    }
  }
}

export default Category