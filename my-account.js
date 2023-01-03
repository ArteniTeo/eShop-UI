//const welcome_tag = document.getElementById('welcome-tag');
const welcome_tag = document.querySelector('#welcome-tag');
const go_to_products = document.querySelector('#go_to_products')

var loggedInUserUsername = localStorage.getItem("loggedInUserUsername");
welcome_tag.innerHTML = "Welcome " + loggedInUserUsername + "!";

const shopping_cart_btn = document.getElementById('shopping_cart_btn');
shopping_cart_btn.addEventListener('click', shoppingCart);

function shoppingCart() {
    if(false){

    }else{
        fetch(`http://127.0.0.1:8080/shopping_cart?id=${localStorage.getItem("loggedInUserID")}`, {
        method: 'GET',
    }).then(res => res.json()).then(data => {
        if (data.id > 0) {
            
            localStorage.setItem("shoppingCartId", data.id);
            localStorage.setItem("shoppingCartTotalPrice", data.totalPrice);

            location.href='http://127.0.0.1:5500/shopping-cart.html';
            
        } else {
            error_display_log_in.innerHTML = "Shopping cart not found";
        }
    });
}

}
    
