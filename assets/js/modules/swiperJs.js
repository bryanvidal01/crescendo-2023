import Swiper from 'swiper';

export default swiperJs => {
    const swiper = new Swiper('.swiper', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.button-next').click(function(){
        swiper.slideNext();
    });

    $('.button-prev').click(function(){
        swiper.slidePrev();
    });



};