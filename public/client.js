const dataUrl = `/data`;

async function getData() {
  console.log("Hello from the client");
  
  const response = await fetch(dataUrl);
  const json = await response.json();
  console.log(json);

//   // Make a list item for each data item
//   const list = document.getElementById("list");
//   json.records.forEach((element) => {
//     // Make an item
//     const item = document.createElement("li");

//     // Get the name
//     const itemName = document.createElement("h2");
//     itemName.textContent = element.fields.Name;

//     // Get the image
//     const itemImage = document.createElement("img");
//     const imageUrl = element.fields.Image[0].url;
//     const thumbnailUrl = element.fields.Image[0].thumbnails.large.url;
//     itemImage.src = thumbnailUrl;

//     // Add elements to the item
//     item.appendChild(itemName);
//     item.appendChild(itemImage);
//     // Add item to the DOM
//     list.appendChild(item);
//   });
}
getData();