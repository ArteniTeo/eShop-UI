const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const cardOwnerName = document.querySelector('#card-owner-name').value;
  const cardNumber = document.querySelector('#card-number').value;
  const cvv = document.querySelector('#cvv').value;
  const expirationDate = document.querySelector('#expiration-date').value;

  fetch(`http://127.0.0.1:8080/payment_details?cardOwnerName=${cardOwnerName}&cardNumber=${cardNumber}&cvv=${cvv}&expirationDate=${expirationDate}&customerId=${localStorage.getItem('loggedInUserID')}`, {
    method: 'POST'
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('Payment details added successfully:', data);
    // Redirect to the final order view
    window.location.href = 'final-order-view.html';
  })
  .catch(error => {
    console.error('Error adding payment details:', error);
  });
});
