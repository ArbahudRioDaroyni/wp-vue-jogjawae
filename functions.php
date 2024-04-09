<?php
function wpassist_remove_block_library_css(){
    wp_dequeue_style( 'wp-block-library' );
    wp_dequeue_style( 'global-styles-inline-css' );
    wp_dequeue_style( 'classic-theme-styles-inline-css' );
} 
add_action( 'wp_enqueue_scripts', 'wpassist_remove_block_library_css' );

// Function to remove unnecessary stylesheets
// function remove_unnecessary_styles() {
//     // Check if it's the front-end
//     if (!is_admin()) {
//         // Remove global-styles-inline-css
//         wp_deregister_style('global-styles-inline-css');
        
//         // Remove classic-theme-styles-inline-css
//         wp_deregister_style('classic-theme-styles-inline-css');
//     }
// }
// add_action('wp_enqueue_scripts', 'remove_unnecessary_styles', 100);