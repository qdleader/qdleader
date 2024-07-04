import {
  __commonJS
} from "./chunk-BUSYA2B4.js";

// node_modules/busuanzi.pure.js/busuanzi.pure.js
var require_busuanzi_pure = __commonJS({
  "node_modules/busuanzi.pure.js/busuanzi.pure.js"(exports, module) {
    var bszCaller;
    var bszTag;
    var scriptTag;
    var ready;
    var t;
    var e;
    var n;
    var a = false;
    var c = [];
    if (typeof document !== "undefined") {
      ready = function(t2) {
        return a || "interactive" === document.readyState || "complete" === document.readyState ? t2.call(document) : c.push(function() {
          return t2.call(this);
        }), this;
      }, e = function() {
        for (var t2 = 0, e2 = c.length; t2 < e2; t2++) c[t2].apply(document);
        c = [];
      }, n = function() {
        a || (a = true, e.call(window), document.removeEventListener ? document.removeEventListener("DOMContentLoaded", n, false) : document.attachEvent && (document.detachEvent("onreadystatechange", n), window == window.top && (clearInterval(t), t = null)));
      }, document.addEventListener ? document.addEventListener("DOMContentLoaded", n, false) : document.attachEvent && (document.attachEvent("onreadystatechange", function() {
        /loaded|complete/.test(document.readyState) && n();
      }), window == window.top && (t = setInterval(function() {
        try {
          a || document.documentElement.doScroll("left");
        } catch (t2) {
          return;
        }
        n();
      }, 5)));
    }
    bszCaller = {
      fetch: function(t2, e2) {
        var n2 = "BusuanziCallback_" + Math.floor(1099511627776 * Math.random());
        t2 = t2.replace("=BusuanziCallback", "=" + n2);
        scriptTag = document.createElement("SCRIPT"), scriptTag.type = "text/javascript", scriptTag.defer = true, scriptTag.src = t2, document.getElementsByTagName("HEAD")[0].appendChild(scriptTag);
        window[n2] = this.evalCall(e2);
      },
      evalCall: function(e2) {
        return function(t2) {
          ready(function() {
            try {
              e2(t2), scriptTag && scriptTag.parentElement && scriptTag.parentElement.removeChild && scriptTag.parentElement.removeChild(scriptTag);
            } catch (t3) {
              console.log(t3), bszTag.hides();
            }
          });
        };
      }
    };
    var fetch = () => {
      bszTag && bszTag.hides();
      bszCaller.fetch("//busuanzi.ibruce.info/busuanzi?jsonpCallback=BusuanziCallback", function(t2) {
        bszTag.texts(t2), bszTag.shows();
      });
    };
    bszTag = {
      bszs: ["site_pv", "page_pv", "site_uv"],
      texts: function(n2) {
        this.bszs.map(function(t2) {
          var e2 = document.getElementById("busuanzi_value_" + t2);
          e2 && (e2.innerHTML = n2[t2]);
        });
      },
      hides: function() {
        this.bszs.map(function(t2) {
          var e2 = document.getElementById("busuanzi_container_" + t2);
          e2 && (e2.style.display = "none");
        });
      },
      shows: function() {
        this.bszs.map(function(t2) {
          var e2 = document.getElementById("busuanzi_container_" + t2);
          e2 && (e2.style.display = "inline");
        });
      }
    };
    if (typeof document !== "undefined") {
      fetch();
    }
    module.exports = {
      fetch
    };
  }
});

// node_modules/busuanzi.pure.js/index.js
var require_busuanzi_pure2 = __commonJS({
  "node_modules/busuanzi.pure.js/index.js"(exports, module) {
    module.exports = require_busuanzi_pure();
  }
});
export default require_busuanzi_pure2();
//# sourceMappingURL=busuanzi__pure__js.js.map
