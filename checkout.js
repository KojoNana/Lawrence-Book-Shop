const CART_STORAGE_KEY = "lawrenceBookShopCart";
const DELIVERY_FEE = 25;

const checkoutItems = document.querySelector("#checkout-items");
const checkoutEmpty = document.querySelector("#checkout-empty");
const subtotalElement = document.querySelector("#checkout-subtotal");
const deliveryElement = document.querySelector("#checkout-delivery");
const totalElement = document.querySelector("#checkout-total");
const checkoutForm = document.querySelector("#checkout-form");
const checkoutMessage = document.querySelector("#checkout-message");
const submitButton = checkoutForm.querySelector('button[type="submit"]');

function formatCedis(amount) {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    currencyDisplay: "narrowSymbol",
    minimumFractionDigits: 2
  }).format(amount);
}

function readCart() {
  try {
    const storedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    if (!Array.isArray(storedCart)) return [];
    return storedCart.filter((item) =>
      typeof item.title === "string" &&
      Number.isFinite(item.price) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    );
  } catch (error) {
    checkoutMessage.textContent = "We couldn’t read your saved bag. Please return to the shop and add your books again.";
    return [];
  }
}

function renderOrder() {
  const cart = readCart();
  checkoutItems.replaceChildren();
  checkoutEmpty.hidden = cart.length > 0;
  submitButton.disabled = cart.length === 0;

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "checkout-item";
    const details = document.createElement("div");
    const title = document.createElement("strong");
    title.textContent = item.title;
    const quantity = document.createElement("span");
    quantity.textContent = `Qty ${item.quantity}`;
    details.append(title, quantity);
    const price = document.createElement("strong");
    price.textContent = formatCedis(item.price * item.quantity);
    row.append(details, price);
    checkoutItems.append(row);
  });

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const delivery = cart.length ? DELIVERY_FEE : 0;
  subtotalElement.textContent = formatCedis(subtotal);
  deliveryElement.textContent = cart.length ? formatCedis(delivery) : "Free";
  totalElement.textContent = formatCedis(subtotal + delivery);
  return cart;
}

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const cart = renderOrder();
  if (!cart.length) {
    checkoutMessage.textContent = "Your bag is empty. Add a book before placing an order.";
    return;
  }

  if (!checkoutForm.reportValidity()) return;

  const formData = new FormData(checkoutForm);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const message = [
    "Hello Lawrence Book Shop! I’d like to request this order:",
    "",
    ...cart.map((item) => `• ${item.title} — ${item.quantity} × ${formatCedis(item.price)} = ${formatCedis(item.price * item.quantity)}`),
    "",
    `Subtotal: ${formatCedis(subtotal)}`,
    `Delivery: ${formatCedis(DELIVERY_FEE)}`,
    `Total: ${formatCedis(subtotal + DELIVERY_FEE)}`,
    "",
    `Name: ${formData.get("name")}`,
    `Phone: ${formData.get("phone")}`,
    `Email: ${formData.get("email")}`,
    `Address: ${formData.get("address")}, ${formData.get("city")}, ${formData.get("region")}`,
    `Payment preference: ${formData.get("payment")}`,
    `Delivery notes: ${formData.get("notes") || "None"}`
  ].join("\n");

  const whatsappUrl = `https://wa.me/233531114197?text=${encodeURIComponent(message)}`;
  const whatsappLink = document.createElement("a");
  whatsappLink.href = whatsappUrl;
  whatsappLink.target = "_blank";
  whatsappLink.rel = "noopener noreferrer";
  whatsappLink.click();
  checkoutMessage.textContent = "Your order message is ready in WhatsApp. Send it there to confirm your order.";
});

renderOrder();
