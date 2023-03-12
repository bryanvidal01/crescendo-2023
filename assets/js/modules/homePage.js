import Swiper from 'swiper/bundle';
import 'swiper/css';
import { gsap } from "gsap";

//import LocomotiveScroll from 'locomotive-scroll';

export default homePage => {

    var initSwiper = function(){
        var swiper = new Swiper(".swiper-container", {
            loopedSlides: 3,
            loop: true,
            slidesPerView: 2.5,
            freeMode: true,
            centeredSlides: false,
            centeredSlidesBounds: true,
            initialSlide: 1,
            mousewheel: {
                releaseOnEdges: true,
            },
            on: {
                click(event) {
                    console.log('event.target', this.clickedIndex);
                    swiper.slideTo(this.clickedIndex, 400);
                },
            }
        });
    }

    initSwiper();

    $('.single-link').click(function(){
        var el = $(this);

        var imgProject = el.find('img');

        $('.project-hero').find('img').attr('src', imgProject.data('img-full'));
        $('.project-hero').addClass('visible');
    });

    var i = 0;
    $('.intro-frontpage .t1 span').each(function(){
        var el = $(this);
        i++;
        setTimeout(function(){
            gsap.to(el, {
                opacity: 1,
                duration: .3
            });
        }, 60 * i);
    });

    gsap.to($('.intro-text'), {
        opacity: 1,
        duration: .6
    }).delay(1.2);


    var imgSlide = 0;
    setTimeout(function(){
        $('.swiper-slide').each(function(){
            imgSlide++;
            var el = $(this);
            setTimeout(function(){
                el.find('.project-image').addClass('visible');
            }, 200 * imgSlide);
        });
    }, 1000);



};
