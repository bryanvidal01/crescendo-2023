<?php

function wpm_custom_post_type() {

    $labels = array(
        'name'                => __( 'Équipements'),
        'singular_name'       => __( 'Équipement'),
        'menu_name'           => __( 'Équipements'),
    );

    $args = array(
        'label'               => __( 'Équipements'),
        'description'         => __( 'Tous sur Équipements'),
        'labels'              => $labels,
        'supports'            => array( 'title', 'author','custom-fields' ),
        'menu_icon'           => 'dashicons-phone',

        'show_in_rest'        => false,
        'hierarchical'        => true,
        'public'              => true,
        'has_archive'         => false
    );
    register_post_type( 'equipements', $args );

    $labels = array(
        'name'                => __( 'Conseils'),
        'singular_name'       => __( 'Conseil'),
        'menu_name'           => __( 'Conseils'),
    );

    $args = array(
        'label'               => __( 'Conseils'),
        'description'         => __( 'Tous sur Conseils'),
        'labels'              => $labels,
        'supports'            => array( 'title', 'author','custom-fields'),
        'menu_icon'           => 'dashicons-info',

        'show_in_rest'        => false,
        'hierarchical'        => true,
        'public'              => true,
        'has_archive'         => false,
    );
    register_post_type( 'conseils', $args );

    $labels = array(
        'name'                => __( 'Contacts'),
        'singular_name'       => __( 'Contact'),
        'menu_name'           => __( 'Contacts'),
    );

    $args = array(
        'label'               => __( 'Contacts'),
        'description'         => __( 'Tous sur Contacts'),
        'labels'              => $labels,
        'supports'            => array( 'title', 'author','custom-fields'),
        'menu_icon'           => 'dashicons-email',

        'show_in_rest'        => false,
        'hierarchical'        => true,
        'public'              => true,
        'has_archive'         => false,
    );
    register_post_type( 'contacts', $args );



}

add_action( 'init', 'wpm_custom_post_type', 0 );