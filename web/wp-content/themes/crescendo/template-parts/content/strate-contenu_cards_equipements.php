<?php
    $contenu_cards_equipements_title = get_sub_field('contenu_cards_equipements_title');
    $contenu_cards_equipements_cards = get_sub_field('contenu_cards_equipements_cards');
?>

<div class="container-fluid strate-conseils">
    <div class="row">
        <div class="col-sm-10 mx-auto">
            <div class="title t-1">
                <?= $contenu_cards_equipements_title; ?>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-12 mx-auto">
            <div class="row">
                <?php foreach ($contenu_cards_equipements_cards as $contenu_cards_equipements_card): ?>
                    <div class="col-sm-3">
                        <?php lsdGetTemplatePart('general', 'bloc', 'card-conseil-equipement', $contenu_cards_equipements_card); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>
