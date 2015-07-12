function isTypeKitDown() {
  if (sessionStorage.getItem('typekitDown')) {
    return true;
  }
  else {
    return false;
  }
}

function setTypeInactive() {
  document.documentElement.className+=' wf-inactive';
}

Modernizr.load([
  {
    test: Modernizr.fontface && !isTypeKitDown(),
    yep : '//use.typekit.net/dfl4hkz.js',
    complete: function() {
      var timeoutID;
      try {
        Typekit.load( {
          loading: function() {
            timeoutID = window.setTimeout(function() {
              setTypeInactive();
            }, 1500);
           },
          inactive: function() {
            clearTimeout(timeoutID);
           },
          active: function() {
            clearTimeout(timeoutID);
           },
        });
      }
      catch(e) {
        sessionStorage.setItem('typekitDown', 1);
        setTypeInactive();
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
