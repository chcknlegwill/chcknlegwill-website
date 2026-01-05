module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
