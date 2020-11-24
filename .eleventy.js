const sass = require("./build-process/sass-process");

module.exports = function (eleventyConfig) {
  // Layout alias
  eleventyConfig.addLayoutAlias("post", "layouts/post.html");
  eleventyConfig.addLayoutAlias("page", "layouts/page.html");
  eleventyConfig.addLayoutAlias("default", "layouts/default.html");

  // Static file passthough
  eleventyConfig.addPassthroughCopy("src/assets/images");
  eleventyConfig.addPassthroughCopy("src/assets/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  // eleventyConfig.addPassthroughCopy("source/robots.txt");

  // Sass pre-processing
  sass(
    "./src/assets/scss/styling.scss",
    "./serve/assets/stylesheets/styling.css"
  );

  return {
    dir: {
      input: "./src",
      output: "./serve",
    },
  };
};
