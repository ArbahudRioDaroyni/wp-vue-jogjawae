const { createApp } = Vue
import Category from './category.component.js'
export const app = createApp({
  
})
app.component('Category', Category)


const Category = {
  template: /*html*/`
    <Navigation />
    <Category />
    <Footer />
  `
}

export default Category