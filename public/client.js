const dataUrl = `/data`;

async function getData() {
  const response = await fetch(dataUrl);
  const json = await response.json();
  // console.log(json);

  // Get the DOM list container to eventually place each data item within
  const list = document.getElementById("list");

  // Get the DOM list container to make the graph
  const graph = document.getElementById("graph");

  // TODO: instead of the below manually parsing of years,
  // automatically go through json and split by year like:
  // https://stackoverflow.com/a/40774906/2009441
  // const only2019 = json.filter((element) => element.fields.date.substring(0, 4) === "2019");
  // const only2018 = json.filter((element) => element.fields.date.substring(0, 4) === "2018");
  // const only2017 = json.filter((element) => element.fields.date.substring(0, 4) === "2017");
  // const dataByYear = [only2019, only2018, only2017];

  // Then go through each 'split' object/array and make a year section, with header at top

  // Prepare array for years
  const elementYears = [];
  // Prepare array for months
  const allYearsAndMonth = [];

  // console.log(json);

  // const test = json.reduce(function (accumulator, current) {
  //   return accumulator.concat(current);
  // })
  // console.log(test);

  // const tempList = json.map(function (date, index, array) {
  //   console.log(index.fields.date);
  // });
  const counts = {};


  // Go through each item
  json.forEach((element) => {
    // Access year
    const itemYear = element.fields.date.substring(0, 4);

    const elementYearAndMonth = element.fields.date.substring(0, 7);
    allYearsAndMonth.push(elementYearAndMonth);


    // console.log(allYearsAndMonth);




    // 👇
    // Get all raw dates
    // console.log(element.fields.date);
    // Simplify into months (Sept 18, Oct 18, Nov, 18, Dec 18, Jan 19)
    // const tempList = 
    // Count how many 'duplicates' are in each of those months
    // Use that duplicate number to determine height of li element

    // Scratchpad:



    // 🖕
    // Normal stuff:

    if (!elementYears.includes(itemYear)) {
      // Make an item
      const itemYearBlock = document.createElement("li");
      itemYearBlock.classList.add("year-block");
      const itemYearBlockText = document.createElement("h2");
      // Add year item to DOM
      itemYearBlockText.textContent = itemYear;
      itemYearBlock.appendChild(itemYearBlockText);
      list.appendChild(itemYearBlock);
      // Push to array so it doesn't get repeated
      elementYears.push(itemYear);
    }



    // Make an item
    const item = document.createElement("li");

    // Foreground
    const itemForeground = document.createElement("div");
    // Background
    const itemBackground = document.createElement("div");

    // Add elements to the item
    // Item image
    const itemImage = document.createElement("img");
    itemImage.classList.add("lazyload");
    const imageUrl = element.fields.images[0].url;
    const thumbnailUrl = element.fields.images[0].thumbnails.small.url;
    itemImage.src = thumbnailUrl;
    itemImage.setAttribute("data-src", imageUrl);
    item.appendChild(itemImage);

    // Item name (required)
    // const itemName = document.createElement("h3");
    // itemName.textContent = element.fields.name;
    // itemForeground.appendChild(itemName);

    // Item date (required)
    const itemDate = document.createElement("p");
    itemDate.textContent = element.fields.date;
    itemForeground.appendChild(itemDate);

    // Item venue (optional)
    if (element.fields.venue) {
      const itemVenue = document.createElement("p");
      itemVenue.textContent = element.fields.venue;
      itemForeground.appendChild(itemVenue);
    }

    // Item location (required)
    const itemLocation = document.createElement("p");
    itemLocation.textContent = element.fields.location;
    itemForeground.appendChild(itemLocation);

    // Item country (soon to be required)
    if (element.fields.country) {
      const itemCountry = document.createElement("p");
      itemCountry.textContent = element.fields.country;
      itemForeground.appendChild(itemCountry);
    }

    // Add item to the DOM
    item.appendChild(itemForeground);
    list.appendChild(item);
  });

  // console.log(elementYears);
  allYearsAndMonth.forEach(function (x) { counts[x] = (counts[x] || 0) + 1 });
  console.log(counts);

  // counts.forEach((element) => {
  //   // console.log(element.fields);
  //   // const tempDateBlock = document.createElement("li");
  //   // tempDateBlock.textContent = "jhell";
  //   // 
  //   console.log(element)
  // })

  for (const [key, value] of Object.entries(counts)) {
    // console.log(`${key}: ${value}`);
    // Create an element for each unique month value
    const tempDateBlock = document.createElement("li");
    tempDateBlock.dataset.date = `${key}`;
    // tempDateBlock.textContent = `${key}: ${value}`;
    tempDateBlock.style.height = `${value * 5}px`;
    graph.appendChild(tempDateBlock);

  }

}

// Call function
getData();
