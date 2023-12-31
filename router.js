const { createRouter, createWebHistory } = VueRouter

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import("./home.vue.js")
  }, {
    path: '/:slug',
    component: () => import("./post.vue.js")
  }, {
    path: '/about',
    component: { template: '<Navigation /><div>About</div>' }
  }, {
    path: '/post/:id',
    component: () => import("./post.vue.js")
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: { template: '<Navigation /><div>Not Found</div>' }
  }
  
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  mode: "history",
  base: "/",
  routes, // short for `routes: routes`
})

export default router