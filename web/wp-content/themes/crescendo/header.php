<?php
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <link rel="profile" href="https://gmpg.org/xfn/11">
    
    <?php
        $pageTitle = (is_front_page() ? get_bloginfo('description') : wp_title('', false) ) . ' | ' . get_bloginfo('name') ;
        $siteDescription = 'description';
    ?>
    <title><?php echo $pageTitle; ?></title>
    <meta name="description" content="<?php echo $siteDescription; ?>">

    <!-- Copy & Paste Real Favicon Geenerator code : http://realfavicongenerator.net -->
    <link rel="icon" type="image/x-icon" href="<?= get_template_directory_uri(); ?>/assets/favicon/favicon-32x32.png">

    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
    <!-- Apple Mobile -->
    <link rel="apple-touch-icon-precomposed" href="">

    <meta name='HandheldFriendly' content='true' />
    <meta name='format-detection' content='telephone=no' />
    <meta name="msapplication-tap-highlight" content="no">
    <!-- Add to Home Screen -->
    <meta name="apple-mobile-web-app-title" content="" />
    <meta name="apple-mobile-web-app-capable" content="no" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <!-- Smart App Banner - https://developer.apple.com/library/safari/documentation/AppleApplications/Reference/SafariHTMLRef/Articles/MetaTags.html -->
    <meta name="apple-itunes-app" content="app-id=APP_ID,affiliate-data=AFFILIATE_ID,app-argument=SOME_TEXT">
    <!-- Meta Tags Generated via http://heymeta.com -->
    <!-- Google / Search Engine Tags -->
    <meta itemprop="name" content="<?php wp_title( '' ); ?>">
    <meta itemprop="description" content="<?php bloginfo( 'description' ); ?>">
    <meta itemprop="image" content="<?php echo get_template_directory_uri(); ?>/assets/img/google.jpg">
    <!-- Facebook Open Graph
    https://developers.facebook.com/tools/debug/sharing/
    https://developers.facebook.com/docs/sharing/webmasters#markup -->
    <meta property="fb:app_id" content="123456789">
    <meta property="og:url" content="<?php bloginfo( 'wpurl' ); ?>">
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?php wp_title( '' ); ?>">
    <meta property="og:description" content="<?php bloginfo( 'description' ); ?>">
    <meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/facebook.jpg">
    <!-- Twitter Card
    https://cards-dev.twitter.com/validator
    https://dev.twitter.com/cards/getting-started -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php wp_title( '' ); ?>">
    <meta name="twitter:description" content="<?php bloginfo( 'description' ); ?>">
    <meta name="twitter:image" content="<?php echo get_template_directory_uri(); ?>/assets/img/twitter.jpg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.css">

    <style>
        @font-face {
            font-family: 'mabry_probold';
            src: url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_bold-webfont.woff2') format('woff2'),
            url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_bold-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'mabry_proitalic';
            src: url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_italic-webfont.woff2') format('woff2'),
            url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_italic-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'mabry_prolight';
            src: url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_light-webfont.woff2') format('woff2'),
            url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_light-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'mabry_promedium';
            src: url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_medium-webfont.woff2') format('woff2'),
            url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro_medium-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'mabry_proregular';
            src: url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro-webfont.woff2') format('woff2'),
            url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry_pro-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'mabry_prolight';
            src: url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry-light-pro-webfont.woff2') format('woff2'),
            url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry-light-pro-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
        @font-face {
            font-family: 'mabry_promedium';
            src: url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry-medium-pro-webfont.woff2') format('woff2'),
            url('<?= get_template_directory_uri(); ?>/assets/fonts/mabry-medium-pro-webfont.woff') format('woff');
            font-weight: normal;
            font-style: normal;
        }
    </style>

    <!--<script src="<?= get_template_directory_uri(); ?>/assets/js/sound.js"></script>-->

    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?> data-module="navigation" data-barba="wrapper">

<header>
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <a href="<?= get_site_url(); ?>/liste/">
                    <img src="<?= get_template_directory_uri(); ?>/assets/img/commons/griff.svg" class="griff" alt="">
                </a>
            </div>
            <div class="col-sm-4 text-center">
                <a href="<?= get_site_url(); ?>">
                    <img src="<?= get_template_directory_uri(); ?>/assets/img/commons/logo-crescendo.svg" class="logo" alt="">
                </a>
            </div>
            <div class="col-sm-4 text-right">
                <ul>
                    <li>
                        <a href="">Contact</a>
                    </li>
                    <li>
                        <a href="<?php get_the_permalink(); ?>/liste/" class="round-hand">All Projects</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</header>

<div class="project-hero">
    <img src="https://picsum.photos/1920/1080" alt="">
</div>
