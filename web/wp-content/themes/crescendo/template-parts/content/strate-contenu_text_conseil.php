<?php
    $contenu_text_conseil_title = get_sub_field('contenu_text_conseil_title');
    $contenu_text_conseil_text = get_sub_field('contenu_text_conseil_text');
    $contenu_text_conseil_linked = get_sub_field('contenu_text_conseil_linked');
    $contenu_text_conseil_order = get_sub_field('contenu_text_conseil_order');
?>

<div class="container-fluid strate-conseils">
    <div class="row">
        <div class="col-sm-10 mx-auto">
            <div class="title t-1">
                <?= $contenu_text_conseil_title; ?>
            </div>
        </div>
    </div>
</div>

