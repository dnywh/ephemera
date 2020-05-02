// Where the server starts
require("dotenv").config();
// Airtable setup
// const Airtable = require("airtable");
// const base = Airtable.base(process.env.AIRTABLE_BASE_ID)
//   apiKey: process.env.AIRTABLE_API_KEY,
// }).base(process.env.AIRTABLE_BASE);

const base = require("airtable").base(process.env.AIRTABLE_BASE_ID);

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Starting server at http://localhost:${port}`));
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
// app.get("/", function (request, response) {
//   response.sendFile(__dirname + "/public/index.html");
// });

const table = "Main";

app.get("/data", async (request, response) => {
  const recordsFromAllPages = [];

  base(table)
    .select({
      view: "Grid",
      filterByFormula: "({hidden}= '')", // Only show items that are not hidden
      sort: [{ field: "date", direction: "desc" }], // Overrides what's set in the above view, just in case I forget
    })
    .eachPage(
      function page(records, fetchNextPage) {
        // This function (`page`) will get called for each page of records.
        records.forEach(function (record) {
          console.log("Retrieved: ", record.get("name"));
          recordsFromAllPages.push(record);
        });

        // To fetch the next page of records, call `fetchNextPage`.
        // If there are more records, `page` will get called again.
        // If there are no more records, `done` will get called.
        console.log("fetching another page...");
        fetchNextPage();
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }

        response.json(recordsFromAllPages);
      }
    );
});
