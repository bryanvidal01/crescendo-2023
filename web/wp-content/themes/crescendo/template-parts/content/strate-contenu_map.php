<?php
    $contenu_map_title = get_sub_field('contenu_map_title');

    $user_access = get_field('params_user_access', wp_get_current_user());

    $roadsDatas = [];
    $roadsFromBO = get_field('params_building_location_pins', $user_access);


?>

<div class="strate-map strate-map">
    <div class="container-fluid">
        <div class="row">
            <div class="col-sm-4">
                <ul class="container-list-address" id="container-list">
                    <?php
                    $i = 0;
                    foreach ($roadsFromBO as $roadsFromBOItem):
                    $params_building_location_pin_title = $roadsFromBOItem['params_building_location_pin_title'];
                    $params_building_location_pin_location = $roadsFromBOItem['params_building_location_pin_location'];
                    $params_building_location_pin_type = $roadsFromBOItem['params_building_location_pin_type'];
                    $params_building_location_pin_long = $roadsFromBOItem['params_building_location_pin_long'];
                    $params_building_location_pin_lat = $roadsFromBOItem['params_building_location_pin_lat'];
                    ?>
                        <li id="index-<?= $i?>">
                            <a href="" data-long="<?= $params_building_location_pin_long; ?>" data-lat="<?= $params_building_location_pin_lat; ?>">
                                <div class="pin">
                                    <img src="<?= get_template_directory_uri(); ?>/assets/img/commons/<?= $params_building_location_pin_type;?>.svg" alt="">
                                </div>
                                <div class="title-location">
                                    <?= $params_building_location_pin_title; ?>
                                </div>
                                <div class="description-location">
                                    <?= $params_building_location_pin_location; ?>
                                </div>

                            </a>
                        </li>
                    <?php $i++; endforeach; ?>
                </ul>
            </div>
            <div class="col-sm-8">
                <div id="container-map" data-module="map">

                </div>
            </div>
        </div>
    </div>
</div>
