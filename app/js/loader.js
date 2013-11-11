function isTypeKitDown() {
  if (sessionStorage.getItem('typekitDown')) {
    return true;
  }
  else {
    return false;
  }
}

Modernizr.load([
  {
    test: Modernizr.fontface && !isTypeKitDown(),
    yep : '//use.typekit.net/dfl4hkz.js',
    complete: function() {
      try { Typekit.load(); } catch(e) {
        sessionStorage.setItem('typekitDown', 1);
          document.documentElement.className+=' wf-inactive';
        }
    }
  },
  {
    test: Modernizr.touch,
    yep : 'js/vendor/fastclick.js',
    callback: function() {
      new FastClick(document.body);
    }
  },
]);
