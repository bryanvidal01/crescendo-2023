<?php
    $contenu_documents_title = get_sub_field('contenu_documents_title');
    $contenu_documents_label = get_sub_field('contenu_documents_label');
    $contenu_documents_list = get_sub_field('contenu_documents_list');
?>


<div class="container-fluid strate-documents">
    <div class="row">
        <div class="col-sm-10 mx-auto">
            <div class="title t-1">
                <?= $contenu_documents_title; ?>
            </div>
            <div class="title t-3">
                <?= $contenu_documents_label; ?>
            </div>

            <div class="row" data-module="footer">
                <?php foreach ($contenu_documents_list as $contenu_documents_item): ?>
                    <div class="col-sm-6">
                        <a href="<?= $contenu_documents_item['contenu_documents_list_doc']['url']; ?>" class="card-download">
                            <?= $contenu_documents_item['contenu_documents_list_doc']['filename']; ?>
                        </a>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</div>
