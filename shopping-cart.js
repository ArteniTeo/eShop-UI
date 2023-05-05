fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${localStorage.getItem('loggedInUserID')}`, {
  method: 'GET',
})
.then(res => res.json())
.then(data => {
  console.log(data);
  let totalPrice = 0;
  const produsDiv = document.getElementById('produsDiv');
  data.forEach(element => {

    console.log(element);

    var div = document.createElement("div");
    div.classList.add("product");

    const a = document.createElement("a");
    a.innerHTML =  `${element.productName}  `
    a.href = `product.html?id=${element.productId}`

    const a1 = document.createElement("a");
    a1.innerHTML = `price: ${element.price}`;
    totalPrice += element.price;

    const a2 = document.createElement("a");
    a2.innerHTML = `qty: ${element.quantity}`;

    const removeButton = document.createElement("button");
    removeButton.innerHTML = "remove"; 

    removeButton.classList.add("remove-button");
    removeButton.id=element.id;

    div.appendChild(a);
    div.appendChild(a1);
    div.appendChild(a2);
    div.appendChild(removeButton);

    produsDiv.appendChild(div);

    removeButton.addEventListener("click", function() { 
      fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${removeButton.id}`, {
        method: 'DELETE',
      });
      location.reload();
    });
    
  });
  const totalPriceContainer = document.getElementById('total-price');
  totalPriceContainer.innerHTML = "Total price : " + totalPrice;
});
