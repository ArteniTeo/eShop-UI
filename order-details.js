fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${localStorage.getItem('loggedInUserID')}`, {
  method: 'GET',
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let totalPrice = 0;

    const produsDiv = document.getElementById('produsDiv');

    data.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');

      const productName = document.createElement('a');
      productName.innerHTML = product.productName;
      productName.href = `product.html?id=${product.productId}`;

      const price = document.createElement('a');
      price.innerHTML = `Price: ${product.price}`;

      const quantity = document.createElement('a');
      quantity.innerHTML = `Qty: ${product.quantity}`;

      productDiv.appendChild(productName);
      productDiv.appendChild(price);
      productDiv.appendChild(quantity);
      
      produsDiv.appendChild(productDiv);
      
      totalPrice += product.price;
    });

    const totalPriceContainer = document.getElementById('total-price');
    totalPriceContainer.innerHTML = 'Total price : ' + totalPrice;

    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function () {
      fetch('http://127.0.0.1:8080/payment_details?customerId=' + localStorage.getItem('loggedInUserID'))
        .then((response) => response.json())
        .then((data) => {
          if (data.id == 0) {
            window.location.href = 'payment-details.html';
          } else {
            console.log(data);
            window.location.href = 'final-order-view.html';
          }
        })
        .catch((error) => console.error(error));
    });

    const cancelButton = document.getElementById('cancel-button');
    cancelButton.addEventListener('click', function () {
      window.location.href = 'shopping-cart.html';
    });
  });
