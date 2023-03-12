"use strict";
(self["webpackChunkwordpress_starter_kit"] = self["webpackChunkwordpress_starter_kit"] || []).push([["assets_js_modules_homePage_js"],{

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

/***/ "./node_modules/swiper/swiper.min.css":
/*!********************************************!*\
  !*** ./node_modules/swiper/swiper.min.css ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/swiper/swiper-bundle.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/swiper/swiper-bundle.esm.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Swiper": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]; },
/* harmony export */   "default": function() { return /* reexport safe */ _core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _core_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/core.js */ "./node_modules/swiper/core/core.js");
/* harmony import */ var _modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/virtual/virtual.js */ "./node_modules/swiper/modules/virtual/virtual.js");
/* harmony import */ var _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/keyboard/keyboard.js */ "./node_modules/swiper/modules/keyboard/keyboard.js");
/* harmony import */ var _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/mousewheel/mousewheel.js */ "./node_modules/swiper/modules/mousewheel/mousewheel.js");
/* harmony import */ var _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/navigation/navigation.js */ "./node_modules/swiper/modules/navigation/navigation.js");
/* harmony import */ var _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/pagination/pagination.js */ "./node_modules/swiper/modules/pagination/pagination.js");
/* harmony import */ var _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollbar/scrollbar.js */ "./node_modules/swiper/modules/scrollbar/scrollbar.js");
/* harmony import */ var _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/parallax/parallax.js */ "./node_modules/swiper/modules/parallax/parallax.js");
/* harmony import */ var _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/zoom/zoom.js */ "./node_modules/swiper/modules/zoom/zoom.js");
/* harmony import */ var _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/controller/controller.js */ "./node_modules/swiper/modules/controller/controller.js");
/* harmony import */ var _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/a11y/a11y.js */ "./node_modules/swiper/modules/a11y/a11y.js");
/* harmony import */ var _modules_history_history_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/history/history.js */ "./node_modules/swiper/modules/history/history.js");
/* harmony import */ var _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/hash-navigation/hash-navigation.js */ "./node_modules/swiper/modules/hash-navigation/hash-navigation.js");
/* harmony import */ var _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/autoplay/autoplay.js */ "./node_modules/swiper/modules/autoplay/autoplay.js");
/* harmony import */ var _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/thumbs/thumbs.js */ "./node_modules/swiper/modules/thumbs/thumbs.js");
/* harmony import */ var _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/free-mode/free-mode.js */ "./node_modules/swiper/modules/free-mode/free-mode.js");
/* harmony import */ var _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/grid/grid.js */ "./node_modules/swiper/modules/grid/grid.js");
/* harmony import */ var _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/manipulation/manipulation.js */ "./node_modules/swiper/modules/manipulation/manipulation.js");
/* harmony import */ var _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/effect-fade/effect-fade.js */ "./node_modules/swiper/modules/effect-fade/effect-fade.js");
/* harmony import */ var _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/effect-cube/effect-cube.js */ "./node_modules/swiper/modules/effect-cube/effect-cube.js");
/* harmony import */ var _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/effect-flip/effect-flip.js */ "./node_modules/swiper/modules/effect-flip/effect-flip.js");
/* harmony import */ var _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/effect-coverflow/effect-coverflow.js */ "./node_modules/swiper/modules/effect-coverflow/effect-coverflow.js");
/* harmony import */ var _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/effect-creative/effect-creative.js */ "./node_modules/swiper/modules/effect-creative/effect-creative.js");
/* harmony import */ var _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/effect-cards/effect-cards.js */ "./node_modules/swiper/modules/effect-cards/effect-cards.js");
/**
 * Swiper 9.1.0
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2023 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: February 28, 2023
 */
























 // Swiper Class

var modules = [_modules_virtual_virtual_js__WEBPACK_IMPORTED_MODULE_1__["default"], _modules_keyboard_keyboard_js__WEBPACK_IMPORTED_MODULE_2__["default"], _modules_mousewheel_mousewheel_js__WEBPACK_IMPORTED_MODULE_3__["default"], _modules_navigation_navigation_js__WEBPACK_IMPORTED_MODULE_4__["default"], _modules_pagination_pagination_js__WEBPACK_IMPORTED_MODULE_5__["default"], _modules_scrollbar_scrollbar_js__WEBPACK_IMPORTED_MODULE_6__["default"], _modules_parallax_parallax_js__WEBPACK_IMPORTED_MODULE_7__["default"], _modules_zoom_zoom_js__WEBPACK_IMPORTED_MODULE_8__["default"], _modules_controller_controller_js__WEBPACK_IMPORTED_MODULE_9__["default"], _modules_a11y_a11y_js__WEBPACK_IMPORTED_MODULE_10__["default"], _modules_history_history_js__WEBPACK_IMPORTED_MODULE_11__["default"], _modules_hash_navigation_hash_navigation_js__WEBPACK_IMPORTED_MODULE_12__["default"], _modules_autoplay_autoplay_js__WEBPACK_IMPORTED_MODULE_13__["default"], _modules_thumbs_thumbs_js__WEBPACK_IMPORTED_MODULE_14__["default"], _modules_free_mode_free_mode_js__WEBPACK_IMPORTED_MODULE_15__["default"], _modules_grid_grid_js__WEBPACK_IMPORTED_MODULE_16__["default"], _modules_manipulation_manipulation_js__WEBPACK_IMPORTED_MODULE_17__["default"], _modules_effect_fade_effect_fade_js__WEBPACK_IMPORTED_MODULE_18__["default"], _modules_effect_cube_effect_cube_js__WEBPACK_IMPORTED_MODULE_19__["default"], _modules_effect_flip_effect_flip_js__WEBPACK_IMPORTED_MODULE_20__["default"], _modules_effect_coverflow_effect_coverflow_js__WEBPACK_IMPORTED_MODULE_21__["default"], _modules_effect_creative_effect_creative_js__WEBPACK_IMPORTED_MODULE_22__["default"], _modules_effect_cards_effect_cards_js__WEBPACK_IMPORTED_MODULE_23__["default"]];
_core_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].use(modules);

/***/ })

}]);
//# sourceMappingURL=cff331f44c78ab54eb2f.js.map