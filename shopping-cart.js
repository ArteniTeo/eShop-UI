fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${localStorage.getItem('loggedInUserID')}`, {
  method: 'GET',
}).then(res => res.json()).then(data => {
  console.log(data);
  data.forEach(element => {

    console.log(element);

    var div = document.createElement("div");
    
    

    const a = document.createElement("a");
    a.innerHTML =  `${element.productName}  `
    a.href = `product.html?id=${element.productId}`

    const a1 = document.createElement("a");
    a1.innerHTML = `price: ${element.price}`;

    const a2 = document.createElement("a");
    a2.innerHTML = `qty: ${element.quantity}`;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "remove"; 

    div.style.width = "280px";
    div.style.height = "25px"; 
    div.style.background = "grey";
    // div.style.color = "yellow";
    removeButton.id=element.id;

    div.appendChild(a);
    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(removeButton);

    removeButton.addEventListener("click", function() { 
      fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${removeButton.id}`, {
        method: 'DELETE',
      });
      location. reload();
    });
    
    document.body.appendChild(div);
  });
});