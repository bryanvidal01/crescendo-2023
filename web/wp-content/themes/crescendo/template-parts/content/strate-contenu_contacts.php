<?php
    $contenu_contacts_title = get_sub_field('contenu_contacts_title');
    $contenu_contacts_list = get_sub_field('contenu_contacts_list');
?>


<div class="container-fluid strate-contact">
    <div class="row">
        <div class="col-sm-10 mx-auto">
            <div class="title t-1">
                <?= $contenu_contacts_title; ?>
            </div>
        </div>
        <?php

            foreach ($contenu_contacts_list as $contenu_contacts_list_item):
                $fields_contact_post_current = get_field('fields_contact_post_current', $contenu_contacts_list_item);
                $fields_contact_name = get_field('fields_contact_name', $contenu_contacts_list_item);
                $fields_contact_informations = get_field('fields_contact_informations', $contenu_contacts_list_item);
                $fields_contact_picto = get_field('fields_contact_picto', $contenu_contacts_list_item);
        ?>
            <div class="col-sm-3">
                <div class="card-contact">
                    <div class="current-post">
                        <?= $fields_contact_post_current; ?>
                    </div>
                    <div class="picto-post">
                        <img src="<?= $fields_contact_picto; ?>" alt="">
                    </div>
                    <div class="name-post">
                        <?= $fields_contact_name; ?>
                    </div>
                    <div class="informations-post">
                        <?= $fields_contact_informations; ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</div>

