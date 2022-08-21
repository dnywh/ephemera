// Shortcodes
const { srcset, src } = require("./src/helpers/shortcodes");

module.exports = function (config) {
    config.addWatchTarget("./src/sass/");

    // Image shortcodes from helpers/shortcodes.js
    config.addShortcode("src", src);
    config.addShortcode("srcset", srcset);

    // Set which directories Eleventy reads from and writes to
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};