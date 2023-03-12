<?php
$page_current = get_query_var('args');
global $post;
$args = array(
    'post_type'      => 'page',
    'posts_per_page' => -1,
    'post_parent'    => $page_current,
    'order'          => 'ASC',
    'orderby'        => 'menu_order'
);


$parent = new WP_Query( $args );

if ( $parent->have_posts() ) : ?>

<div class="container-image-full-front" data-module="footer">
    <img src="<?= get_template_directory_uri(); ?>/assets/img/bg/bg-frontpage.jpg" alt="">
    <img src="<?= get_template_directory_uri(); ?>/assets/img/bg/bg-arbre.png" class="parallax" alt="">

    <div class="content-front-page">
        <p class="intro-front-page">Bienvenue au <?= get_field('params_building_address', $page_current); ?></p>
        <div class="title t-1 white">
            Ensemble, agissons pour le climat et l’environnement<br/>
            et protégeons notre patrimoine
        </div>
    </div>
</div>

<ul class="container-page-child-frontpage">
    <?php while ( $parent->have_posts() ) : $parent->the_post(); ?>

        <li>
            <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>">
                <?php the_title(); ?>
                <img class="picto" src="<?= get_template_directory_uri(); ?>/assets/img/commons/arrow-white.svg" alt="">
            </a>
        </li>

    <?php endwhile; ?>
</ul>


<?php endif; wp_reset_postdata(); ?>