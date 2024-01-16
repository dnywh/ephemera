// Shortcodes
const { srcset, src } = require("./src/helpers/shortcodes");
// Import dotenv so I can use custom environment variables, such as the Airtable API key
require('dotenv').config();

module.exports = function (eleventyConfig) {
    eleventyConfig.addWatchTarget("./src/sass/");

    // Image shortcodes from helpers/shortcodes.js
    eleventyConfig.addShortcode("src", src);
    eleventyConfig.addShortcode("srcset", srcset);

    // Set which directories Eleventy reads from and writes to
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};
