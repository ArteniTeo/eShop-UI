fetch(`http://127.0.0.1:8080/product-list`, {
  method: 'GET',
}).then(res => res.json()).then(data => {
  console.log(data);
  data.forEach(element => {

    console.log(element);

    var div = document.createElement("div");
    
    

    const a = document.createElement("a");
    a.innerHTML =  `${element.productName}  `
    a.href = `product.html?id=${element.id}`

    const a1 = document.createElement("a");
    a1.innerHTML = `price: ${element.price}`;

    const a2 = document.createElement("a");
    a2.innerHTML = `stock: ${element.stock}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.innerHTML = "add to cart"; 

    div.style.width = "350px";
    div.style.height = "25px"; 
    div.style.background = "grey";
    // div.style.color = "red";
    addToCartButton.id=element.id;

    div.appendChild(a);
    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(addToCartButton);

    addToCartButton.addEventListener("click", function() { 
        fetch(`http://127.0.0.1:8080/shopping_cart_item?productId=${element.id}&customerId=${localStorage.getItem('loggedInUserID')}&qty=1`, {
            method: 'POST'
        });

        addToCartButton.innerHTML = "added";
      //location. reload();
    });
    
    document.body.appendChild(div);
  });
});