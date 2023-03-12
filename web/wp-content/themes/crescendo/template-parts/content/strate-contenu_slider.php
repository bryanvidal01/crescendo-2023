<?php
$contenu_slider_content = get_sub_field('contenu_slider_content');
?>

<div class="container-fluid strate-slider">
    <div class="row">
        <div class="col-sm-10 mx-auto">
            <div class="container-slider">
                <div class="swiper" data-module="swiperJs">
                    <div class="swiper-wrapper">
                        <?php foreach ($contenu_slider_content as $contenu_slider_content_item): ; ?>

                            <?php
                            $image_url = '';
                            if($contenu_slider_content_item['ID']) {
                                $image_url = wp_get_attachment_image_url($contenu_slider_content_item['ID'], 'large');
                            }
                            ?>

                            <div class="swiper-slide">
                                <img src="<?= $image_url; ?>" alt="">
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div class="button-prev"></div>
                <div class="button-next"></div>
            </div>
        </div>
    </div>
</div>
