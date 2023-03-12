"use strict";
(self["webpackChunkwordpress_starter_kit"] = self["webpackChunkwordpress_starter_kit"] || []).push([["assets_js_modules_liste_js"],{

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

/***/ })

}]);
//# sourceMappingURL=f99d971b7f8d7be4fbf9.js.map