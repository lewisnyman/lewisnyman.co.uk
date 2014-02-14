module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  check: {
    src: [
      '<%= yeoman.app %>}/css/**/*.css',
      '<%= yeoman.app %>}/_scss/**/*.scss'
    ]
  }
};
