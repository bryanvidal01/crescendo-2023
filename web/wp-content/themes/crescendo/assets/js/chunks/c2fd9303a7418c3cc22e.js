"use strict";
(self["webpackChunkwordpress_starter_kit"] = self["webpackChunkwordpress_starter_kit"] || []).push([["assets_js_modules_map_js"],{

/***/ "./assets/js/modules/map.js":
/*!**********************************!*\
  !*** ./assets/js/modules/map.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony default export */ __webpack_exports__["default"] = (function (map) {
  var villes = JSON.parse(ParamsData.roads);
  var tplDirectory = ParamsData.template_directory;
  var buildLong = ParamsData.buildLong;
  var buildLat = ParamsData.buildLat;
  var map = L.map('container-map', {
    center: [buildLong, buildLat],
    zoom: 10,
    scrollWheelZoom: false
  });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);
  var marker = [];
  var icon = L.icon({
    iconUrl: tplDirectory + '/assets/img/commons/immeuble.svg',
    shadowUrl: tplDirectory + '/assets/img/commons/immeuble.svg',
    iconSize: [40, 40],
    // size of the icon
    shadowSize: [0, 0],
    // size of the shadow
    iconAnchor: [12, 33] // point of the icon which will correspond to marker's location

  });
  marker[0] = new L.Marker([buildLong, buildLat], {
    icon: icon
  });
  marker[0].addTo(map);
  var i = 0;

  for (var ville in villes) {
    var icon = L.icon({
      iconUrl: tplDirectory + '/assets/img/commons/' + villes[ville].type + '-full.svg',
      shadowUrl: tplDirectory + '/assets/img/commons/' + villes[ville].type + '-full.svg',
      iconSize: [40, 40],
      // size of the icon
      shadowSize: [0, 0],
      // size of the shadow
      iconAnchor: [12, 33] // point of the icon which will correspond to marker's location

    });
    marker[i] = new L.Marker([villes[ville].long, villes[ville].lat], {
      icon: icon,
      win_url: 'index-' + i
    });
    marker[i].addTo(map);
    marker[i].on('click', pinOnClick);
    i++;
  }

  function pinOnClick(e) {
    $('.container-list-address li').removeClass('active');
    $("#" + this.options.win_url).addClass('active');
    var myElement = document.getElementById(this.options.win_url);
    var topPos = myElement.offsetTop;
    document.getElementById('container-list').scrollTop = topPos;
  }

  $('.container-list-address a').click(function (event) {
    event.preventDefault();
    var el = $(this);
    var long = el.data('long');
    var lat = el.data('lat');
    $('.container-list-address li').removeClass('active');
    $(this).parent().addClass('active');
    map.panTo(new L.LatLng(long, lat));
  });
});

/***/ })

}]);
//# sourceMappingURL=c2fd9303a7418c3cc22e.js.map