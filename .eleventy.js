const readingTime = require("reading-time");
const moment = require("moment");
const pluginLocalRespimg = require('eleventy-plugin-local-respimg');

module.exports = function (eleventyConfig) {
  // Layout alias
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");
  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");

  // Static file passthough
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/assets/stylesheets");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/analytics.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy('src/admin');
  // eleventyConfig.addPassthroughCopy("source/robots.txt");

  eleventyConfig.setDataDeepMerge(true);

  // Custom filters
  eleventyConfig.addFilter("jsonify", function (variable) {
    return JSON.stringify(variable);
  });

  eleventyConfig.addFilter("readingTime", function (text) {
    const stats = readingTime(text);
    return Math.round(stats.minutes);
  });

  eleventyConfig.addFilter("prettyDate", function (date) {
    var a = moment(date);
    return a.format("MMMM Do YYYY");
  });

  // Responsive images
  eleventyConfig.addPlugin(pluginLocalRespimg, {
    folders: {
      source: 'src', // Folder images are stored in
      output: 'serve', // Folder images should be output to
    },
    images: {
      resize: {
        min: 320, // Minimum width to resize an image to
        max: 900, // Maximum width to resize an image to
        step: 150, // Width difference between each resized image
      },
      gifToVideo: false, // Convert GIFs to MP4 videos
      sizes: '(min-width: 900px) 880px, 100vw', // Default image `sizes` attribute
      lazy: true, // Include `loading="lazy"` attribute for images
      // additional: [
      //   // Globs of additional images to optimize (won't be resized)
      //   'images/icons/**/*',
      // ],
      watch: {
        src: 'assets/images/**/*', // Glob of images that Eleventy should watch for changes to
      },
      pngquant: {
        /* ... */
      }, // imagemin-pngquant options
      mozjpeg: {
        /* ... */
      }, // imagemin-mozjpeg options
      svgo: {
        /* ... */
      }, // imagemin-svgo options
      gifresize: {
        /* ... */
      }, // @gumlet/gif-resize options
      webp: {
        /* ... */
      }, // imagemin-webp options
      gifwebp: {
        /* ... */
      }, // imagemin-gif2webp options
    },
  });

  return {
    dir: {
      input: "./src",
      output: "./serve",
    },
  };
};
