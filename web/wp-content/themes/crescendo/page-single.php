<?php
/* Template Name: Page Single */
get_header();

?>

    <div class="single" data-module="liste" data-barba="container" data-barba-namespace="single">

        <div class="hero-single">
            <div class="container-image-hero">
                <img src="https://picsum.photos/1920/1080" alt="">
            </div>
            <div class="content-hero-single">
                <div class="project-categorie">
                    Développement
                </div>
                <div class="project-name">
                    Cabinet d'avocats C&M Associés
                </div>

                <a href="" class="round-hand">Voir le site</a>
            </div>
        </div>

        <div class="container-fluid">
            <div class="row strate-text-two-cols">
                <div class="col-sm-4 mx-auto text-right">
                    <h2 class="t2">
                        Interactive développement
                    </h2>
                </div>
                <div class="col-sm-4 mx-auto">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cupiditate deleniti dicta dolores facere molestiae, numquam quae repudiandae soluta! Consequuntur facilis impedit ipsum labore laudantium molestiae, nam perspiciatis ut voluptatibus.
                    </p>
                </div>
            </div>

            <div class="row strate-image-full">
                <div class="col-sm-9 mx-auto">
                    <img src="https://picsum.photos/1920/1080" width="100%" alt="">
                </div>
            </div>

            <div class="row strate-skills">
                <div class="col-sm-3">
                    <p>
                        <strong>Projet</strong>
                        <ul>
                            <li>
                                C&M Associés
                            </li>
                        </ul>
                    </p>
                </div>
                <div class="col-sm-3">
                    <strong>Technologies</strong>
                    <ul>
                        <li>
                            WordPress
                        </li>
                        <li>
                            GSAP
                        </li>
                        <li>
                            Import
                        </li>
                        <li>
                            HTML & CSS
                        </li>
                        <li>
                            JavaScript
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3">
                    <strong>Date</strong>
                    <ul>
                        <li>
                            21 janvier 2023
                        </li>
                    </ul>
                </div>
                <div class="col-sm-3 text-right">
                    <a href="" class="round-hand">Voir le projet</a>
                </div>
            </div>

            <div class="row strate-video">
                <div class="col-sm-9 mx-auto">
                    <video autoplay loop muted>
                        <source src="<?= get_template_directory_uri(); ?>/assets/video/cm.mp4" type="video/mp4">
                    </video>
                </div>
            </div>

            <div class="row strate-view-mobile">
                <div class="col-sm-3 offset-2">
                    <img src="https://picsum.photos/1080/1920" width="100%" alt="">
                </div>
                <div class="col-sm-3 offset-1">
                    <img src="https://picsum.photos/1080/1920" width="100%" alt="">
                </div>
            </div>
        </div>

    </div>

<?php
get_footer();

