const readingTime = require("reading-time");
const moment = require("moment");
const sass = require("sass");
const path = require("path");

module.exports = function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");
  eleventyConfig.addExtension("scss", {
    outputFileExtension: "css",
    compile: async function (inputContent, inputPath) {
      if (path.basename(inputPath).startsWith("_")) return;
      let result = sass.compile(inputPath, { style: "compressed" });
      return async () => result.css;
    },
  });
  // Layout alias
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");
  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");
  eleventyConfig.addLayoutAlias("case-study", "layouts/case-study.html");

  // Static file passthough
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/analytics.txt");
  eleventyConfig.addPassthroughCopy("_redirects");
  eleventyConfig.addPassthroughCopy('src/admin');

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
