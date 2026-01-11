module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("assets");

  //date format was not working, need to add a filter
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
      
    });
  });


  //add random article
  eleventyConfig.addFilter("randomItem", (arr) => {
    if (!arr || arr.length === 0) return null;
    const randomIndex = Math.floor(Math.random() * arr.length);
    console.log("I ran ;)")
    return arr[randomIndex];
  });

  return {
    // tells Eleventy to use Nunjucks (njk) to process .html and .md files
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
    
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
