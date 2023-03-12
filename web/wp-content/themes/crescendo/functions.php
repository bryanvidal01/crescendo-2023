<?php
define('THEME_DIR', get_template_directory() . '/');
define('THEME_URL', get_template_directory_uri() . '/');
define('HOME_URL', get_home_url());

define('AJAX_URL', admin_url('admin-ajax.php'));

if (ENV_PROD) {
    define('GTAG_KEY', get_field('params_ga_code', 'option'));
} else {
    define('GTAG_KEY', 'AIzaSyCvSv4RSBSEL6zCfuA6XIsMMcQA0cxgBno');
}

if(!ENV_LOCAL){
    define( 'ACF_LITE' , true );
}

require_once( __DIR__ . '/inc/datatypes.php');
require_once( __DIR__ . '/inc/configuration.php');
require_once( __DIR__ . '/inc/configuration_security.php');

if( !ENV_LOCAL ) {
    require_once( __DIR__ . '/inc/acf.php');
}

require_once(__DIR__ . '/inc/methods.php');
require_once(__DIR__ . '/inc/ajax-methods.php');


// --------------------------
// Scripts et style
// --------------------------
add_action( 'init', 'scripts_site' );

function scripts_site(){

    if ( !is_admin() && !is_login_page() ) wp_deregister_script('jquery');

    if( !is_admin() || !is_user_logged_in() ){

         // Style
        wp_enqueue_style( 'style_principal', get_template_directory_uri() . '/assets/css/app.css', array(), filemtime(get_template_directory() . '/assets/css/app.css' ) );

        // Script
        wp_enqueue_script( 'script-js', get_template_directory_uri() . '/assets/js/app.js', array(), filemtime(get_template_directory() . '/assets/js/app.js'), true );

        // Script à injecter exemple :
        // if( is_front_page() ){
        //     wp_enqueue_script( 'home-js', get_template_directory_uri() . '/js/home.js', array( 'jquery' ), '1.1.0', true );
        // }

       $dataToBePassed = array(
            'wp_ajax_url' => AJAX_URL,
            'wp_theme_url' => THEME_URL,
            'wp_home_url' => HOME_URL,
            'exampleNonce' => wp_create_nonce('exampleNonce'),
            'gtag_key' =>  GTAG_KEY,
            'bug_report_id' =>  get_field('params-bugreport-id', 'options')
        );


       global $post;

       $user_access = get_field('params_user_access', wp_get_current_user());

       $roadsDatas = [];
       $roadsFromBO = get_field('params_building_location_pins', $user_access);

       $buildLong = get_field('params_building_location_long', $user_access);
       $buildLat = get_field('params_building_location_latitude', $user_access);

       $dataToBePassed['buildLong'] = $buildLong;
       $dataToBePassed['buildLat'] = $buildLat;


       $i = 0;

       foreach ($roadsFromBO as $roadsData){
            $roadsDatas[$i] = array(
                'lat' => (float)$roadsData['params_building_location_pin_lat'],
                'long' => (float)$roadsData['params_building_location_pin_long'],
                'type' => $roadsData['params_building_location_pin_type']
            );
        $i++; }

       $dataToBePassed['roads'] = json_encode($roadsDatas);
       $dataToBePassed['template_directory'] = get_template_directory_uri();

       wp_localize_script('script-js', 'ParamsData', $dataToBePassed );

    }
}



function my_logged_in_redirect() {


    if ( !is_user_logged_in() && !is_front_page())
    {
        wp_redirect( get_site_url() );
    }

    if(!is_front_page())
    {
        global $post;

        $authorization = 500;

        $user_access = get_field('params_user_access', wp_get_current_user());

        $current_id = get_the_id();

        if($user_access == $current_id){
            $authorization = 200;
        }


        if($post->post_parent){
            if($post->post_parent == $user_access){
                $authorization = 200;
            }
        }



        if ( $authorization != 200 )
        {
            wp_redirect( get_site_url() );
            die;
        }
    }


}
//add_action( 'template_redirect', 'my_logged_in_redirect' );


add_action( 'admin_menu', 'remove_default_post_type' );

function remove_default_post_type() {
    remove_menu_page( 'edit.php' );
}


add_filter('use_block_editor_for_post', '__return_false', 10);
function remove_editor() {
    remove_post_type_support('page', 'editor');
}
add_action('admin_init', 'remove_editor');



// Meteo

function add_weather(){

    global $post;

    $user_access = get_field('params_user_access', wp_get_current_user());
    $buildLong = get_field('params_building_location_long', $user_access);
    $buildLat = get_field('params_building_location_latitude', $user_access);

    if(get_transient( 'weather_building-'.$user_access)){
        $weather_build = get_transient( 'weather_building-'.$user_access);
    }else{

        $base_url = 'https://api.openweathermap.org/data/2.5/weather?lat='. $buildLong .'&lon=' . $buildLat . '&appid=e6ffa5f1efc1f841dece0dd773fa8287&units=metric';
        $current_weather = wp_remote_get($base_url);
        $content_weather = $current_weather['body'];
        $content_weather_array = json_decode($content_weather);

        $current_weather_ico = $content_weather_array->weather[0]->main;
        $current_weather_deg = $content_weather_array->main->temp;
        $current_weather_humidity = $content_weather_array->main->humidity;
        $current_weather_wind = $content_weather_array->wind->speed;

        $datasArray = [$current_weather_ico, $current_weather_deg, $current_weather_humidity, $current_weather_wind];
        $weather_build = json_encode($datasArray);

        set_transient( 'weather_building-'.$user_access, $weather_build , '3600');

    }

    return $weather_build;
}



function getImageArray( $id, $size = null ) {

    if ( $id ) {

        $file = array();

        if ( empty( $size ) ) {
            $size = 'full';
        }

        $imageArray = wp_get_attachment_image_src( $id, $size );
        $file['url']   = $imageArray[0];
        $file['size']['width']   = $imageArray[1];
        $file['size']['height']   = $imageArray[2];
        $file['alt']   = get_post_meta( $id, '_wp_attachment_image_alt', true );
        $file['title'] = get_the_title( $id );

        return $file;

    }
}
