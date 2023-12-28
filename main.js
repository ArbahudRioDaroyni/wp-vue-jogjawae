// import { createApp } from 'vue'
const { createApp } = Vue
// import { createApp, ref, watchEffect } from 'vue'
import router from './router.js'
import Navigation from './navigation.vue.js'
import Home from './home.component.js'
import Post from './post.component.js'



export const app = createApp({
  
})

app.use(router)
app.component('Navigation', Navigation)
app.component('Home', Home)
app.component('Post', Post)
app.mount('#app')