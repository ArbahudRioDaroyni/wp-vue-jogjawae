const Navigation = {
  name: 'Navigation',
  template: /*html*/`
    <header>
      <!-- START NAV -->
      <nav class="navbar">
        <div class="container">
          <div class="navbar-bars">
            <a href="#" class="navbar-title sidebar-toggle" style="padding: 0;"><i class="ion-navicon-round"></i></a>
            <a href="index.html" class="navbar-title">Bali Travel Time</a>
          </div>
          <div class="navbar-item">
            <!-- <img src="https://jogjawae.com/wp-content/uploads/2021/01/cropped-Favicon-Jogjawae.png" alt="Jogjawae"> -->
            <a href="index.html" class="navbar-title">Jogja Wae</a>
            <ul>
              <li><a href="destination.html">Destination</a></li>
              <li><a href="gallery.html">Gallery</a></li>
              <li><a data-slide="slides" data-slide-target="#discover">Discover</a></li>
              <li><a href="news.html"> News</a></li>
              <li><button class="btn-login" id="openLogin">LOGIN</button></li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- END NAV -->
      <!-- Sidebar -->
      <div class="sidebar">
      <ul class="sidebar-list">
        <li><a href="" class="close"><span class="ion-android-close"></span></a></li>
        <li class="sidebar-list-hover"><a href="index.html">Home</a></li>
          <li class="sidebar-list-hover"><a href="destination.html">Destination</a></li>
          <li class="sidebar-list-hover"><a href="gallery.html">Gallery</a></li>
          <li class="sidebar-list-hover"><a href="index.html#discover">Discover</a></li>
          <li class="sidebar-list-hover"><a href="news.html"> News</a></li>
          <li><a class="btn btn-orange btn-round" href="login.html"> Login</a></li>
      </ul>                    
      </div>

      <!-- Sidebar Overlay -->
      <section class="sidebar-overlay"></section>
    </header>
  `
}

export default Navigation