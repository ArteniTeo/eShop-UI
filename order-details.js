fetch(`http://127.0.0.1:8080/shopping_cart_item?id=${localStorage.getItem('loggedInUserID')}`, {
  method: 'GET',
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    let totalPrice = 0;

    const produsTable = document.getElementById('produsTable').getElementsByTagName('tbody')[0];

    data.forEach((product) => {
      const productRow = produsTable.insertRow();
      const productNameCell = productRow.insertCell(0);
      productNameCell.innerHTML = product.productName;
      
      const priceCell = productRow.insertCell(1);
      priceCell.innerHTML = product.price;
    
      const quantityCell = productRow.insertCell(2);
      quantityCell.innerHTML = product.quantity;
    
      totalPrice += product.price * product.quantity;
    });
    
    const totalPriceContainer = document.getElementById('total-price');
    totalPriceContainer.innerHTML = 'Pret total : ' + totalPrice;
    
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function () {
      fetch('http://127.0.0.1:8080/payment_details?customerId=' + localStorage.getItem('loggedInUserID'))
        .then((response) => response.json())
        .then((data) => {
          if (data.id == 0) {
            window.location.href = 'payment-details.html';
          } else {
            console.log(data);

            const currentDate = new Date().toISOString();

            const deliveryAddressInput = document.getElementById("delivery-address");
            const deliveryAddressValue = deliveryAddressInput.value;

            fetch(`http://127.0.0.1:8080/finalise_order?customerId=${localStorage.getItem('loggedInUserID')}&totalPrice=${totalPrice}&paymentId=${data.id}&deliveryAddress=${deliveryAddressValue}&date=${currentDate}`, {
              method: 'POST',
            });

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