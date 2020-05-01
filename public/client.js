const dataUrl = `/data`;

async function getData() {
  const response = await fetch(dataUrl);
  const json = await response.json();
  console.log(json);

  // Make a list item for each data item
  const list = document.getElementById("list");
  json.forEach((element) => {
    // Make an item
    const item = document.createElement("li");

    // Foreground
    const itemForeground = document.createElement("div");
    // Background
    const itemBackground = document.createElement("div");

    // Add elements to the item
    // Item image
    // if (element.fields.image) {
    const itemImage = document.createElement("img");
    const imageUrl = element.fields.image[0].url;
    // const thumbnailUrl = element.fields.image[0].thumbnails.small.url;
    itemImage.src = imageUrl;
    item.appendChild(itemImage);
    // }

    // Item name (required)
    const itemName = document.createElement("h2");
    itemName.textContent = element.fields.name;
    itemForeground.appendChild(itemName);

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
}
getData();
