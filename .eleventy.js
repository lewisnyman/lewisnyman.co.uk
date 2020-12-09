const sass = require("./build-process/sass-process");
const readingTime = require("reading-time");
const moment = require("moment");

module.exports = function (eleventyConfig) {
  // Layout alias
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");
  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");

  // Static file passthough
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/analytics.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  // eleventyConfig.addPassthroughCopy("source/robots.txt");

  eleventyConfig.setDataDeepMerge(true);

  // Sass pre-processing
  sass(
    "./src/assets/scss/styling.scss",
    "./serve/assets/stylesheets/styling.css"
  );

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

  return {
    dir: {
      input: "./src",
      output: "./serve",
    },
  };
};
