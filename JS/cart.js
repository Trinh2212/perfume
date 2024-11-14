function formatCurrency(amount) {
  const formatter = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  });
  return formatter.format(amount);
}

const cartContainer = document.querySelector(".cart-container");
const cartSummary = document.getElementById("total");
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  cartContainer.innerHTML = "";
  let total = 0;

  cart.forEach((product) => {
    total += product.price * product.quantity;

    cartContainer.innerHTML += `
            <div class="cart-part">
                <div class="cart-img">
                    <img src="${product.image}" alt="${product.name}" />
                </div>
                <div class="cart-desc">
                    <h3>${product.name}</h3>
                </div>
                <div class="cart-quantity">
                    <input type="number" value="${
                      product.quantity
                    }" min="1" onchange="updateQuantity('${
      product.id
    }', this.value)" />
                </div>
                <div class="cart-price">
                    <h4>${formatCurrency(product.price)}</h4>
                </div>
                <div class="cart-total">
                    <h4>${formatCurrency(product.price * product.quantity)}</h4>
                </div>
                <div class="cart-remove">
                    <button onclick="removeFromCart('${
                      product.id
                    }')">Remove</button>
                </div>
            </div>`;
  });

  cartSummary.textContent = formatCurrency(total);
}

function updateQuantity(id, quantity) {
  const product = cart.find((item) => item.id === id);
  if (product) {
    product.quantity = parseInt(quantity);
    localStorage.setItem("cart", JSON.stringify(cart));
    renderCart();
    updateCartCount();
  }
}

function removeFromCart(id) {
  cart = cart.filter((item) => item.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  renderCart();
  updateCartCount();

}

renderCart();

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.querySelector(".no-order-item");
  cartCount.textContent = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
}

updateCartCount();


document.querySelector(".removeAll").addEventListener("click", function () {
  localStorage.removeItem("cart");

  document.querySelector(".cart-container").innerHTML = "";
  updateCartSummary();
});
