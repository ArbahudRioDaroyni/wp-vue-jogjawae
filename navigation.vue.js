const Navigation = {
  name: 'Navigation',
  template: /*html*/`
    <header>
      <!-- Start Nav -->
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="#">
            <img src="https://jogjawae.com/wp-content/uploads/2021/01/cropped-Favicon-Jogjawae.png" alt="Jogjawae">
          </a>

          <a role="button" class="navbar-burger" @click="toggleNavbar" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div :class="['navbar-menu', isOpen ? 'is-active' : '']" id="navbarBasicExample">
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
  methods: {
    toggleNavbar() {
      this.isOpen = !this.isOpen;
    }
  }
}

export default Navigation