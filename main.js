const { createApp } = Vue

import router from './router.js'
import Navigation from './navigation.vue.js'
import Home from './home.component.js'
import Post from './post.component.js'
import Category from './category.component.js'
import TableOfContents from './table-of-contents.vue.js'
import Footer from './footer.vue.js'



export const app = createApp({
// root elements
})

app.use(router)
app.component('Navigation', Navigation)
  .component('Home', Home)
  .component('Post', Post)
  .component('Category', Category)
  .component('TableOfContents', TableOfContents)
  .component('Footer', Footer)
app.mount('#app')