const { watchEffect } = Vue

const Post = {
  name: 'Post',
  template: ``,
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
    // Menggunakan Fetch API untuk memuat file test.html
    fetch('//' + window.location.hostname + '/single-post.html')
      .then(response => response.text()) // Mengambil teks dari respons
      .then(html => {
        // Menyimpan isi file test.html dalam properti template
        this.template = html;
      })
      .catch(error => {
        console.error('Failed to load test.html:', error);
      });
      
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