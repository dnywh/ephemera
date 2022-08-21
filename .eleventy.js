module.exports = function (config) {
    config.addWatchTarget("./src/sass/");
    // Set which directories Eleventy reads from and writes to
    return {
        dir: {
            input: "src",
            output: "public"
        }
    }
};