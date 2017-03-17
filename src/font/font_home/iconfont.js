;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-fangdajing" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M955.894368 904.307967l-129.891326-107.72242c26.882254-33.67803 48.734958-71.095221 65.138556-111.682615 22.150486-54.806233 33.381271-112.992447 33.381271-172.944887 0-59.95244-11.231809-118.139677-33.381271-172.944887-21.423939-53.007261-52.107775-100.627838-91.201142-141.53962-39.187511-41.010019-84.857667-73.223698-135.743614-95.747691-52.798507-23.370267-108.87978-35.220153-166.69044-35.220153s-113.892957 11.849886-166.692486 35.220153c-50.885947 22.523993-96.557126 54.738695-135.743614 95.747691-39.09439 40.911782-69.778226 88.532359-91.203188 141.53962-22.150486 54.80521-33.381271 112.992447-33.381271 172.944887 0 59.95244 11.231809 118.140701 33.381271 172.944887 21.424962 53.007261 52.108798 100.626815 91.203188 141.538597 39.186488 41.008996 84.85869 73.223698 135.743614 95.746668 52.79953 23.370267 108.881826 35.220153 166.692486 35.220153s113.891933-11.849886 166.69044-35.220153c44.316322-19.615757 84.672448-46.587038 120.239502-80.311117l132.264373 109.689215c5.730515 4.753257 12.674671 7.070023 19.579941 7.070023 8.820899 0 17.576307-3.78214 23.64656-11.103896C970.75175 934.484244 968.945615 915.130454 955.894368 904.307967zM497.507426 896.011001c-201.604624 0-365.622188-172.284855-365.622188-384.052956s164.017564-384.053979 365.622188-384.053979c201.602577 0 365.618095 172.285878 365.618095 384.053979S699.110003 896.011001 497.507426 896.011001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfonttongzhi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M904.293487 801.749836l-75.138399-132.191607L829.155088 393.281701c0-57.605993-20.926644-118.339945-58.927286-171.013-38.656232-53.5865-92.928659-95.517313-152.813207-118.068608-0.348862-0.131455-0.701094-0.254484-1.055012-0.369086-1.373537-0.44324-6.476693-2.072946-13.974691-4.228473l0-9.201858c0-49.846771-40.553905-90.400675-90.400675-90.400675s-90.400675 40.553905-90.400675 90.400675l0 8.539527c-6.983975 1.995421-11.411316 3.414462-11.918598 3.579624-0.26291 0.084266-0.52582 0.175273-0.78536 0.269652-60.799679 22.015362-115.999032 63.900671-155.428827 117.938838-38.711848 53.052253-60.029487 114.333934-60.029487 172.55507L193.42127 669.5616l-80.40503 141.509752c-9.673749 16.865018-9.613077 37.862445 0.166847 54.806673 9.720938 16.834682 27.915675 27.292105 47.485634 27.292105L359.363136 893.170132c11.392777 73.990695 75.494002 130.829866 152.622766 130.829866 77.128764 0 141.231674-56.839172 152.622766-130.829866l198.660709 0c30.286923 0 54.926331-24.609073 54.926331-54.857233C918.195708 824.580894 913.286365 811.73874 904.293487 801.749836zM511.985902 47.189018c23.088912 0 42.006652 18.203164 43.156042 41.010627-4.843616-0.916815-9.747903-1.756106-14.625225-2.465626-2.089799-0.303358-4.177913-0.320211-6.215468-0.077525-0.840976-0.123029-1.697119-0.251113-2.56506-0.384253-6.028397-0.910074-12.860693-1.939806-20.481719-1.939806-7.614285 0-14.44321 1.029732-20.469922 1.93812-0.738171 0.111231-1.46623 0.220777-2.184177 0.326952-2.111709-0.284819-4.275662-0.28819-6.446357 0.016853-4.44588 0.625254-8.8985 1.353314-13.288764 2.150471C470.228678 65.162978 489.043613 47.189018 511.985902 47.189018zM511.985902 976.81098c-51.02144 0-93.805026-35.829947-104.586031-83.640849l209.173748 0C605.790928 940.981033 563.007342 976.81098 511.985902 976.81098zM863.269377 845.981114 160.670406 845.981114c-2.765614 0-5.302023-1.419041-6.61826-3.695911-1.403873-2.43192-1.442636-5.394716-0.05393-7.818209l83.532988-147.014014c2.019016-3.550974 3.080769-7.568781 3.080769-11.655687L240.611973 393.281701c0-102.123776 79.029807-207.786728 183.907399-245.969384 3.448169-1.088718 30.570057-9.510272 57.92789-14.008397 1.628021 0.178644 3.288063 0.190441 4.956532 0.018539 3.682429-0.374141 7.105318-0.891535 10.41529-1.390391 5.020574-0.75671 9.356908-1.410615 13.432017-1.410615 4.08185 0 8.419869 0.653905 13.443814 1.4123 3.306602 0.498855 6.72612 1.014564 10.403493 1.388705 1.510049 0.153364 3.011671 0.160106 4.488013 0.02865 28.392621 4.755979 57.364992 13.819641 61.736718 15.213402 103.027108 39.055653 180.644616 144.159079 180.644616 244.71719l0 282.513908c0 4.088591 1.061753 8.106399 3.082454 11.659058l79.663489 140.151383c1.112313 1.958344 2.501018 3.749842 4.122298 5.31382 1.400503 1.353314 2.17238 3.266154 2.17238 5.391345C871.006691 842.612155 867.609081 845.981114 863.269377 845.981114z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-gouwuche" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M1024 216.848c0-23.04-18.592-41.744-41.664-41.744L211.84 175.104l-21.808-102.704c-0.864-4.048-2.288-7.824-4.16-11.312C180.496 44.24 164.736 32 146.16 32L41.68 32C18.672 32 0 50.544 0 73.776c0 23.056 18.704 41.744 41.68 41.744l72.16 0 133.392 627.808c3.92 18.48 19.424 31.504 37.376 32.96 3.76 1.12 7.728 1.728 11.856 1.728l542.976 0c22.96 0 41.568-18.528 41.568-41.76 0-23.04-18.752-41.744-41.568-41.744L322.208 694.512l-22.72-106.96 563.216 0c9.888 0 18.992-3.456 26.128-9.232 6.896-4.72 12.4-11.536 15.456-19.92l114.336-314.304c1.408-3.888 2.208-7.84 2.432-11.76C1022.96 227.568 1024 222.336 1024 216.848L1024 216.848 1024 216.848zM835.216 504.048 281.728 504.048 229.6 258.624l694.912 0L835.216 504.048 835.216 504.048zM281.248 908.48c0-46.144 37.36-83.536 83.472-83.536s83.488 37.392 83.488 83.536c0 46.128-37.376 83.52-83.488 83.52S281.248 954.608 281.248 908.48L281.248 908.48zM677.76 908.48c0-46.144 37.376-83.536 83.488-83.536s83.472 37.392 83.472 83.536c0 46.128-37.36 83.52-83.472 83.52S677.76 954.608 677.76 908.48z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfontyan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M958.817 514.137c0 0.377 0 0.753-0.125 1.131 0 0.252 0 0.377 0 0.502 0 0.252-0.125 0.502-0.125 0.753 0 0.252-0.125 0.627-0.125 0.878 0 0 0 0.125 0 0.125-1.131 7.041-4.4 13.573-9.301 18.602-9.426 11.185-19.607 21.744-29.913 32.174-55.679 55.93-119.53 105.828-189.41 141.902-44.745 23.126-92.38 41.729-141.902 50.778-54.421 9.804-108.971 9.426-163.142-2.26-93.764-20.237-178.603-70.258-252.882-130.086-34.439-27.777-68.373-58.194-96.905-92.38-12.444-14.957-12.444-32.679 0-47.635 9.301-11.185 19.607-21.744 29.913-32.174 55.679-55.93 119.53-105.828 189.41-142.027 44.619-23.126 92.38-41.729 141.902-50.778 54.421-9.804 108.971-9.301 163.142 2.26 93.764 20.237 178.603 70.258 252.756 130.213 34.439 27.777 68.373 58.194 96.905 92.38 5.028 5.028 8.294 11.562 9.301 18.602 0 0 0 0.125 0 0.125 0 0.252 0.125 0.627 0.125 0.878 0 0.252 0.125 0.502 0.125 0.753 0 0.125 0 0.377 0 0.502 0 0.377 0.125 0.753 0.125 1.131 0 0.627 0.125 1.131 0.125 1.634 0.125 0.878 0.125 1.508 0 2.011v0zM512.377 339.808c-92.505 0-167.417 74.155-167.417 165.655s74.911 165.783 167.417 165.783c92.505 0 167.417-74.155 167.417-165.783 0-91.375-74.911-165.655-167.417-165.655v0zM512.377 588.418c-46.254 0-83.708-37.076-83.708-82.829s37.454-82.829 83.708-82.829 83.708 37.076 83.708 82.829c0 45.75-37.454 82.829-83.708 82.829v0zM512.377 588.418z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-weibiaoti1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M543.68 280.128c0 0 331.904-223.424 352.896 124.864 0 0 14.464 222.272-352.896 409.472 0 0-407.296-176-351.68-472.448C191.68 342.016 223.232 99.648 543.68 280.128z"  ></path>' +
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