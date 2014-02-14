module.exports = {
  options: {
    bundleExec: true,
    config: '_config.yml,_config.build.yml',
    src: '<%= yeoman.app %>'
  },
  dist: {
    options: {
      dest: '<%= yeoman.dist %>',
    }
  },
  server: {
    options: {
      config: '_config.yml',
      dest: '.jekyll'
    }
  },
  check: {
    options: {
      doctor: true
    }
  }
};
