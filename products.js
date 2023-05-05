fetch('http://127.0.0.1:8080/product-list', {
  method: 'GET',
}).then(res => res.json()).then(data => {
  console.log(data);
  data.forEach(element => {

    console.log(element);

    const div = document.createElement("div");
    div.classList.add("product");

    const productName = document.createElement("span");
    productName.classList.add("product-name");
    productName.textContent = element.productName;

    const price = document.createElement("span");
    price.classList.add("product-price");
    price.textContent = `Price: ${element.price}`;

    const stock = document.createElement("span");
    stock.classList.add("product-stock");
    stock.textContent = `Stock: ${element.stock}`;

    const addToCartButton = document.createElement("button");
    addToCartButton.classList.add("add-to-cart-button");
    addToCartButton.textContent = "Add to cart"; 

    div.appendChild(productName);
    div.appendChild(price);
    div.appendChild(stock);
    div.appendChild(addToCartButton);

    addToCartButton.addEventListener("click", function() { 
        fetch(`http://127.0.0.1:8080/shopping_cart_item?productId=${element.id}&customerId=${localStorage.getItem('loggedInUserID')}&qty=1`, {
            method: 'POST'
        });

        addToCartButton.textContent = "Added";
    });

    document.body.appendChild(div);
  });
});
