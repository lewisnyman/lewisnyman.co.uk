module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>',
      src: '**/*.svg',
      dest: '<%= yeoman.dist %>'
    }]
  }
};
