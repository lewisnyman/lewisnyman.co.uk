module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>/css',
      src: '**/*.css',
      dest: '<%= yeoman.dist %>/css'
    }]
  },
  server: {
    files: [{
      expand: true,
      cwd: '.tmp/css',
      src: '**/*.css',
      dest: '.tmp/css'
    }]
  }
};
