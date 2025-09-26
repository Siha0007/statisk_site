console.log("product loadet");

const id = 1581;
const productUrl = "https://kea-alt-del.dk/t7/api/products/" + id;
const pruductcontainer = document.querySelector("#productcontainer");

console.log("product", productUrl);

//get the data
function getData() {
  fetch(productUrl).then((res) => res.json().then((data) => show(data)));
}

function show(data) {
  console.log("shows data er", data);

  productcontainer.innerHTML = `
  <div class="produkt">
    <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="${data.productdisplayname}">
    <div class="tekst">

<h3>${data.usagetype}</h3>
<h2>${data.productdisplayname}</h2>

<p>${data.price} kr.</p>
<p>${data.basecolor}</p>


 <ul class="størrelser">
                    <li> <a href="">XS</a></li>
                    <li> <a href="">S</a></li>
                    <li> <a href="">M</a></li>
                    <li> <a href="">L</a></li>
                    <li> <a href="">XL</a></li>
                </ul>



                
<div class="pib">
    <a href="" class="put-in-bag">PUT IN BAG</a>
    <a href=""><img src="dråbe.svg" alt="dråbe"></a>
</div>

</div>
</div>
`;
}
getData();
