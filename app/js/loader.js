Modernizr.load([
  {
    test: Modernizr.fontface && !isTypeKitDown(),
    yep : "//use.typekit.net/dfl4hkz.js",
    complete: function() {
      try { Typekit.load(); } catch(e) {
        sessionStorage.setItem("typekitDown", 1);
        if (document.addEventListener) {
          document.addEventListener('DOMContentLoaded', function() {
            document.documentElement.className+=' wf-inactive';
          });
        }
      };
    }
  },
  {
    test: Modernizr.touch,
    yep : "js/fastclick.js",
    callback: function() {
      new FastClick(document.body);
    }
  },
]);

function isTypeKitDown() {
  if (sessionStorage.getItem("typekitDown")) {
    return false;
  }
  else {
    return true;
  }
}
