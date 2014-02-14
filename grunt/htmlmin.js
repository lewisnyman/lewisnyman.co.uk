module.exports = {
  dist: {
    options: {
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true
    },
    files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>',
      src: '**/*.html',
      dest: '<%= yeoman.dist %>'
    }]
  }
};
