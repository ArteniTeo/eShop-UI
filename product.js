const urlParams = new URLSearchParams(window.location.search);
let prodId = urlParams.get('id');

const  product_name = document.getElementById("product_name");
const  product_price = document.getElementById("product_price");

fetch(`http://127.0.0.1:8080/product?id=${prodId}`, {
  method: 'GET',
}).then(res => res.json()).then(data => {
  console.log(data);
  product_name.innerHTML = `<b>${data.productName}</b>`;
  product_price.innerHTML = data.price;
});

