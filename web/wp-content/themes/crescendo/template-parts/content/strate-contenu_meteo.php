<?php
    $contenu_meteo_title = get_sub_field('contenu_meteo_title');
    $contenu_meteo_sub_title = get_sub_field('contenu_meteo_sub_title');
    $contenu_meteo_conseils = get_sub_field('contenu_meteo_conseils');

    $current_weather = add_weather();

?>

<div class="container-fluid strate-meteo">
    <div class="row">
        <div class="col-sm-7">
            <div class="row list-conseil">
                <?php foreach ($contenu_meteo_conseils as $contenu_meteo_conseils_item): ?>
                    <div class="col-sm-6">
                        <?php lsdGetTemplatePart('general', 'bloc', 'card-conseil-equipement', $contenu_meteo_conseils_item); ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
        <?php
            $weatherArray = json_decode($current_weather);
        ?>

        <div class="card-weather">

            <div class="img-weather">
                <img src="<?= get_template_directory_uri(); ?>/assets/img/commons/weather-<?= strtolower($weatherArray[0]); ?>.svg" alt="">
            </div>
            <div class="temperature">
                <span class="temperature-value"><?= round($weatherArray[1]); ?></span>
            </div>
            <div class="meteo">
                <?= $weatherArray[0]; ?>
            </div>
            <div class="sub-info">
                <div class="wind">
                    <?= round($weatherArray[3]); ?>km/h
                </div>
                <div class="humidity">
                    <?= $weatherArray[2]; ?>%
                </div>
            </div>
        </div>
    </div>
</div>
