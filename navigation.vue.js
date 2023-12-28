const Navigation = {
  name: 'Navigation',
  template: /*html*/`
    <header>
      <!-- START NAV -->
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="../">
              <img src="https://jogjawae.com/wp-content/uploads/2021/01/cropped-Favicon-Jogjawae.png" alt="Jogjawae">
            </a>
            <span class="navbar-burger burger" data-target="navbarMenu">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenu" class="navbar-menu">
            <div class="navbar-end">
              <router-link class="navbar-item is-active" to="/">Home</router-link>
              <div class=" navbar-item">
                <div class="control has-icons-left">
                  <input class="input is-rounded" type="email" placeholder="Search">
                  <span class="icon is-left">
                    <i class="fa fa-search"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <!-- END NAV -->
    </header>
  `
}

export default Navigation