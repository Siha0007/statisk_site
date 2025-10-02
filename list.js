const category = new URLSearchParams(window.location.search).get("category");
let url;

if (category) {
  url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
} else {
  url = `https://kea-alt-del.dk/t7/api/products?limit=30`;
}

getData(url);

let allData;
document.querySelectorAll(".buttons button").forEach((btn) => {
  btn.addEventListener("click", filterKlik);
});

function filterKlik(evt) {
  showFiltered(evt.currentTarget.dataset.season);
}

function showFiltered(filter) {
  if (filter === "All") {
    showProducts(allData);
  } else {
    const filteredProductsArr = allData.filter((product) => product.season === filter);
    showProducts(filteredProductsArr);
  }

  console.log("showFiltered", filter);
  console.log(allData.filter((product) => product.season === filter));
}

const productContainer = document.querySelector(".product_container");

function getData(url) {
  fetch(url).then((res) =>
    res.json().then((data) => {
      allData = data;
      showProducts(data);
    })
  );
}

function showProducts(products) {
  productContainer.innerHTML = "";
  console.log("products", products);

  products.forEach((product) => {
    let discountHTML = "";
    if (product.discount) {
      const newPrice = product.price - (product.price * product.discount) / 100;
      discountHTML = `
      <div class="discounted_container">
        <p>Now DKK <span>${newPrice}</span>,-</p>
        <p>${product.discount}%</p>
        </div>
        `;
    }

    productContainer.innerHTML += `
      <div class="produkt1 
                  ${product.soldout === 1 ? "soldout" : ""} 
                  ${product.discount ? "discount" : ""}" 
           data-discount="${product.discount || ""}">

<div class= "imageContainer">

                <a href="produkt.html?id=${product.id}">
                <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"
                alt="${product.productdisplayname}">
                </a>
 ${product.soldout === 1 ? "<p>SOLD OUT</p>" : ""}</div>


                <h4>${product.productdisplayname}</h4>
                <h3>${product.usagetype}</h3>
<p>${product.price} kr.</p>
  
      ${discountHTML}
  
  
  </div>`;
  });
}
