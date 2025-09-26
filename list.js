console.log("hej fra JS");
const productContainer = document.querySelector(".product_container");
getData("https://kea-alt-del.dk/t7/api/products/");
function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((products) => {
    console.log("productdisplayname", products.productdisplayname);
    productContainer.innerHTML += `   <div class="produkt1">
                <li> <a href="produkt.html"><img src="https://kea-alt-del.dk/t7/images/webp/640/${products.id}.webp"
                            alt="Hvid hoodie"></a></li>
                <h4>${products.productdisplayname}</h4>
                <h3>${products.usagetype}</h3>
<p>${products.price}<p>
  
  
  
  </div>`;
  });
}
