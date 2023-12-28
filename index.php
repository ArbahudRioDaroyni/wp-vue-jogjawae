<!doctype html>
<html>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <meta name="description" content="<?php echo $desc = (is_home() || is_front_page()) ? 'Informasi lengkap mengenai cheat, hack, review, preview, dan walkthrough tentang Game' : wp_strip_all_tags( get_the_excerpt(), true ); ?>" />
    <link rel="pingback" href="<?php bloginfo( 'url' ) ?>/xmlrpc.php" />
    <!-- <meta name='author' content='' /> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <!-- <meta name="keywords" content=""> -->
    <link rel="alternate" href="<?php echo $url = (is_home() || is_front_page()) ? bloginfo( 'url' ) : the_permalink(); ?>" hreflang="x-default"/>
    <link rel="alternate" href="<?php echo $url = (is_home() || is_front_page()) ? bloginfo( 'url' ) : the_permalink(); ?>" hreflang="id_ID"/>
    <!-- <script data-ad-client="ca-pub-8128880231230387" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
    <meta name="google-site-verification" content="MWy20Ssx-lUy-9lZLJeUFNEEZGTZQPsqikKp_IYQXKM" />
    


    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="icon" type="image/png" sizes="32x32" href="https://jogjawae.com/wp-content/uploads/2021/01/cropped-Favicon-Jogjawae.png">
    
    <link rel="preload" media="screen" href="<?= get_template_directory_uri() . '/bulma-0.9.4 (1)/css/bulma.min.css' ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= get_template_directory_uri() . '/bulma-0.9.4 (1)/css/bulma.min.css?ver=0.0.1' ?>"></noscript>
    <link rel="preload" media="screen" href="<?= get_template_directory_uri() . '/bulma-0.9.4 (1)/css/bulma-divider.min.css' ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= get_template_directory_uri() . '/bulma-0.9.4 (1)/css/bulma-divider.min.css?ver=0.0.1' ?>"></noscript>
    <link rel="preload" media="screen" href="<?= get_template_directory_uri() . '/style.css' ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= get_template_directory_uri() . '/style.css?ver=0.0.1' ?>"></noscript>

    <?php wp_head(); ?>
    
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');
      body {font-family: 'Nunito', sans-serif;}
      nav.navbar {
        height: 6rem !important;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06) !important;
      }
      :root{
        ::-webkit-scrollbar{height:10px;width:10px}::-webkit-scrollbar-track{background:#efefef;border-radius:6px}::-webkit-scrollbar-thumb{background:#d5d5d5;border-radius:6px}::-webkit-scrollbar-thumb:hover{background:#c4c4c4}
      }
      ::selection{color: lavender; background-color:black;}
    </style>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.0-alpha.12/vue-router.global.js"></script>
    <script type="module" src="<?= get_template_directory_uri() . '/main.js' ?>"></script>
  </head>
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
</html>