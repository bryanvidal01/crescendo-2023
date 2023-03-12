import { gsap } from "gsap";

export default liste => {
    document.addEventListener("mousemove", mouseMoveFunc);

    let container = gsap.utils.toArray(".container-liste");

    function mouseMoveFunc(e) {

        const moveX = -(e.pageX - window.innerWidth) / 1.1;
        const moveY = -(e.pageY - window.innerHeight) / .8;

        gsap.to(container, {
            x:  moveX,
            y: moveY,
            duration: .5,
        });
    }

    $('.content-tuto').mouseover(function(){
        event.preventDefault();

        $('.container-tuto').fadeOut();
        $('header').fadeOut();

        var imgSlide = 0;
        $('.list_container-image').each(function(){
            imgSlide++;
            var el = $(this);
            setTimeout(function(){
                el.find('.container-image').addClass('visible');
            }, 100 * imgSlide);
        });
    });


    $('.close-tuto').click(function(event){
        event.preventDefault();

        $('.container-tuto').fadeOut();
        $('header').fadeOut();

        var imgSlide = 0;
        $('.list_container-image').each(function(){
            imgSlide++;
            var el = $(this);
            setTimeout(function(){
                el.find('.container-image').addClass('visible');
            }, 100 * imgSlide);
        });
    });


}




