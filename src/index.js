import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

// fetch(
//   `api.giphy.com/v1/stickers/trending?api_key=Q0mZhmvFcoLjnVqWVHu3HNanelJZnbLD`
// )
//   .then((res) => res.json())
//   .then((r) => console.log("ABX", r));

fetch(
  `http://api.giphy.com/v1/stickers/trending?api_key=Q0mZhmvFcoLjnVqWVHu3HNanelJZnbLD`
)
  .then((response) => response.json())
  .then((data) => console.log(data));
