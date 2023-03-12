<div class="container-fluid">
    <div class="row">
        <div class="col-sm-6">
            <div class="content-connect">
                <div class="title t-2">
                    Connectez-vous
                </div>
                <p>Vous n'avez pas de compte Oreima ? <a href="mailto:s.qassar@lonsdale.fr" class="underline red">Demandez votre accès</a> </p>
                <?php wp_login_form(); ?>
                <a href="" class="red underline forget-password">Vous avez oublié votre mot de passe</a>
            </div>
        </div>
    </div>
</div>

<div class="image-login">
    <img src="<?= get_template_directory_uri(); ?>/assets/img/bg/bg-connexion.png" alt="">
</div>