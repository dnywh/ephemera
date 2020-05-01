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

    // Add elements to the item
    // Item name (required)
    const itemName = document.createElement("h2");
    itemName.textContent = element.fields.name;
    item.appendChild(itemName);

    // Item date (required)
    const itemDate = document.createElement("p");
    itemDate.textContent = element.fields.date;
    item.appendChild(itemDate);

    // Item venue (optional)
    if (element.fields.venue) {
      const itemVenue = document.createElement("p");
      itemVenue.textContent = element.fields.venue;
      item.appendChild(itemVenue);
    }

    // Item location (required)
    const itemLocation = document.createElement("p");
    itemLocation.textContent = element.fields.location;
    item.appendChild(itemLocation);

    // Item image
    // if (element.fields.image) {
    const itemImage = document.createElement("img");
    const imageUrl = element.fields.image[0].url;
    // const thumbnailUrl = element.fields.image[0].thumbnails.small.url;
    itemImage.src = imageUrl;
    item.appendChild(itemImage);
    // }

    // Add item to the DOM
    list.appendChild(item);
  });
}
getData();
