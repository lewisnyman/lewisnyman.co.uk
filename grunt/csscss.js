module.exports = {
  options: {
    bundleExec: true,
    minMatch: 2,
    ignoreSassMixins: false,
    compass: true,
    colorize: true,
    shorthand: false,
    verbose: true
  },
  check: {
   src: ['<%= yeoman.app %>/_scss/type.scss']
  }
};
