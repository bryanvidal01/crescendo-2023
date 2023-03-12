<?php
    $args = get_query_var('args');

    $titleCard = get_field('fields_conseil_equipement_titre', $args);
    $textCard = get_field('fields_conseil_equipement_text', $args);
    $pictoCard = get_field('fields_conseil_equipement_picto', $args);
    $imageCard = get_field('fields_conseil_equipement_img', $args);
    $imageCardUrl = '';

    if($imageCard){
        $imageCardUrl = getImageArray($imageCard, 'large');
    }

?>

<div class="container-card <?= ($imageCardUrl) ? 'has-image': '';?>" style="background-image: url('<?= $imageCardUrl['url']; ?>'); ">

    <div class="container-info-card">
        <?php if($pictoCard['url']): ?>
            <div class="picto">
                <img src="<?= $pictoCard['url']; ?>" alt="">
            </div>
        <?php endif; ?>

        <?php if($titleCard): ?>
            <div class="title-card title">
                <?= $titleCard; ?>
            </div>
        <?php endif; ?>

        <?php if($textCard): ?>
            <div class="content-card">
                <p>
                    <?= $textCard; ?>
                </p>
            </div>
        <?php endif; ?>
    </div>
</div>