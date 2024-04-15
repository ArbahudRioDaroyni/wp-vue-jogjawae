const { createApp } = Vue

import router from './router.js'
import Navigation from './navigation.vue.js'
import Post from './post.component.js'
import ListArticle from './list-article.vue.js'
import TableOfContents from './table-of-contents.vue.js'
import Footer from './footer.vue.js'



export const app = createApp({
  methods: {
    goToLink(route) {
      this.$router.push('/' + route);
    }
  }
})

app.use(router)

app.component('Navigation', Navigation)
  .component('Post', Post)
  .component('ListArticle', ListArticle)
  .component('TableOfContents', TableOfContents)
  .component('Footer', Footer)
  
app.mount('#app')