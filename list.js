console.log("hej fra JS");

const category = new URLSearchParams(window.location.search).get("category");
const url = `https://kea-alt-del.dk/t7/api/products?category=${category}`;
//
getData(url);

const productContainer = document.querySelector("#product_container");

function getData(url) {
  fetch(url).then((res) => res.json().then((data) => showProducts(data)));
}

function showProducts(products) {
  console.log("products", products);
  products.forEach((product) => {
    console.log("productdisplayname", product.productdisplayname);

    productContainer.innerHTML += `   <div class="produkt1 ${product.soldout === 1 ? "soldout" : ""}"> 


<div class= "imageContainer">

                <li> <a href="produkt.html?id=${product.id}"><img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp"

                            alt="Hvid hoodie"></a></li>
<p>SOLD OUT</p>
</div>
                <h4>${product.productdisplayname}</h4>
                <h3>${product.usagetype}</h3>
<p>${product.price} kr.</p>
  

  
  
  </div>`;
  });
}
