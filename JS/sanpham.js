const prices = document.querySelectorAll(".item-price");
prices.forEach((item) => {
  item.innerText = Number(item.innerText).toLocaleString("de-DE", {
    style: "currency",
    currency: "VND",
  });
});

let navbar = document.querySelector(".header__navbar");

document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

let searchform = document.querySelector(".header__search");

document.querySelector("#search-btn").onclick = () => {
  searchform.classList.toggle("active");
};

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const item = button.closest(".item");
    const productId = item.getAttribute("data-id");
    const productName = item.getAttribute("data-name");
    const productPrice = item.getAttribute("data-price");
    const productImage = item.querySelector(".item__img").src;

    const product = {
      id: productId,
      name: productName,
      price: productPrice,
      image: productImage,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.id === productId
    );

    if (existingProductIndex >= 0) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert("Sản phẩm đã được thêm vào giỏ hàng");
  });
});

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartCount = document.querySelector(".no-order-item");
  cartCount.textContent = cart.reduce(
    (total, product) => total + product.quantity,
    0
  );
}

updateCartCount();
