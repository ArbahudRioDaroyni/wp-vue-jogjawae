const { watchEffect } = Vue

const Category = {
  name: 'Category',
  template: `
    <h1>Post by Category: {{ categoryName }}</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{ post.title.rendered }}</li>
    </ul>
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
        const response = await fetch(`https://yourwordpresssite.com/wp-json/wp/v2/categories?search=${this.categoryName}`);
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
        const response = await fetch(`https://yourwordpresssite.com/wp-json/wp/v2/posts?categories=${this.categoryId}`);
        this.posts = await response.json();
      } catch (error) {
        console.error('Error fetching posts by category:', error);
      }
    }
  }
}

export default Category