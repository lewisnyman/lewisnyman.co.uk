module.exports = {
  dist: {
    options: {
      progressive: true
    },
    files: [{
      expand: true,
      cwd: '<%= yeoman.dist %>',
      src: '**/*.{jpg,jpeg,png}',
      dest: '<%= yeoman.dist %>'
    }]
  }
};
