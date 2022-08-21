
// Images
// https://sia.codes/posts/eleventy-and-cloudinary-images/
// TODO: Set up {% defaultSizes %} as per paragraph that begins:
// "The sizes attribute can be tricky to write by hand..."

// Set constants for the Cloudinary URL and fallback widths for images when not supplied by the shortcode params
const CLOUDNAME = "ephemera"
// Files are in root so leave blank
const FOLDER = ""
const BASE_URL = `https://res.cloudinary.com/${CLOUDNAME}/image/upload/`;
// TODO: Why is each photo going with 1360 despite me passing in a 'width' attribute?
const FALLBACK_WIDTHS = [320, 640];
const FALLBACK_WIDTH = 320;

// Generate srcset attribute using the fallback widths or a supplied array of widths
function getSrcset(file, widths) {
    const widthSet = widths ? widths : FALLBACK_WIDTHS
    return widthSet.map(width => {
        return `${getSrc(file, width)} ${width}w`;
    }).join(", ")
}
// Generate the src attribute using the fallback width or a width supplied
// by the shortcode params
function getSrc(file, width) {
    return `${BASE_URL}q_auto,f_auto,w_${width ? width : FALLBACK_WIDTH}/${FOLDER}${file}`
}

// Export the two shortcodes to be able to access them in our Eleventy config
module.exports = {
    srcset: (file, widths) => getSrcset(file, widths),
    src: (file, width) => getSrc(file, width),
}
