console.log("product loadet");

const id = new URLSearchParams(window.location.search).get("id");

const productUrl = `https://kea-alt-del.dk/t7/api/products/${id}`;
const productontainer = document.querySelector("#productcontainer");

console.log("product", productUrl);

function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("shows data er", data);

  productcontainer.innerHTML = `
    <div class="billede">
      <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${data.productdisplayname}">
      </div>

      <div class="tekst">
        <h3>${data.usagetype}</h3>
        <h2>${data.productdisplayname}</h2>
        <p>${data.price} kr.</p>
        <p>${data.basecolor}</p>


    </div>
  `;
}

getData();
