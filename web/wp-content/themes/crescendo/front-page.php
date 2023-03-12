<?php
/* Template Name: Page d'accueil */
get_header();
?>
<div data-module="homePage" data-barba="container" data-barba-namespace="home">
    <div class="intro-frontpage">
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-6">
                    <h1 class="t1"><span>S</span><span>t</span><span>u</span><span>d</span><span>i</span><span>o</span> <strong><span>d</span><span>i</span><span>g</span><span>i</span><span>t</span><span>a</span><span>l</span>
                        <svg width="270" class="jelly" height="52" viewBox="0 0 270 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path class="line" d="M1 1.5C26.1351 1.5 56 1.5 129.417 5.98095C157.393 6.484 184.621 6.90341 212.586 7.96825C229.854 8.62579 251.729 7.26511 269 7.96825C265.881 8.9557 68.4255 34.4657 124.393 38.3998C135.286 38.3998 146.062 39.6686 156.931 39.7998C161.399 39.8538 165.231 40.7033 169.523 41.861C169.902 41.9632 174.53 42.7158 174.233 43.2999C173.566 44.611 169.247 45.1098 167.889 45.3999C160.607 46.9547 153.402 48.9754 145.877 49.6C145.103 49.6642 137.922 50.0762 140.205 51" stroke="white" stroke-width="2" stroke-linecap="round"/>
</svg>
</strong> <span>c</span><span>r</span><span>é</span><span>a</span><span>t</span><span>i</span><span>f</span></h1>
                </div>
                <div class="col-sm-5 offset-1">
                    <p class="intro-text">
                        Notre ambition, une symphonie digitale, atteignant son crescendo à nos côtés.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <?php $i = 1; while ($i <= 8): ?>
            <div class="swiper-slide">
                <div class="thumbContainer">
                    <a href="<?= get_site_url(); ?>/single/" class="list_container-image container-image-1 single-link" data-img-full="https://picsum.photos/1920/1080">
                        <div class="project-image">
                            <img src="https://picsum.photos/600/500" alt="">
                        </div>
                        <div class="project-categorie">
                            Développement
                        </div>
                        <div class="project-name">
                            Cabinet d'avocats C&M Associés
                        </div>
                    </a>
                </div>
            </div>
            <?php $i++; endwhile; ?>
        </div>
    </div>
</div>

<?php
get_footer();

