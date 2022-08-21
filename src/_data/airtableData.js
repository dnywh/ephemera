// https://danabyerly.com/articles/using-airtable-with-eleventy/
// https://jamesdoc.com/blog/2022/11ty-airtable/

require('dotenv').config();
const { AssetCache } = require("@11ty/eleventy-cache-assets");
const Airtable = require('airtable');
let base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base('appkVt19sIZBsFpND');

const assetCacheId = "airtableCMS";

module.exports = () => {
  let asset = new AssetCache(assetCacheId);
  // Cache the data in 11ty for one day
  if (asset.isCacheValid("1d")) {
    console.log("Serving Airtable data from the cache…");
    return asset.getCachedValue();
  }

  // The 11ty cache is cold… so we need to talk to Airtable
  return new Promise((resolve, reject) => {
    let allDatasets = []; // change 'allDatasets' to something more relevant to your project
    base('Main') // change 'New' to your base name
      .select({ view: 'Grid' }) // change 'All' to your view name
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach((record) => {
            allDatasets.push({
              "id": record._rawJson.id,
              ...record._rawJson.fields
            });
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err)
          } else {
            // Put the Airtable data into the 11ty cache
            asset.save(allDatasets, "json");
            // Finish up
            resolve(allDatasets);
          }
        }
      );
  });
};