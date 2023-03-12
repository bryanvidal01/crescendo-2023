import barba from '@barba/core';
import { gsap } from "gsap";
import homePage from './homePage';
import liste from './liste';

export default navigation => {

    barba.init({
        views: [{
            namespace: 'home',
            beforeEnter() {
                homePage();
                gsap.to($('.swiper-wrapper'), {
                    opacity: 1,
                    duration: 1
                }).delay(.2);
            },
            afterEnter() {
                homePage();
            },
            beforeLeave(data) {

                gsap.to($('.intro-frontpage'), {
                    opacity: 0,
                    duration: 1
                });

                return gsap.to($('.swiper-wrapper'), {
                    opacity: 0,
                    duration: 1
                });

            }
        },
        {
            namespace: 'liste',
            beforeEnter() {
                liste();

                return gsap.to($('.content-tuto'), {
                    opacity: 1
                });
            },
            afterEnter() {
                //alert('toto magueule');
            },
            beforeLeave() {
                $('header').fadeIn();

                return gsap.to($('.grid'), {
                    opacity: 0
                });

            }
        },
        {
            namespace: 'single',
            beforeEnter() {

            },
            afterEnter() {
                $('.project-hero').removeClass('visible');
            },
            beforeLeave() {
                $('.project-hero').removeClass('visible');
            }
        }]
    });

};