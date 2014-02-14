module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= yeoman.app %>/js/**/*.js',
    'test/spec/**/*.js',
    '!<%= yeoman.app %>/js/vendor/**/*'
  ]
};
