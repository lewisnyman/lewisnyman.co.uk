module.exports = {
  server: [
    'compass:server',
    'copy:stageCss',
    'jekyll:server'
  ],
  dist: [
    'compass:dist',
    'copy:dist'
  ]
};
