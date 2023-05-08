const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const orderId = urlParams.get('id');

if (orderId) {
    document.getElementById('orderId').textContent = orderId;

    fetch(`http://127.0.0.1:8080/order_detail?orderId=${orderId}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        document.getElementById('orderDate').textContent = data.date;
        document.getElementById('orderTotal').textContent = data.totalPrice;
        document.getElementById('orderAddress').textContent = data.deliveryAddress;
    })
    .catch(error => {
        console.error('Error fetching order details:', error);
    });

    fetch(`http://127.0.0.1:8080/order_items?orderId=${orderId}`, {
        method: 'GET',
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const table = document.getElementById('orderItems');
        data.forEach(item => {
            const row = table.insertRow();
            row.insertCell().textContent = item.productId;
            row.insertCell().textContent = item.prodName;
            row.insertCell().textContent = item.productPrice;
            row.insertCell().textContent = item.quantity;
        });
    })
    .catch(error => {
        console.error('Error fetching order items:', error);
    });

}
