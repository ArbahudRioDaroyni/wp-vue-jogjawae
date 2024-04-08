const Category = {
  name: 'Category',
  template: `
    <section class="section">
      <div class="container">
        <div class="mb-6 columns is-multiline is-centered">
          <div class="column is-12 is-7-fullhd is-8-desktop has-text-centered">
            <span class="has-text-grey-dark">Lorem ipsum</span>
            <h2 class="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold" v-html"categoryName"></h2>
            <p class="subtitle has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
          </div>
        </div>
        <div class="columns is-multiline">
          <div class="column is-8 mb-5">
            <div class="mb-4 is-flex">
              <img class="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt="">
            </div>
            <span><small class="has-text-grey-dark">10 jun 2021 19:40</small></span>
            <h2 class="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Lorem ipsum dolor sit amet consectutar domor at elis</h2>
            <p class="subtitle has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
            <a href="#">Read More</a>
          </div>
          <div class="column is-4 mb-5">
            <div class="mb-4 is-flex">
              <img class="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt="">
            </div>
            <span><small class="has-text-grey-dark">10 jun 2021 19:40</small></span>
            <h2 class="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Lorem ipsum dolor</h2>
            <p class="subtitle has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read More</a>
          </div>
          <div class="column is-4 mb-5">
            <div class="mb-4 is-flex">
              <img class="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt="">
            </div>
            <span><small class="has-text-grey-dark">10 jun 2021 19:40</small></span>
            <h2 class="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Lorem ipsum dolor</h2>
            <p class="subtitle has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read More</a>
          </div>
          <div class="column is-4 mb-5">
            <div class="mb-4 is-flex">
              <img class="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt="">
            </div>
            <span><small class="has-text-grey-dark">10 jun 2021 19:40</small></span>
            <h2 class="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Lorem ipsum dolor</h2>
            <p class="subtitle has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read More</a>
          </div>
          <div class="column is-4 mb-5">
            <div class="mb-4 is-flex">
              <img class="image" src="bulma-plain-assets/images/green-400-horizontal.png" alt="">
            </div>
            <span><small class="has-text-grey-dark">10 jun 2021 19:40</small></span>
            <h2 class="mb-2 is-size-3 is-size-4-mobile has-text-weight-bold">Lorem ipsum dolor</h2>
            <p class="subtitle has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <a href="#">Read More</a>
          </div>
        </div>
        <ul>
          <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
        </ul>
      </div>
    </section>
  `,
  data() {
    return {
      loading: false,
      categoryName: null, // Nama kategori yang ingin Anda dapatkan
      categoryId: null,
      posts: []
    }
  },
  mounted() {
    // Mendapatkan ID kategori berdasarkan nama kategori
    this.getCategoryId();
    this.categoryName = this.$route.params.category;
    // Memuat daftar post berdasarkan kategori setelah mendapatkan ID kategori
    this.$watch('categoryId', () => {
      if (this.categoryId !== null) {
        this.getPostsByCategory();
      }
    });
  },
  methods: {
    async getCategoryId() {
      try {
        const response = await fetch(`https://jogjawae.com/wp-json/wp/v2/categories?search=${this.categoryName}`);
        const data = await response.json();
        if (data.length > 0) {
          this.categoryId = data[0].id;
        }
      } catch (error) {
        console.error('Error fetching category ID:', error);
      }
    },
    async getPostsByCategory() {
      try {
        const response = await fetch(`https://jogjawae.com/wp-json/wp/v2/posts?categories=${this.categoryId}&per_page=3`);
        this.posts = await response.json();
      } catch (error) {
        console.error('Error fetching posts by category:', error);
      }
    }
  }
}

export default Category