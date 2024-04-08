const Category = {
  name: 'Category',
  template: `
    <section class="section mt-6">
      <div class="container">
        <div class="mb-6 columns is-multiline is-centered">
          <div class="column is-12 is-7-fullhd is-8-desktop has-text-centered">
            <span class="has-text-grey-dark">Lorem ipsum</span>
            <h2 class="mt-2 mb-4 is-size-1 is-size-3-mobile has-text-weight-bold">{{ $route.params.category.charAt(0).toUpperCase() + $route.params.category.slice(1) }}</h2>
            <p class="subtitle has-text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque massa nibh, pulvinar vitae aliquet nec, accumsan aliquet orci.</p>
          </div>
        </div>
        <article class="columns is-multiline">
          <div v-for="(post, index) in visiblePosts" :key="post.id" :class="index === 0 ? 'column is-8 mb-5' : 'column is-4 mb-5'" @click="goToLink(post.slug)">
            <div class="mb-4 is-flex">
              <img class="image" :src="post.yoast_head_json.og_image[0].url" alt="{{ post.title.rendered }}" :style="index === 0 ? '' : 'max-height: 200px;'">
            </div>
            <span><small class="has-text-grey-dark">10 jun 2021 19:40</small></span>
            <h2 v-html="post.title.rendered" class="my-2 is-size-3 is-size-4-mobile has-text-weight-bold"></h2>
            <p class="subtitle has-text-grey">{{ truncateText(post.excerpt.rendered, 200) }}</p>
          </div>
        </article>
        <div class="has-text-centered">
          <button v-if="posts.length > visiblePosts.length" class="button is-primary" @click="loadMore">Load More</button>
        </div>
      </div>
    </section>
  `,
  data() {
    return {
      loading: false,
      categoryName: this.$route.params.category,
      categoryId: null,
      posts: [],
      visiblePosts: [],
      perPage: 5,
      currentPage: 1
    }
  },
  created() {
    this.getCategoryId();
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
        const response = await fetch(`https://jogjawae.com/wp-json/wp/v2/posts?categories=${this.categoryId}&per_page=7`);
        this.posts = await response.json();
        this.updateVisiblePosts();
      } catch (error) {
        console.error('Error fetching posts by category:', error);
      }
    },
    loadMore() {
      this.currentPage++; // Menambahkan halaman
      this.updateVisiblePosts();
    },
    updateVisiblePosts() {
      const startIndex = (this.currentPage - 1) * this.perPage;
      const endIndex = this.currentPage * this.perPage;
      this.visiblePosts = this.posts.slice(0, endIndex);
    },
    truncateText(text, maxLength) {
      const withoutTags = text.replace(/<[^>]+>/g, ''); // Hapus tag HTML
      if (withoutTags.length <= maxLength) {
        return withoutTags;
      } else {
        // Menghapus spasi ekstra jika kata terakhir terputus
        let truncatedText = withoutTags.substr(0, maxLength);
        truncatedText = truncatedText.substr(0, Math.min(truncatedText.length, truncatedText.lastIndexOf(" ")));
        return truncatedText + '';
      }
    },
    goToLink(route) {
      this.$router.push('/' + route);
    }
  }
}

export default Category