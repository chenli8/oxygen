;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-jiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M754.570858 632.826879l0-69.734224-69.737081 0 0-69.734224-69.738105 0 0-69.734224-69.737081 0 0-69.734224-69.738105 0 0 69.734224-69.740152 0 0 69.734224-69.737081 0 0 69.734224-69.737081 0 0 69.734224-69.742198 0 0 69.738317 139.47928 0 0-69.738317 69.737081 0 0-69.734224 69.740152 0 0-69.734224 69.738105 0 0 69.734224 69.737081 0 0 69.734224 69.738105 0 0 69.738317 139.475186 0 0-69.738317L754.570858 632.826879z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-circulararrcol" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 32C246.784 32 32 246.848 32 512c0 265.152 214.784 480 480 480 265.152 0 480-214.848 480-480C992 246.848 777.152 32 512 32zM800 698.688l0-64-64 0 0-64-64 0 0-64-64 0 0-64-64 0 0-64-64 0 0 64-64 0 0 64-64 0 0 64-64 0 0 64-64 0 0 64-64 0 0-64 64 0 0-64 64 0 0-64 64 0 0-64 64 0 0-64 64 0 0-64 64 0 0 64 64 0 0 64 64 0 0 64 64 0 0 64 64 0 0 64 64 0 0 64L800 698.688z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-loudou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.1024 113.5616c-219.0336 0-396.5952 63.3856-396.5952 141.6192 0 14.9504 6.5536 29.4912 18.7392 43.008l-0.1024 0c56.4224 68.8128 264.6016 312.6272 264.6016 381.6448l0 154.0096 0 0c0 40.1408 51.0976 72.6016 113.2544 72.6016s113.2544-32.3584 113.2544-72.6016l0 0L625.2544 686.7968c0-2.1504 0-4.5056 0-6.9632 0-69.0176 205.312-308.9408 267.1616-385.6384l0 0c10.6496-12.3904 15.872-25.4976 15.872-39.0144C908.3904 176.9472 731.2384 113.5616 512.1024 113.5616zM512.3072 340.0704c-162.9184 0-311.7056-38.912-311.7056-84.992s146.944-84.992 311.7056-84.992c164.6592 0 311.7056 39.6288 311.7056 84.992S675.2256 340.0704 512.3072 340.0704z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jiantou-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M97.524 512c0 229.361 186.018 414.476 414.476 414.476s414.476-186.018 414.476-414.476-186.018-414.476-414.476-414.476-414.476 185.115-414.476 414.476zM534.575 365.714l206.787 205.883c6.321 6.321 9.030 14.448 9.030 22.575s-2.709 16.254-9.030 22.575c-12.642 12.642-32.508 12.642-45.15 0l-184.212-184.212-181.503 183.309c-12.642 12.642-32.508 12.642-44.246 0-12.642-12.642-12.642-32.508 0-44.246l204.078-205.884c6.321-6.321 13.545-9.030 22.575-9.030 7.224 0 15.351 2.709 21.672 9.030z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiajiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M529.518 631.556c0.167-0.167 0.308-0.349 0.469-0.52l203.606-203.607c9.668-9.662 9.668-25.319 0-34.984-9.662-9.669-25.319-9.669-34.984 0L511.998 579.051 325.393 392.447c-9.667-9.669-25.325-9.669-34.987 0-4.833 4.831-7.252 11.159-7.252 17.492 0 6.328 2.419 12.659 7.252 17.491L494.02 631.046c0.158 0.167 0.297 0.346 0.461 0.51 4.84 4.839 11.182 7.254 17.519 7.248C518.338 638.81 524.679 636.394 529.518 631.556z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shangjiantou2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 80.153938C273.484262 80.153938 80.093123 273.545077 80.093123 512.060815s193.391139 431.906877 431.906877 431.906877c238.515738 0 431.906877-193.391139 431.906877-431.906877C943.906877 273.545077 750.515738 80.153938 512 80.153938L512 80.153938zM512 377.538425c0.243259 0 0.608148 0 0.851408 0 0.486519 0 0.851408 0 1.337926 0 0.12163 0 0.243259 0 0.364889 0 10.33852 0.608148 20.312151 4.986816 27.853189 13.136002l146.442095 158.48343c15.325336 16.663262 14.352298 42.813636-2.310963 58.260601-16.663262 15.325336-42.813636 14.352298-58.260601-2.310963L512 479.22081l-116.277943 125.886685c-15.325336 16.663262-41.597339 17.636299-58.260601 2.310963-16.663262-15.325336-17.636299-41.597339-2.310963-58.260601l146.442095-158.48343c7.541038-8.149186 17.636299-12.527854 27.853189-13.136002 0.12163 0 0.243259 0 0.364889 0 0.486519 0 0.851408 0 1.337926 0C511.391852 377.538425 511.756741 377.538425 512 377.538425L512 377.538425z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-upjiantou" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M491.084 375.661c-0.167 0.165-0.309 0.347-0.471 0.518l-204.417 202.794c-9.706 9.624-9.77 25.281-0.139 34.984 9.623 9.708 25.28 9.771 34.983 0.139l187.355-185.862 185.859 187.35c9.629 9.708 25.286 9.771 34.988 0.14 4.851-4.812 7.296-11.131 7.322-17.463 0.025-6.328-2.369-12.669-7.183-17.52l-202.801-204.427c-0.157-0.168-0.296-0.347-0.458-0.512-4.821-4.858-11.151-7.299-17.489-7.318-6.337-0.033-12.688 2.357-17.548 7.176z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-menu-up" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M502.455 357.594l-238.088 238.088 29.76 29.76 208.328-208.332 208.333 208.332 29.757-29.76-208.329-208.33z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-arrow-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M341.333 384l-85.333 85.333 255.232 256 256.768-256-85.333-85.333-170.667 170.667z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yuanjiantouxia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M64 512c0 247.423 200.576 448 448 448s448-200.577 448-448S759.424 64 512 64 64 264.576 64 512z m597.334-93.646l44.799 44.8L512 657.288 317.867 463.154l44.8-44.8L512 567.687l149.333-149.333h0.001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)