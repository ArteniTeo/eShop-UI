fetch(`http://127.0.0.1:8080/product-list`, {
      method: 'GET',
    }).then(res => res.json()).then(data => {
      console.log(data);
      data.forEach(element => {

        console.log(element);

        var div = document.createElement("div");
        div.classList.add("product");
        
        const productName = document.createElement("div");
        productName.classList.add("product-name");
        productName.innerHTML = element.productName;

        const productDetails = document.createElement("div");
        productDetails.classList.add("product-details");

        const price = document.createElement("div");
        price.innerHTML = `Price: ${element.price}`;

        const stock = document.createElement("div");
        stock.innerHTML = `Stock: ${element.stock}`;

        const quantityLabel = document.createElement("label");
        quantityLabel.innerHTML = "Quantity: ";

        const quantityInput = document.createElement("input");
        quantityInput.type = "number";
        quantityInput.min = 1;
        quantityInput.max = element.stock;
        quantityInput.value = 1;

        const addToCartButton = document.createElement("button");
        addToCartButton.innerHTML = "Add to cart"; 
        addToCartButton.classList.add("button");
        addToCartButton.id=element.id;

        productDetails.appendChild(price);
        productDetails.appendChild(stock);
        productDetails.appendChild(quantityLabel);
        productDetails.appendChild(quantityInput);
        productDetails.appendChild(addToCartButton);
        div.appendChild(productName);
        div.appendChild(productDetails);

        document.getElementById("produsDiv").appendChild(div);

        addToCartButton.addEventListener("click", function() {
          const quantity = quantityInput.value;
          const productID = addToCartButton.id;
          console.log(`Product ${productID} added to cart with quantity ${quantity}`);
          fetch(`http://127.0.0.1:8080/shopping_cart_item?productId=${productID}&customerId=${localStorage.getItem('loggedInUserID')}&qty=${quantity}`, {
            method: 'POST'
        }).then(response => {
          if (response.ok) {
            addToCartButton.innerHTML = "Added";
            setTimeout(() => {
              addToCartButton.innerHTML = "Add to cart";
            }, 3000);
          }
        });
        });
      });
    }).catch(err => {
    console.error(err);
  });