<?php
    $contenu_titre_text_center_title_value = get_sub_field('contenu_titre_text_center_title_value');
    $contenu_titre_text_center_text_value = get_sub_field('contenu_titre_text_center_text_value');
?>

<div class="container-fluid strate-content-text-center">
    <div class="row">
        <div class="col-sm-8 offset-1">
            <div class="title t-5">
                <?= $contenu_titre_text_center_title_value ?>
            </div>
            <p>
                <?= $contenu_titre_text_center_text_value ?>
            </p>
        </div>
    </div>
</div>
