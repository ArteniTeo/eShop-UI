const My_Shopping_Cart = document.querySelector('#MyShoppingCart');
var loggedInUserUsername = localStorage.getItem("loggedInUserUsername");
var shoppingCartId = localStorage.getItem("shoppingCartId");

My_Shopping_Cart.innerHTML = loggedInUserUsername + "'s Shopping Cart with SC id = " + shoppingCartId;

