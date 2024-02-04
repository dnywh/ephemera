![sample](https://user-images.githubusercontent.com/3104761/80896885-7346ed80-8d36-11ea-961f-59fee197bb59.jpg)

# Ephemera

You know those scraps of paper and receipts that clog up your wallet and pockets? This is a living, digital archive of that.

I try to hang on to those scraps, then scan and pop them on an Airtable base. This project serves them up, gallery-style.

Also check out [Ephemerabot](https://github.com/dnywh/ephemerabot) if this tickles your fancy.

## Inspiration

I semi-seriously started collecting and visualising ephemera in 2016. The 2018 [Below the Surface](https://belowthesurface.amsterdam/en) project in Amsterdam gave me the push to make it a real thing.

## Can I see it?

Check out [ephemera.fyi](https://ephemera.fyi/) for deploys from this repo's `main` branch.

Check out [@ephemerabot](https://twitter.com/ephemerabot) on Twitter and its [repository](https://github.com/dnywh/ephemerabot) for some Twitter ←→ Airtable love.

## How do I make my own?

Follow these instructions if you want to recreate or build something similar using your own Airtable base.

### 1. Get your Airtable in order

[Here](https://airtable.com/shr1HFbqpH0axgEb6) is an example Airtable base you can use to get started. It contains the expected field names and a few example records.

1. Make your own copy of the above Airtable base.
2. View the [Airtable API page](https://airtable.com/api) to get your access token and base ID.
3. Keep these two values handy for the next steps.

### 2. Run locally with your own Airtable data

1. Clone this repository.
2. `cd` into the respository folder.
3. Create a file called _.env_ and enter the two variables shown in [.env.example](https://github.com/dnywh/ephemera/blob/main/.env.example)
4. Add your Airtable access token and base ID as the respective values to your two new variables in _.env_.
5. Run `npm install` to get all the modules in here.
6. Run `npm start` to start the local server.

Your [localhost:8080](http://localhost:8080) should now be serving Ephemera.

### Having issues?

Check that:

- ...all packages were installed via `npm install`
- ...your access token and base ID are correct
- ...the `view: "Grid"` part of [airtableData.js](https://github.com/dnywh/ephemera/blob/main/src/_data/airtableData.js) matches the name of your Airtable base's view

## Credits

- https://www.cassey.dev/11ty-airtable-fetch/#saving-cached-records
- https://jamesdoc.com/blog/2022/11ty-airtable/
  - @11ty/eleventy-cache-assets
- https://danabyerly.com/articles/using-airtable-with-eleventy/
- 11ty Sass Skeleton by @5t3ph
- https://sia.codes/posts/eleventy-and-cloudinary-images/
