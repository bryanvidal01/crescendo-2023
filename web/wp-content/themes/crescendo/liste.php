<?php
/* Template Name: Page liste */
get_header();

?>

    <div class="grid" data-module="liste" data-barba="container" data-barba-namespace="liste">
        <a href="<?= get_site_url(); ?>" class="round-hand close-list">Fermer</a>

        <div class="container-tuto">
            <div class="content-tuto">
                <img src="<?= get_template_directory_uri(); ?>/assets/img/commons/mouse-move.svg" alt="">

                <p>Déplace ta souris pour découvrir les projets</p>
                <a href="" class="round-hand close-tuto">Ok pour moi !</a>
            </div>
        </div>
        <div class="container-liste">
            <?php $i = 1; while ($i <= 12): ?>
                <a href="#"  class="list_container-image container-image-1">
                    <div class="container-image">
                        <img src="https://picsum.photos/1000/600/" alt="">
                    </div>
                    <div class="project-categorie">
                        Développement
                    </div>
                    <div class="project-name">
                        Cabinet d'avocats C&M Associés
                    </div>
                </a>
            <?php $i++; endwhile; ?>


        </div>
    </div>

<?php
get_footer();

