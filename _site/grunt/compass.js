module.exports = {
  options: {
    // If you're using global Sass gems, require them here.
    require: ['compass', 'breakpoint', 'animation', 'sass-globbing'],
    bundleExec: true,
    sassDir: '<%= yeoman.app %>/_scss',
    cssDir: '.tmp/css',
    imagesDir: '<%= yeoman.app %>/img',
    javascriptsDir: '<%= yeoman.app %>/js',
    relativeAssets: false,
    httpImagesPath: '/img',
    httpGeneratedImagesPath: '/img/generated',
    outputStyle: 'expanded',
    raw: 'extensions_dir = "<%= yeoman.app %>/_bower_components"\n'
  },
  dist: {
    options: {
      generatedImagesDir: '<%= yeoman.dist %>/img/generated'
    }
  },
  server: {
    options: {
      debugInfo: true,
      generatedImagesDir: '.tmp/img/generated'
    }
  }
};
