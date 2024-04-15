import ButtonBurger from './elements/button-burger.vue.js'
const Navigation = {
  name: 'Navigation',
  template: /*html*/`
    <header>
      <!-- Start Nav -->
      <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <router-link to="/" class="">
            <svg v-html="svgIcon" version="1.0" xmlns="http://www.w3.org/2000/svg" width="28px" height="28px" viewBox="0 0 300.000000 300.000000" preserveAspectRatio="xMidYMid meet"></svg>
          </router-link>
          <a class="navbar-item" :href="window.location.origin" @click="$goToLink(window.location.origin)">
            <img :src="$homeURL + '/wp-content/themes/wp-vue-jogjawae/assets/svg/jogjawae.svg'" alt="JogjaWae">
          </a> 

          <ButtonBurger
            role="button"
            :class="['navbar-burger has-text-primary-dark', isOpen ? 'is-active' : '']"
            @click="toggleNavbar"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenu"
          />
        </div>

        <div :class="['navbar-menu', isOpen ? 'is-active' : '']" id="navbarMenu">
          <div class="navbar-start">
            <a class="navbar-item">
              Home
            </a>

            <a class="navbar-item">
              Documentation
            </a>

            <div class="navbar-item has-dropdown is-hoverable">
              <a class="navbar-link">
                More
              </a>

              <div class="navbar-dropdown">
                <a class="navbar-item">
                  About
                </a>
                <a class="navbar-item is-selected">
                  Jobs
                </a>
                <a class="navbar-item">
                  Contact
                </a>
                <hr class="navbar-divider">
                <a class="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div>

          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <a class="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a class="button is-light">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  `,
  data() {
    return {
      isOpen: false
    };
  },
  components: {
    ButtonBurger
  },
  mounted() {
    this.checkTime();
  },
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    },
    checkTime() {
      const now = new Date();
      const hour = now.getHours();

      // Tentukan batas waktu untuk mengubah tema
      const startTime = 6; // Pukul 6 pagi
      const endTime = 18; // Pukul 6 sore

      // Periksa apakah waktu saat ini berada di antara batas waktu
      if (hour >= startTime && hour < endTime) {
        // Jika tema saat ini adalah mode terang, tambahkan atribut data-theme ke tag html
        document.documentElement.setAttribute('data-theme', 'light');
      }
    }
  }
}

export default Navigation