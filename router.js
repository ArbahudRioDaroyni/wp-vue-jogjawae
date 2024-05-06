const { createRouter, createWebHistory } = VueRouter
// const { createRouter, createWebHashHistory } = VueRouter // for local only

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
    path: '/category/:category',
    component: () => import("./category.vue.js")
  }, {
    path: '/me',
    component: () => import("./me.vue.js")
  }, {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: { template: '<Navigation /><div>Not Found</div>' }
  }, {
    path: '/404',
    name: '404',
    component: { template: '<Navigation /><div>Not Found</div><Footer />' },
    meta: { title: '404' }
  }
  
]

const router = createRouter({
  // Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  // history: createWebHashHistory(), // for local only
  mode: "history",
  base: "/",
  routes, // short for `routes: routes`
})

export default router