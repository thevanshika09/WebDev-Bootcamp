document.addEventListener("DOMContentLoaded", function () {
    updateCartTotal();

    document.querySelectorAll(".increase").forEach(button => {
        button.addEventListener("click", function () {
            let input = this.previousElementSibling;
            input.value = parseInt(input.value) + 1;
            updateItemTotal(this);
            updateCartTotal();
        });
    });

    document.querySelectorAll(".decrease").forEach(button => {
        button.addEventListener("click", function () {
            let input = this.nextElementSibling;
            if (parseInt(input.value) > 1) {
                input.value = parseInt(input.value) - 1;
                updateItemTotal(this);
                updateCartTotal();
            }
        });
    });

    document.querySelectorAll(".remove-btn").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.remove();
            updateCartTotal();
        });
    });
});

function updateItemTotal(button) {
    let itemContainer = button.closest(".cart-item");
    let price = parseFloat(itemContainer.querySelector(".item-price").textContent.replace("₹", ""));
    let quantity = parseInt(itemContainer.querySelector(".quantity-input").value);
    let totalPriceElement = itemContainer.querySelector(".total-price");
    totalPriceElement.textContent = "₹" + (price * quantity).toFixed(2);
}

function updateCartTotal() {
    let total = 0;
    document.querySelectorAll(".total-price").forEach(item => {
        total += parseFloat(item.textContent.replace("₹", ""));
    });
    document.getElementById("cart-total").textContent = "₹" + total.toFixed(2);
}
