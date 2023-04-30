fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${localStorage.getItem('loggedInUserID')}`, {
  method: 'GET',
}).then(res => res.json()).then(data => {
  data.forEach(element => {
    console.log(element);

    var div = document.createElement("div");
    
    

    const a = document.createElement("a");
    a.innerHTML =  `${element.productName}  `
    //a.href = `product.html`
    a.href = `product.html?id=${element.productId}`

    const a1 = document.createElement("a");
    a1.innerHTML = `price: ${element.price}`;

    const a2 = document.createElement("a");
    a2.innerHTML = `qty: ${element.quantity}`;

    div.style.width = "210px";
    div.style.height = "25px"; 
    div.style.background = "red";
    div.style.color = "yellow";

    div.appendChild(a);
    div.appendChild(a1);
    div.appendChild(a2);
    document.body.appendChild(div);
  });
});