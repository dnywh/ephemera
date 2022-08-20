module.exports = function (config) {
    config.addPassthroughCopy("./src/style.css")
    // Set which directories Eleventy reads from and writes to
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};