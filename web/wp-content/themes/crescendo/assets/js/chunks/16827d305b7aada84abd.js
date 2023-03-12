"use strict";
(self["webpackChunkwordpress_starter_kit"] = self["webpackChunkwordpress_starter_kit"] || []).push([["assets_js_modules_navigation_js-node_modules_swiper_swiper_min_css"],{

/***/ "./assets/js/modules/homePage.js":
/*!***************************************!*\
  !*** ./assets/js/modules/homePage.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/bundle */ "./node_modules/swiper/swiper-bundle.esm.js");
/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swiper/css */ "./node_modules/swiper/swiper.min.css");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


 //import LocomotiveScroll from 'locomotive-scroll';

/* harmony default export */ __webpack_exports__["default"] = (function (homePage) {
  var initSwiper = function initSwiper() {
    var swiper = new swiper_bundle__WEBPACK_IMPORTED_MODULE_0__["default"](".swiper-container", {
      loopedSlides: 3,
      loop: true,
      slidesPerView: 2.5,
      freeMode: true,
      centeredSlides: false,
      centeredSlidesBounds: true,
      initialSlide: 1,
      mousewheel: {
        releaseOnEdges: true
      },
      on: {
        click: function click(event) {
          console.log('event.target', this.clickedIndex);
          swiper.slideTo(this.clickedIndex, 400);
        }
      }
    });
  };

  initSwiper();
  $('.single-link').click(function () {
    var el = $(this);
    var imgProject = el.find('img');
    $('.project-hero').find('img').attr('src', imgProject.data('img-full'));
    $('.project-hero').addClass('visible');
  });
  var i = 0;
  $('.intro-frontpage .t1 span').each(function () {
    var el = $(this);
    i++;
    setTimeout(function () {
      gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(el, {
        opacity: 1,
        duration: .3
      });
    }, 60 * i);
  });
  gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to($('.intro-text'), {
    opacity: 1,
    duration: .6
  }).delay(1.2);
  var imgSlide = 0;
  setTimeout(function () {
    $('.swiper-slide').each(function () {
      imgSlide++;
      var el = $(this);
      setTimeout(function () {
        el.find('.project-image').addClass('visible');
      }, 200 * imgSlide);
    });
  }, 1000);
});

/***/ }),

/***/ "./assets/js/modules/liste.js":
/*!************************************!*\
  !*** ./assets/js/modules/liste.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

/* harmony default export */ __webpack_exports__["default"] = (function (liste) {
  document.addEventListener("mousemove", mouseMoveFunc);
  var container = gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.utils.toArray(".container-liste");

  function mouseMoveFunc(e) {
    var moveX = -(e.pageX - window.innerWidth) / 1.1;
    var moveY = -(e.pageY - window.innerHeight) / .8;
    gsap__WEBPACK_IMPORTED_MODULE_0__.gsap.to(container, {
      x: moveX,
      y: moveY,
      duration: .5
    });
  }

  $('.content-tuto').mouseover(function () {
    event.preventDefault();
    $('.container-tuto').fadeOut();
    $('header').fadeOut();
    var imgSlide = 0;
    $('.list_container-image').each(function () {
      imgSlide++;
      var el = $(this);
      setTimeout(function () {
        el.find('.container-image').addClass('visible');
      }, 100 * imgSlide);
    });
  });
  $('.close-tuto').click(function (event) {
    event.preventDefault();
    $('.container-tuto').fadeOut();
    $('header').fadeOut();
    var imgSlide = 0;
    $('.list_container-image').each(function () {
      imgSlide++;
      var el = $(this);
      setTimeout(function () {
        el.find('.container-image').addClass('visible');
      }, 100 * imgSlide);
    });
  });
});

/***/ }),

/***/ "./assets/js/modules/navigation.js":
/*!*****************************************!*\
  !*** ./assets/js/modules/navigation.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @barba/core */ "./node_modules/@barba/core/dist/barba.umd.js");
/* harmony import */ var _barba_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_barba_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homePage */ "./assets/js/modules/homePage.js");
/* harmony import */ var _liste__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liste */ "./assets/js/modules/liste.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




/* harmony default export */ __webpack_exports__["default"] = (function (navigation) {
  _barba_core__WEBPACK_IMPORTED_MODULE_0___default().init({
    views: [{
      namespace: 'home',
      beforeEnter: function beforeEnter() {
        (0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])();
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to($('.swiper-wrapper'), {
          opacity: 1,
          duration: 1
        }).delay(.2);
      },
      afterEnter: function afterEnter() {
        (0,_homePage__WEBPACK_IMPORTED_MODULE_1__["default"])();
      },
      beforeLeave: function beforeLeave(data) {
        gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to($('.intro-frontpage'), {
          opacity: 0,
          duration: 1
        });
        return gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to($('.swiper-wrapper'), {
          opacity: 0,
          duration: 1
        });
      }
    }, {
      namespace: 'liste',
      beforeEnter: function beforeEnter() {
        (0,_liste__WEBPACK_IMPORTED_MODULE_2__["default"])();
        return gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to($('.content-tuto'), {
          opacity: 1
        });
      },
      afterEnter: function afterEnter() {//alert('toto magueule');
      },
      beforeLeave: function beforeLeave() {
        $('header').fadeIn();
        return gsap__WEBPACK_IMPORTED_MODULE_3__.gsap.to($('.grid'), {
          opacity: 0
        });
      }
    }, {
      namespace: 'single',
      beforeEnter: function beforeEnter() {},
      afterEnter: function afterEnter() {
        $('.project-hero').removeClass('visible');
      },
      beforeLeave: function beforeLeave() {
        $('.project-hero').removeClass('visible');
      }
    }]
  });
});

/***/ })

}]);
//# sourceMappingURL=16827d305b7aada84abd.js.map