<!doctype html>
<html>
  <head>
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <link rel="profile" href="https://gmpg.org/xfn/11" />
    <meta name="description" content="<?php echo $desc = (is_home() || is_front_page()) ? 'Informasi lengkap mengenai cheat, hack, review, preview, dan walkthrough tentang Game' : wp_strip_all_tags( get_the_excerpt(), true ); ?>" />
    <link rel="pingback" href="<?php bloginfo( 'url' ) ?>/xmlrpc.php" />
    <!-- <meta name='author' content='' /> -->
    <!-- <meta name="keywords" content=""> -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <link rel="alternate" href="<?php echo $url = (is_home() || is_front_page()) ? bloginfo( 'url' ) : the_permalink(); ?>" hreflang="x-default"/>
    <link rel="alternate" href="<?php echo $url = (is_home() || is_front_page()) ? bloginfo( 'url' ) : the_permalink(); ?>" hreflang="id_ID"/>
    <!-- <script data-ad-client="ca-pub-8128880231230387" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script> -->
    <meta name="google-site-verification" content="MWy20Ssx-lUy-9lZLJeUFNEEZGTZQPsqikKp_IYQXKM" />

    <link rel="icon" type="image/png" sizes="32x32" href="https://jogjawae.com/wp-content/uploads/2021/01/cropped-Favicon-Jogjawae.png">
    
    <link rel="preload" media="screen" href="<?= get_template_directory_uri() . '/bulma/css/bulma.css?ver=0.0.1' ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= get_template_directory_uri() . '/bulma/css/bulma.css?ver=0.0.1' ?>"></noscript>
    <link rel="preload" media="screen" href="<?= get_template_directory_uri() . '/style.css?ver=0.0.1' ?>" as="style" onload="this.onload=null;this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="<?= get_template_directory_uri() . '/style.css?ver=0.0.1' ?>"></noscript>

    <?php wp_head(); ?>

    <script src="<?= get_template_directory_uri() . '/assets/vue@3/vue.global.js' ?>"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/vue-router/4.0.0-alpha.12/vue-router.global.js"></script>
    <script type="module" src="<?= get_template_directory_uri() . '/main.js' ?>"></script>
  </head>
  <body>
    <div id="app">
      <router-view></router-view>
    </div>
  </body>
</html>