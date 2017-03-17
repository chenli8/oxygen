;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1069 1024">' +
    '' +
    '<path d="M1063.082667 926.651733C1062.946133 927.573333 1067.076267 917.469867 1063.082667 926.651733L1063.082667 926.651733z"  ></path>' +
    '' +
    '<path d="M1066.359467 919.108267c0.580267-1.297067 1.2288-2.56 1.8432-3.8912C1067.451733 916.48 1066.8032 917.7088 1066.359467 919.108267z"  ></path>' +
    '' +
    '<path d="M953.856 285.457067c0.2048-0.580267-0.136533-1.262933-0.2048-1.911467 0.068267-0.648533 0.4096-1.160533 0.4096-1.809067 0-12.049067-9.864533-21.777067-21.947733-21.777067L277.2992 259.959467c-1.1264 0-2.116267 0.477867-3.208533 0.648533L250.914133 113.425067C249.173333 102.2976 238.114133 94.8224 226.235733 96.6656c-0.170667 0-0.273067 0.136533-0.443733 0.136533-0.7168-0.068267-1.365333-0.4096-2.116267-0.4096L92.5696 96.392533c-12.458667 0-22.596267 10.103467-22.596267 22.596267 0 12.4928 10.1376 22.6304 22.596267 22.6304l118.647467 0 91.3408 580.061867c1.604267 10.3424 11.229867 17.066667 22.050133 16.5888 0.7168 0.136533 1.399467 0.6144 2.1504 0.6144l468.855467 0c8.6016 0 15.6672-9.659733 15.6672-21.845333 0-12.049067-7.0656-21.742933-15.6672-21.742933L342.493867 695.296l-17.851733-113.390933 516.4032 0c0 0 2.56 0.375467 6.382933-1.604267 0.477867-0.273067 0.8192-0.580267 1.2288-0.750933 3.652267-2.2528 8.192-6.656 12.5952-15.598933l-3.8912 3.549867c0 0 0-0.068267 0-0.136533 1.399467-1.194667 2.3552-1.809067 3.8912-3.413333l90.999467-273.646933c0-0.068267 0-0.170667 0.068267-0.273067L953.856 285.457067zM825.787733 538.3168 320.273067 538.3168c-0.8192 0-1.536 0.443733-2.3552 0.648533L280.849067 303.547733l621.431467 0L825.787733 538.3168z"  ></path>' +
    '' +
    '<path d="M354.645333 827.904m-43.588267 0a1.277 1.277 0 1 0 87.176533 0 1.277 1.277 0 1 0-87.176533 0Z"  ></path>' +
    '' +
    '<path d="M745.8816 827.426133m-43.1104 0a1.263 1.263 0 1 0 86.2208 0 1.263 1.263 0 1 0-86.2208 0Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-geren" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M813.365722 660.100036c-9.216919-9.211802-24.14491-9.211802-33.356712 0-9.188266 9.211802-9.188266 24.161283 0.023536 33.373085 71.28965 71.294766 134.12986 189.647291 134.12986 290.446022 0 13.035898 10.552334 23.588231 23.590278 23.588231 13.035898 0 23.583115-10.552334 23.583115-23.588231C961.335798 870.518397 893.572462 740.304729 813.365722 660.100036zM513.178849 17.22429c-156.082848 0-283.050588 126.972856-283.050588 283.050588 0 111.331621 64.605414 207.830419 158.288073 254.024507-65.564251 20.055778-125.621069 55.982012-175.444824 105.822141-80.20674 80.183204-147.953703 210.396871-147.953703 323.798641 0 13.035898 10.549264 23.588231 23.588231 23.588231 13.035898 0 23.588231-10.552334 23.588231-23.588231 0-100.79873 62.83714-219.151255 134.12986-290.446022 68.706825-68.729338 159.288866-107.665115 256.060887-110.375853 3.583618 0.135076 7.178493 0.226151 10.794857 0.226151 156.082848 0 283.045471-126.962623 283.045471-283.048541C796.22432 144.196123 669.261697 17.22429 513.178849 17.22429zM517.113461 536.098861c-1.295506-0.220011-2.62478-0.341784-3.981684-0.341784-3.586688 0.001023-7.166213 0.046049-10.737552 0.135076-125.066437-5.658883-225.089501-109.179608-225.089501-235.618299 0-130.056078 105.821117-235.870032 235.875149-235.870032s235.872079 105.813954 235.872079 235.870032C749.050927 429.011914 645.358287 533.988804 517.113461 536.098861z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontarrowleft" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M756.027 816.275l-339.644-294.082 339.619-294.093 12.058-152.123-515.264 446.216 515.263 446.204-12.032-152.123z"  ></path>' +
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