const { createApp } = Vue
import router from './router.js'
import Home from './home.vue.js'
import Navigation from './navigation.vue.js'
import Post from './post.component.js'
import Homepage from './home.component.js'



export const app = createApp({
  
})

app.use(router)
app.component('Home', Home)
app.component('Navigation', Navigation)
app.component('Post', Post)
app.component('Homepage', Homepage)
app.mount('#app')
