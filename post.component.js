const { watchEffect } = Vue

const Post = {
  name: 'Post',
  template: `
    <section class="section section-archive" v-for="{ modified_gmt, yoast_head_json, title, content, formattedModified } in post" :key="post.id">
      <div class="container" style="margin-top: 80px;">

        <div class="row">
          <div class="content">
            <main class="content-single">
              <div class="content-single-title">
                <h1 v-html="title.rendered"></h1>
                <p class=""><time :datetime="modified_gmt">{{ formattedModified }}</time></p>
                <figure>
                  <img class="image" :src="yoast_head_json.og_image[0].url" :alt="title.rendered">
                </figure>
              </div>
              <div>
                <div class="content-single-body" v-html="content.rendered"></div>
                <div class="label">
                  <a href=""><span class="ion-pricetags"></span> &nbsp; News</a>
                  <a href=""><span class="ion-android-share-alt"></span> &nbsp; Share</a>
                  <a href=""><span class="ion-heart"></span> &nbsp; Like</a>
                </div>
              </div>
              <div class="content-single-footer">
                <h3 class="text-center">Artikel Terkait {{ relatedPosts.length }}</h3>
                <div class="terkait">
                  <div class="col">
                    <img src="img/news/038321800_1523380452-IMG-20180410-WA0031.jpg"> <br><br>
                    <a href="#"><h3 class="text-center">
                      Keistimewaan Bali di Mata Dubes Mesir
                    </h3></a>
                  </div>
                  <div class="col">
                    <img src="img/news/023053600_1523534851-IMG-20180412-WA0034.jpg"> <br><br>
                    <a href="#"><h3 class="text-center">
                      Aksi Polres Badung Tangkal Hoaks
                    </h3></a>
                  </div>
                  <div class="col">
                    <img src="img/news/gunung.jpg"> <br><br>
                    <a href="#"><h3 class="text-center">
                      Gunung Agung Meletus Lagi
                    </h3></a>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div class="aside">
            <div class="row">
              <div class="aside-content">
                <form method="POST">
                  <div class="content-input">
                    <input type="text" name="cari" class="form-control" placeholder="Search ...">
                  </div>
                  <div class="content-btn">
                    <button type="submit" class="btn-search"><i class="ion-search"></i></button>
                  </div>
                </form>
              </div>
              <div class="aside-content">
                <div class="content-title">
                  <b>KATEGORI</b>
                </div>
                <div class="content-body">
                  <div v-if="categories.length">
                    <ul style="padding: 0;list-style: none;" v-for="category in categories" :key="category.id">
                      <router-link :to="'/' + category.name.toLowerCase()">{{ category.name }}</router-link>
                    </ul>
                  </div>
                  <div v-else>
                    No categories found.
                  </div>
                </div>
              </div>
              <div class="aside-content">
                <div class="content-title">
                  <b>REKOMENDASI</b>
                </div>
                <div class="content-body">
                  <ul style="padding: 0;list-style: none;">
                    <li><a href="single-news.html">
                      Keistimewaan Bali di Kaca Internasional
                    </a></li>
                    <li><a href="single-news.html">
                      Ini Dia! 5 Rekomendasi Wisata Asik di Bali
                    </a></li>
                    <li><a href="single-news.html">
                      Krumunan Gajah yang Tertawa di Kebun Binatang Bali
                    </a></li>
                    <li><a href="single-news.html">
                      Tempat Paling Wajib Dikunjungi Jika Kamu Main ke Bali
                    </a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </section>
  `,
  data() {
    return {
      loading: false,
      post: null,
      categories: [],
      relatedPosts: [],
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
            this.fetchDataPost();
            this.fetchCategories();
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
        console.error('Error fetching data:', error);
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
    async fetchRelatedPosts() {
      if (this.post && this.post[0] && this.post[0].tags && this.post[0].tags.length > 0) {
        const tagIds = this.post[0].tags.map(tag => tag.id).join(',');
        const response = await fetch(`https://jogjawae.com/wp-json/wp/v2/posts?tags=${tagIds}&per_page=3`);
        if (response.ok) {
          this.relatedPosts = await response.json();
        } else {
          console.error('Failed to fetch related posts');
        }
      }
    }
  },
}

export default Post