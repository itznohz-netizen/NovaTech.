document.addEventListener("DOMContentLoaded", function () {

    let cartCount = 0;
    const cartDisplay = document.getElementById("cart-count");
    const addButtons = document.querySelectorAll(".add-to-cart");
    const viewButtons = document.querySelectorAll(".view-product");

    addButtons.forEach(button => {
        button.addEventListener("click", () => {
            cartCount++;
            cartDisplay.textContent = cartCount;
            alert("Item added to cart!");
        });
    });

    viewButtons.forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = button.getAttribute("data-price");

            document.getElementById("modal-product-name").textContent = "Product: " + name;
            document.getElementById("modal-product-price").textContent = "Price: " + price;
        });
    });

});