fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${localStorage.getItem('loggedInUserID')}`, {
  method: 'GET',
})
.then(res => res.json())
.then(data => {
  console.log(data);
  let totalPrice = 0;
  const produsTable = document.getElementById('produsTable');
  data.forEach(element => {

    console.log(element);

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    const a = document.createElement("a");
    a.innerHTML =  `${element.productName}`;
    a.href = `product.html?id=${element.productId}`;
    td1.appendChild(a);

    const td2 = document.createElement("td");
    td2.innerHTML = `Pret : ${element.price}`;

    const td3 = document.createElement("td");
    td3.innerHTML = `Cantitate : ${element.quantity}`;
    totalPrice += element.price * element.quantity;

    const td4 = document.createElement("td");
    const removeButton = document.createElement("button");
    removeButton.innerHTML = "Sterge"; 

    removeButton.classList.add("remove-button");
    removeButton.id=element.id;

    td4.appendChild(removeButton);

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    produsTable.appendChild(tr);

    removeButton.addEventListener("click", function() { 
      fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${removeButton.id}`, {
        method: 'DELETE',
      });
      location.reload();
    });
    
  });
  const totalPriceContainer = document.getElementById('total-price');
  totalPriceContainer.innerHTML = "Pret total : " + totalPrice;
});
