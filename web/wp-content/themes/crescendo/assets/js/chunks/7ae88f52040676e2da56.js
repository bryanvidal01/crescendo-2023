"use strict";
(self["webpackChunkwordpress_starter_kit"] = self["webpackChunkwordpress_starter_kit"] || []).push([["assets_js_modules_rgpd_js"],{

/***/ "./assets/js/modules/rgpd.js":
/*!***********************************!*\
  !*** ./assets/js/modules/rgpd.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/* eslint-disable */

/**
 *  @module Rgpd
 *  @description
 *  Managing cookies via categories.
 *
 *  @element .rgpd-manage-link - open the manage popin
 *
 *  @callback onexec(cat) - fired if at least 1 category is enabled.
 *  @param cat - in checkbox val, is the id of the cookie ex 'stats'
 *  @var cookieName name of the rgpd cookie
 *
 */
var Rgpd = function Rgpd(onexec) {
  var cookieName = 'rgpd';
  var root = document.documentElement || window;
  var clicktouch = 'ontouchstart' in root ? 'touchstart' : 'click';
  var modal = document.getElementById('rgpd-modal');
  var btn_accept = modal.querySelector('.btn-accept');
  var btn_refuse = modal.querySelector('.btn-refuse');
  var manage = document.getElementById('rgpd-manage');
  var manage_box = manage.querySelector('.box');
  var btn_save = manage.querySelector('.btn-save');
  var checkboxes = manage.querySelectorAll('input[type="checkbox"]');
  var btn_close = manage.querySelector('.btn-close');
  var manage_button = document.querySelectorAll('.rgpd-manage-link');
  var manage_links = document.querySelectorAll('a[href="#rgpd-manage"]');
  var scrollTop;
  var cats = {};

  var eraseUnusedCookies = function eraseUnusedCookies() {
    var _iterator = _createForOfIteratorHelper(checkboxes),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var checkbox = _step.value;

        if (!checkbox.checked) {
          checkbox.dataset.cookies.split(',').forEach(function (name) {
            var hostname = document.location.hostname;
            if (hostname.indexOf('www.') === 0) hostname = hostname.substring(4);
            document.cookie = "".concat(name, "=; domain=.").concat(hostname, "; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=");
            document.cookie = "".concat(name, "=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/");
          });
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  };

  var consent = localStorage.getItem(cookieName) ? true : false; // fire event onexec if cat == true

  var execute = function execute() {
    for (var key in cats) {
      cats[key] && typeof onexec === 'function' && onexec(key);
    }
  }; // set cookie obj status


  var status = function status() {
    return checkboxes.forEach(function (item) {
      cats[item.value] = item.checked ? true : false;
    });
  };

  var set_consent = function set_consent() {
    if (!consent) {
      console.log("popopop");
      var nonce = manage.getAttribute('data-nonce');
      var action = manage.getAttribute('data-action');
      var formData = new window.FormData();
      formData.append('nonce', nonce);
      formData.append('action', action);
      var xhr = new XMLHttpRequest();
      xhr.open('POST', ParamsData.wp_ajax_url);
      xhr.send(formData);
      document.activeElement.blur();
    } else {
      trap.btn.focus();
    }

    consent = true;
    modal.setAttribute('aria-hidden', true);
    localStorage.setItem(cookieName, JSON.stringify(cats));
  };

  var accept = function accept() {
    status();
    execute();
    set_consent();
  };

  var denie = function denie() {
    checkboxes.forEach(function (checkbox) {
      checkbox.checked = false;
    });
    status();
    set_consent();
  };

  var save = function save() {
    status();
    !consent && execute();
    set_consent();
    eraseUnusedCookies();
  };

  var disableScroll = function disableScroll() {
    return window.scrollTo(0, scrollTop);
  }; // init or load cookie obj


  if (consent === true) cats = JSON.parse(localStorage.getItem(cookieName));
  checkboxes.forEach(function (checkbox) {
    cats[checkbox.value] = true;
  }); // init checkboxes

  for (var key in cats) {
    var _iterator2 = _createForOfIteratorHelper(checkboxes),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var checkbox = _step2.value;
        if (checkbox.value === key) checkbox.checked = cats[key];
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  }

  btn_accept.onclick = function () {
    return accept();
  };

  btn_refuse.onclick = function () {
    return denie();
  };

  if (consent === true) {
    execute();
  } else {
    modal.removeAttribute('aria-hidden');
    btn_refuse.focus();
  }

  var clickoutside = function clickoutside(e) {
    return !manage_box.contains(e.target) && close();
  };

  var trap = {
    index: 0,
    els: [],
    isShifted: false,
    init: function init() {
      manage.querySelectorAll('button,a,input,summary').forEach(function (el) {
        return trap.els.push(el);
      });
    },
    keyup: function keyup(e) {
      e.key === 'Escape' && close();

      if (e.key === 'Shift') {
        trap.isShifted = false;
      }
    },
    keydown: function keydown(e) {
      if (e.key === 'Shift') {
        trap.isShifted = true;
      }

      if (e.key === 'Tab') {
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        trap.isShifted ? trap.index-- : trap.index++;
        if (trap.index < 0) trap.index = trap.els.length - 1;
        if (trap.index >= trap.els.length) trap.index = 0;
        trap.els[trap.index].focus();
      }
    },
    add: function add() {
      btn_close.focus();
      document.addEventListener('keydown', trap.keydown, false);
      document.addEventListener('keyup', trap.keyup, false);
    },
    remove: function remove() {
      document.removeEventListener('keydown', trap.keydown);
      document.removeEventListener('keyup', trap.keyup);
    }
  };
  trap.init();

  var open = function open() {
    trap.btn = document.activeElement;
    status();
    modal.setAttribute('aria-hidden', true);
    manage.classList.add('open');
    manage.addEventListener('animationend', function () {
      window.addEventListener(clicktouch, clickoutside, {
        once: true
      });
    }, {
      once: true
    });
    scrollTop = window.pageYOffset || window.scrollY;
    window.addEventListener('scroll', disableScroll);
    trap.add();
    trap.btn.setAttribute('aria-expanded', true);
    document.querySelector('body').classList.add('no-scroll');
  };

  var close = function close() {
    if (!consent) {
      modal.removeAttribute('aria-hidden');
    }

    manage.classList.add('close');
    window.removeEventListener(clicktouch, clickoutside);
    window.removeEventListener('scroll', disableScroll);
    manage.addEventListener('animationend', function () {
      manage.classList.remove('open');
      manage.classList.remove('close');
    }, {
      once: true
    });
    trap.remove();
    trap.btn.focus();
    trap.btn.setAttribute('aria-expanded', false);
    document.querySelector('body').classList.remove('no-scroll');
  };

  manage_links.forEach(function (link) {
    link.onclick = function (e) {
      e.stopPropagation();
      e.preventDefault();
      open();
    };
  });
  manage_button.forEach(function (link) {
    link.onclick = function (e) {
      e.stopPropagation();
      e.preventDefault();
      open();
    };
  });

  btn_save.onclick = function () {
    save();
    close();
  };

  btn_close.onclick = function (e) {
    return close(e);
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Rgpd);

/***/ })

}]);
//# sourceMappingURL=7ae88f52040676e2da56.js.map