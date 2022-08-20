// https://docs.netlify.com/netlify-labs/experimental-features/scheduled-functions/
// https://www.raymondcamden.com/2022/02/04/an-early-look-at-netlify-scheduled-functions

const { schedule } = require('@netlify/functions')
const fetch = require('node-fetch')

const REBUILD_URL = process.env.rebuildurl

const handler = async function (event, context) {
    console.log("Received event:", event)

    await fetch(REBUILD_URL, { method: 'POST' })

    return {
        statusCode: 200,
    };
};

// Match the cron expression from Ephemerabot
module.exports.handler = schedule("0 20 * * *", handler);
