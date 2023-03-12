(self["webpackChunkwordpress_starter_kit"] = self["webpackChunkwordpress_starter_kit"] || []).push([["assets_js_sound_js"],{

/***/ "./assets/js/sound.js":
/*!****************************!*\
  !*** ./assets/js/sound.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

window.addEventListener('load', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  var audioctx, src, musicbuff, filter, analyser, Setup, LoadSample;
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          LoadSample = function _LoadSample(actx, url) {
            return new Promise(function (resolv) {
              fetch(url).then(function (response) {
                return response.arrayBuffer();
              }).then(function (arraybuf) {
                return actx.decodeAudioData(arraybuf);
              }).then(function (buf) {
                resolv(buf);
              });
            });
          };

          Setup = function _Setup(val) {
            console.log('change');
            filter.type = 'lowpass';
            filter.frequency.value = val;
          };

          audioctx = new AudioContext();
          src = null;
          _context.next = 6;
          return LoadSample(audioctx, "https://crescendo.code/wp-content/themes/crescendo/assets/audio/sound.mp3");

        case 6:
          musicbuff = _context.sent;
          filter = new BiquadFilterNode(audioctx, {
            frequency: 5000,
            q: 5
          });
          analyser = new AnalyserNode(audioctx, {
            smoothingTimeConstant: 0.7,
            fftSize: 1024
          });
          filter.connect(analyser).connect(audioctx.destination);
          document.getElementById("playmusic").addEventListener("click", function () {
            if (audioctx.state == "suspended") audioctx.resume();
            if (src) src.stop();
            src = new AudioBufferSourceNode(audioctx, {
              buffer: musicbuff,
              loop: true
            });
            src.connect(filter);
            src.start();
            Setup(0);
            var i = 0;
            setInterval(function () {
              console.log(i);

              if (i < 2500) {
                Setup(i);
                i = i + 50;
                i++;
              }
            }, 50);
          });
          /*document.getElementById("stop").addEventListener("click", ()=>{
          if(src){
          src.stop();
          src = null;
          }
          });*/

          $('#change').click(function () {
            var i = 100;
            setInterval(function () {
              console.log(i);

              if (i < 2500) {
                Setup(i);
                i = i + 10;
                i++;
              }
            }, 1);
          });
          $('#changeDown').click(function () {
            var i = 2500;
            setInterval(function () {
              console.log(i);

              if (i > 200) {
                Setup(i);
                i = i - 10;
                i--;
              }
            }, 1);
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));

/***/ })

}]);
//# sourceMappingURL=5ef5f629bf889809da31.js.map