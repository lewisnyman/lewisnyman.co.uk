module.exports = {
  dist: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>',
      src: [
        // Jekyll processes and moves HTML and text files
        // Usemin moves CSS and javascript inside of Usemin blocks
        // Copy moves asset files and directories
        'img/**/*',
        'fonts/**/*',
        // Like Jekyll, exclude files & folders prefixed with an underscore
        '!**/_*{,/**}'
        // Explicitly add any files your site needs for distribution here
        //'_bower_components/jquery/jquery.js',
        //'favicon.ico',
        //'apple-touch*.png'
      ],
      dest: '<%= yeoman.dist %>'
    }]
  },
  // Copy CSS into .tmp directory for Autoprefixer processing
  stageCss: {
    files: [{
      expand: true,
      dot: true,
      cwd: '<%= yeoman.app %>/css',
      src: '**/*.css',
      dest: '.tmp/css'
    }]
  }
};
