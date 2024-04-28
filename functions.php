<?php
function wpassist_remove_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'global-styles' );
    wp_dequeue_style( 'dashicons-css' );
    wp_dequeue_style( 'classic-theme-styles' );
}
add_action( 'wp_enqueue_scripts', 'wpassist_remove_block_library_css', 100 );

remove_action( 'wp_enqueue_scripts', 'wp_enqueue_global_styles' );
remove_action( 'wp_footer', 'wp_enqueue_global_styles', 1 );

add_theme_support( 'post-thumbnails' );