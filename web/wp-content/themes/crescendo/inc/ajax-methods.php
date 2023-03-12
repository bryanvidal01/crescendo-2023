<?php
add_action( 'wp_ajax_send_message', 'send_message' );
add_action( 'wp_ajax_nopriv_send_message', 'send_message' );
function send_message()
{


    //wp_send_json( $status );
}
