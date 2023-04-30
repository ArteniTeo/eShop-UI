const product_name_tag = document.querySelector('#product-name-tag');
const urlParams = new URLSearchParams(window.location.search);
let prodId = urlParams.get('id');




fetch(`http://127.0.0.1:8080/product?id=${prodId}`, {
  method: 'GET',
}).then(res => res.json()).then(data => {
  console.log(data);
});


product_name_tag.innerHTML = "Current product id -> " + prodId + " :";
