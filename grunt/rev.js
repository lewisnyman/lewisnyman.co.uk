module.exports = {
  options: {
    length: 4
  },
  dist: {
    files: {
      src: [
        '<%= yeoman.dist %>/js/**/*.js',
        '<%= yeoman.dist %>/css/**/*.css',
        '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
        '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
      ]
    }
  }
};
