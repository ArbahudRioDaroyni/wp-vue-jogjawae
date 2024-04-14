const Post = {
  name: 'Post',
  template: `
    <main
      v-if="!loading"
      v-for="{ modified_gmt, yoast_head_json, title, content, formattedModified } in post"
      :key="post.id"
      class="mt-6">
      <article>
        <section class="hero">
          <div class="hero-body">
            <h1
              v-html="title.rendered"
              class="title mb-1"></h1>
            <p class="subtitle">
              <time :datetime="modified_gmt">{{ formattedModified }}</time>
            </p>
          </div>
        </section>
        <section class="hero">
          <div class="hero-body pt-0">
            <figure class="image is-16by9">
              <img
                :src="yoast_head_json.og_image[0].url"
                :alt="title.rendered"
                class="image"
                loading="lazy"
                decoding="async">
            </figure>
          </div>
        </section>
        <section class="container is-fluid">
          <div class="content content-single columns">
            <div class=" column is-8 is-offset-2">
              <table-of-contents :headings="headings"></table-of-contents>
              <div class="content-article" v-html="content.rendered"></div>
              <aside>
                <div>
                  <h3>Kategori</h3>
                  <div v-if="categories.length">
                    <ul v-for="category in categories" :key="category.id">
                      <router-link :to="'/' + 'category/' + category.name.toLowerCase() + '/'">{{ category.name }}</router-link>
                    </ul>
                  </div>
                  <div v-else>
                    No categories found.
                  </div>
                </div>
                <div v-if="latestposts && latestposts.length">
                  <h3>Artikel Terbaru</h3>
                  <div class="content-body" v-for="latestpost in latestposts" :key="latestposts.id">
                    <ul style="padding: 0;list-style: none;">
                      <li>
                        <router-link :to="'/' + latestpost.slug.toLowerCase()">
                          <span v-html="latestpost.title.rendered"></span>
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </article>
    </main>
    <div v-else class="mt-6">
      <section class="hero">
        <div class="hero-body">
          <h1 class="title mb-1 is-skeleton">----- ----- ----- --------- ---, ----, - ------ ---- -- ---, ---- -------</h1>
          <p class="subtitle is-skeleton">-- ----- ----</p>
        </div>
      </section>
      <section class="hero">
        <div class="hero-body pt-0">
          <figure class="image is-16by9 is-skeleton">
          </figure>
        </div>
      </section>
      <div class="container is-fluid skeleton-lines">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="container is-fluid skeleton-lines mt-3">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  `,
  data() {
    return {
      loading: false,
      post: null,
      categories: [],
      latestposts: [],
      error: null,
      headings: [] // table-of-contents
    }
  },
  created() {
    this.checkSlug();
  },
  methods: {
    checkSlug() {
      this.$watch(
        function() {
          return this.$route.params.slug;
        },
        function() {
          const isValidSlug = /^[a-zA-Z0-9-]+$/.test(this.$route.params.slug);
          if (isValidSlug) {
            this.loading = true;
            this.fetchDataPost();
            this.fetchCategories();
            this.fetchLatestPosts();
          } else {
            this.$router.push({ path: '/' });
          }
        },
        { immediate: true }
      )
    },
    async fetchDataPost() {
      this.scrollToTop();
      this.error = this.post = null
      this.loading = true

      try {
        const url = `${window.location.origin}/wp-json/wp/v2/posts?slug=${this.$route.params.slug}`;
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
        this.error = 'Error fetching data.';
      } finally {
        this.loading = false;
      }
    },
    async fetchCategories() {
      try {
        const url = `${window.location.origin}/wp-json/wp/v2/categories`;
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
        const response = await fetch(`${window.location.origin}/wp-json/wp/v2/posts?per_page=3&_embed`);
        if (response.ok) {
          this.latestposts = await response.json();
        } else {
          console.error('Failed to fetch related posts');
        }
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    },
    transformJSON(inputJSON) {
      let transformedJSON = [];
      let currentParent = null;
  
      for (let i = 0; i < inputJSON.length; i++) {
          const currentItem = inputJSON[i];
  
          if (currentItem.level === 2) {
              // If level is 2, it's a parent item
              transformedJSON.push({
                  id: currentItem.id,
                  title: currentItem.title,
                  level: currentItem.level,
                  parentId: currentItem.parentId,
                  data: []
              });
              currentParent = transformedJSON[transformedJSON.length - 1];
          } else {
              // If level is greater than 2, it's a child item
              const newItem = {
                  id: currentItem.id,
                  title: currentItem.title,
                  level: currentItem.level,
                  parentId: currentItem.parentId
              };
  
              if (currentItem.level === 3) {
                  // If level is 3, it's a direct child of the parent item
                  currentParent.data.push(newItem);
              } else {
                  // If level is greater than 3, find the appropriate parent to attach the child
                  let parentLevel = currentItem.level - 1;
                  let currentData = currentParent.data;
  
                  while (parentLevel > 3) {
                      const lastChild = currentData[currentData.length - 1];
                      currentData = lastChild.data;
                      parentLevel--;
                  }
  
                  currentData[currentData.length - 1].data.push(newItem);
              }
          }
      }
  
      return transformedJSON;
    },
    createTableofContents() {
      // Start Table 0f Contents
      // get ell h1-h6 in .content-article => store as array
      const headings = Array.from(document.querySelectorAll(".content-article h1, .content-article h2, .content-article h3, .content-article h4, .content-article h5, .content-article h6"));
      this.headings = headings.map((heading, index) => {
        const id = heading.textContent.trim().replace(/\s+/g, '-'); // Create an id from the title by removing spaces and replacing with '-' (dash)
        heading.id = id; // Add id to the heading element
        let level = parseInt(heading.tagName.substring(1)); // Get the heading level (e.g., h1, h2, etc.)
        let parentId = null; // Initialize parentId

        // Find the closest parent heading with a lower level
        for (let i = headings.indexOf(heading) - 1; i >= 0; i--) {
          if (parseInt(headings[i].tagName.substring(1)) < level) {
            parentId = headings[i].id; // Set parentId to the id of the parent heading
            break; // Exit the loop after finding the parent heading
          }
        }
        
        return {
          index: index,
          id: id,
          title: heading.textContent,
          level: level,
          parentId: parentId // Add parentId to the heading object
        };
      });
      this.headings = transformJSON(this.headings);
      console.log(this.headings); // JSON yang telah diubah

      // Start Table 0f Contents
    }
  

    // async fetchRelatedPosts() {
      // if (this.post && this.post[0] && this.post[0].tags && this.post[0].tags.length > 0) {
      //   const tagIds = this.post[0].tags.map(tag => tag.id).join(',');
      //   const response = await fetch(`${window.location.origin}/wp-json/wp/v2/posts?tags=${tagIds}&per_page=3`);
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
  updated() {
    // Start Table 0f Contents
    if (this.headings.length == 0) {
      this.createTableofContents();
    }
    // End Table 0f Contents
  }
}

export default Post