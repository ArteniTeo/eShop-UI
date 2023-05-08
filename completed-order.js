fetch(`http://127.0.0.1:8080/order_details?customerId=${localStorage.getItem('loggedInUserID')}`, {
  method: 'GET',
})
.then(res => res.json())
.then(data => {
  console.log(data);
  const ordersTable = document.getElementById('ordersTable');
  const tbody = ordersTable.querySelector('tbody');
  data.forEach(order => {
    const row = tbody.insertRow();
    const orderId = row.insertCell();
    orderId.innerText = order.id;
    const orderDate = row.insertCell();
    orderDate.innerText = order.date;
    const orderTotal = row.insertCell();
    orderTotal.innerText = `$${order.totalPrice}`;
    const orderAddress = row.insertCell();
    orderAddress.innerText = order.deliveryAddress;
    const orderLink = document.createElement('a');
    orderLink.innerText = 'Vezi produse';
    orderLink.href = `order_detail.html?id=${order.id}`;
    const orderLinkCell = row.insertCell();
    orderLinkCell.appendChild(orderLink);
  });
})
.catch(error => {
  console.error('Error fetching order details:', error);
});
