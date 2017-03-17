;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fanhui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M629.376 160 330.624 467.968 330.624 467.968 288 512 330.624 555.968 330.688 555.968 629.376 863.936 672 819.968 373.312 512 672 204.032Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-zhuyi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M912.718 339.508c-21.905-51.791-53.261-98.299-93.192-138.231-39.933-39.934-86.441-71.288-138.232-93.194C627.658 85.398 570.7 73.896 512 73.896c-58.701 0-115.659 11.502-169.293 34.188-51.791 21.906-98.298 53.261-138.231 93.194-39.933 39.931-71.288 86.439-93.194 138.231-22.686 53.635-34.188 110.593-34.188 169.292 0 58.701 11.503 115.659 34.188 169.293 21.906 51.791 53.261 98.3 93.194 138.231 39.933 39.933 86.439 71.287 138.231 93.193 53.634 22.686 110.592 34.188 169.293 34.188 58.7 0 115.658-11.502 169.293-34.188 51.791-21.906 98.3-53.261 138.232-93.193 39.932-39.932 71.287-86.44 93.192-138.231 22.686-53.634 34.188-110.592 34.188-169.293C946.905 450.101 935.403 393.142 912.718 339.508zM537.583 758.27c0 14.129-11.455 25.583-25.583 25.583-14.129 0-25.583-11.454-25.583-25.583L486.417 430.812c0-14.128 11.454-25.582 25.583-25.582s25.583 11.454 25.583 25.582L537.583 758.27zM537.583 267.083c0 14.129-11.455 25.583-25.583 25.583-14.129 0-25.583-11.454-25.583-25.583l0-2.047c0-14.128 11.454-25.583 25.583-25.583s25.583 11.454 25.583 25.583L537.583 267.083z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gengduo" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M557.179 904c-8.189 0-16.379-3.124-22.628-9.372-12.496-12.497-12.496-32.759 0-45.256L871.924 512 534.551 174.627c-12.496-12.497-12.496-32.758 0-45.255 12.498-12.497 32.758-12.497 45.256 0l360 360c12.496 12.497 12.496 32.758 0 45.255l-360 360c-6.249 6.249-14.439 9.373-22.628 9.373z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904 332c0-8.189-3.124-16.379-9.372-22.628-12.497-12.496-32.759-12.496-45.256 0L512 646.745 174.628 309.372c-12.497-12.496-32.758-12.496-45.255 0-12.497 12.498-12.497 32.758 0 45.256l360 360c12.497 12.496 32.758 12.496 45.255 0l360-360C900.876 348.379 904 340.189 904 332z" fill="" ></path>' +
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