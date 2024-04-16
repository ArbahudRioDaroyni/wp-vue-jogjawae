const Footer = {
  name: 'Footer',
  template: /*html*/`
      <footer class="section">
      <div class="container">
        <div class="pb-5 is-flex is-flex-wrap-wrap is-justify-content-between is-align-items-center">
          <div class="mr-auto mb-2">
            <router-link to="/" class="is-inline-block">
              <img :src="$homeURL + '/wp-content/themes/wp-vue-jogjawae/assets/svg/jogjawae.svg'" alt="JogjaWae">
            </router-link>
          </div>
          <div>
            <ul class="is-flex is-flex-wrap-wrap is-align-items-center is-justify-content-center">
              <li class="mr-4"><a class="button is-white" href="#">About</a></li>
              <li class="mr-4"><a class="button is-white" href="#">Company</a></li>
              <li class="mr-4"><a class="button is-white" href="#">Services</a></li>
              <li><a class="button is-white" href="#">Testimonials</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="pt-5" style="border-top: 1px solid #dee2e6;"></div>
      <div class="container">
        <div class="is-flex-tablet is-justify-content-between is-align-items-center">
          <p>All rights reserved © Jogjawae 2024</p>
          <div class="py-2 is-hidden-tablet"></div>
          <div class="ml-auto">
            <a class="mr-4 is-inline-block" href="https://www.facebook.com/arbahudrio.daroyni/" rel="me nofollow">
              <img :src="rootUrl + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-facebook.svg'" alt="Find us on Facebook">
            </a>
            <a class="mr-4 is-inline-block" href="https://twitter.com/arbahud" rel="me nofollow">
              <img :src="rootUrl + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-twitter.svg'" alt="Find us on Twitter">
            </a>
            <a class="mr-4 is-inline-block" href="https://github.com/ArbahudRioDaroyni" rel="me nofollow">
              <img :src="rootUrl + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-github.svg'" alt="Find us on Github">
            </a>
            <a class="mr-4 is-inline-block" href="https://www.instagram.com/arbahud_rio_/" rel="me nofollow">
              <img :src="rootUrl + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-instagram.svg'" alt="Find us on Instagram">
            </a>
            <a class="is-inline-block" href="https://id.linkedin.com/in/arbahud-rio-daroyni-062100146" rel="me nofollow">
              <img :src="rootUrl + '/wp-content/themes/wp-vue-jogjawae/assets/svg/social-linkedin.svg'" alt="Find us on LinkedIn">
            </a>
          </div>
        </div>
      </div>
    </footer>
  `,
  data() {
    return {
      rootUrl: ''
    };
  },
  mounted() {
    this.rootUrl = window.location.origin
  }
}

export default Footer