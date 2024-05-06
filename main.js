const { createApp } = Vue
import router from './router.js'
import Navigation from './navigation.vue.js'
import Footer from './footer.vue.js'

export const app = createApp({
  // something
})

app.use(router)

app.component('Navigation', Navigation)
  .component('Footer', Footer)

app.config.globalProperties.$goToLink = function(route) {
  this.$router.push('/' + route);
}

app.config.globalProperties.$homeURL = window.location.origin
app.config.globalProperties.$rootlocal = window.location.origin
// app.config.globalProperties.$rootlocal = "https://jogjawae.com" // for local only
  
app.mount('#app')