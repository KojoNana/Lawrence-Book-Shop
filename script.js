const books = [
  { title: "The House in the Cerulean Sea", author: "T. J. Klune", category: "Fiction", price: 18, coverId: "9312772", start: "#8dbfbb", end: "#3a6f6a" },
  { title: "Braiding Sweetgrass", author: "Robin Wall Kimmerer", category: "Nonfiction", price: 21, coverId: "7281575", start: "#d7b57a", end: "#748d6d" },
  { title: "The Sun and Her Flowers", author: "Rupi Kaur", category: "Poetry", price: 16.5, coverId: "8084615", start: "#ec9d6d", end: "#c76e53" },
  { title: "The Creative Act", author: "Rick Rubin", category: "Self-help", price: 24, start: "#d6d9c5", end: "#7b8770" },
  { title: "Atomic Habits", author: "James Clear", category: "Self-help", price: 19, coverId: "12539702", start: "#d28757", end: "#7b4b3a" },
  { title: "Little Fires Everywhere", author: "Celeste Ng", category: "Fiction", price: 17, start: "#c28e72", end: "#5f8092" },
  { title: "The Midnight Library", author: "Matt Haig", category: "Fiction", price: 18.5, start: "#6f8ea0", end: "#2f4565" },
  { title: "Educated", author: "Tara Westover", category: "Nonfiction", price: 20, start: "#d4a381", end: "#8a6845" },
  { title: "The Silent Patient", author: "Alex Michaelides", category: "Mystery", price: 22, start: "#7f6e7c", end: "#384b5f" },
  { title: "The Alchemist", author: "Paulo Coelho", category: "Fiction", price: 15.5, start: "#d2b878", end: "#73613e" },
  { title: "When Breath Becomes Air", author: "Paul Kalanithi", category: "Nonfiction", price: 19.5, start: "#c0b7d5", end: "#6f6d96" },
  { title: "The Book of Delights", author: "Ross Gay", category: "Poetry", price: 18.5, start: "#e9b47b", end: "#ad7a52" },
  { title: "The Hobbit", author: "J.R.R. Tolkien", category: "Fantasy", price: 16, start: "#b08d63", end: "#4d5d40" },
  { title: "A Gentle Reminder", author: "Bianca Sparacino", category: "Self-help", price: 14.5, start: "#f3d7c0", end: "#c97759" },
  { title: "The Night Circus", author: "Erin Morgenstern", category: "Fantasy", price: 20, start: "#82586a", end: "#212d3a" },
  { title: "Becoming", author: "Michelle Obama", category: "Biography", price: 23, start: "#b3b0a0", end: "#62766c" },
  { title: "Pride and Prejudice", author: "Jane Austen", category: "Fiction", price: 16, start: "#d3b989", end: "#9b745c" },
  { title: "Think and Grow Rich", author: "Napoleon Hill", category: "Self-help", price: 17, start: "#d9b4a3", end: "#7f5c57" },
  { title: "The Secret History", author: "Donna Tartt", category: "Fiction", price: 21, start: "#7a8c85", end: "#2f3e3a" },
  { title: "Sapiens", author: "Yuval Noah Harari", category: "Nonfiction", price: 25, start: "#d9c1a4", end: "#7c6a54" },
  { title: "The Priory of the Orange Tree", author: "Samantha Shannon", category: "Fantasy", price: 26, start: "#a68b75", end: "#4a2e2d" },
  { title: "The Bell Jar", author: "Sylvia Plath", category: "Fiction", price: 18, start: "#c7bca8", end: "#6d6463" },
  { title: "The Four Agreements", author: "Don Miguel Ruiz", category: "Self-help", price: 14, start: "#edd5a1", end: "#b37b56" },
  { title: "The Book Thief", author: "Markus Zusak", category: "Fiction", price: 18, start: "#bf9e7d", end: "#4f3c39" },
  { title: "The Power of Now", author: "Eckhart Tolle", category: "Self-help", price: 18.5, start: "#b9d0d6", end: "#5f7a7e" },
  { title: "A Brief History of Time", author: "Stephen Hawking", category: "Nonfiction", price: 22, start: "#a1b7ad", end: "#3e646c" },
  { title: "The Girl on the Train", author: "Paula Hawkins", category: "Mystery", price: 17.5, start: "#8a8e8a", end: "#2b3c43" },
  { title: "The Song of Achilles", author: "Madeline Miller", category: "Fiction", price: 19, start: "#d7a78e", end: "#8d5f4f" },
  { title: "The Hidden Life of Trees", author: "Peter Wohlleben", category: "Nonfiction", price: 24, start: "#8ea373", end: "#42573d" },
  { title: "The Love Hypothesis", author: "Ali Hazelwood", category: "Fiction", price: 17.5, start: "#d2a7b3", end: "#7b4b66" },
  { title: "The Invisible Life of Addie LaRue", author: "V. E. Schwab", category: "Fantasy", price: 18.5, start: "#cba087", end: "#885a50" },
  { title: "A Thousand Splendid Suns", author: "Khaled Hosseini", category: "Fiction", price: 19.5, start: "#c6bf8e", end: "#6f684c" },
  { title: "The Art of Stillness", author: "Pico Iyer", category: "Nonfiction", price: 17.5, start: "#d1c884", end: "#7d6d43" },
  { title: "Poetry Unbound", author: "Pádraig Ó Tuama", category: "Poetry", price: 24, start: "#d7a976", end: "#7a5c44" }
];

const CART_STORAGE_KEY = "lawrenceBookShopCart";
const WISHLIST_STORAGE_KEY = "lawrenceBookShopWishlist";
const GHANA_CEDIS_PER_LISTED_DOLLAR = 15;
const bookGrid = document.querySelector("#book-grid");
const bestsellerCarousel = document.querySelector("#bestseller-carousel");
const searchInput = document.querySelector("#book-search");
const sortSelect = document.querySelector("#book-sort");
const filterButtons = [...document.querySelectorAll(".filter-chip")];
const searchMessage = document.querySelector("#search-message");
const emptyState = document.querySelector("#empty-state");
const wishlistToggle = document.querySelector("#wishlist-toggle");
const wishlistCount = document.querySelector("#wishlist-count");
const cartCount = document.querySelector("#cart-count");
const cartOverlay = document.querySelector("#cart-overlay");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartSubtotal = document.querySelector("#cart-subtotal");
const toast = document.querySelector("#toast");
const newsletterForm = document.querySelector("#newsletter-form");
const formMessage = document.querySelector("#form-message");

let activeCategory = "All";
let toastTimer;
let cart = loadCart();
let wishlist = loadWishlist();

function formatCedis(amount) {
  return new Intl.NumberFormat("en-GH", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 2
  }).format(amount);
}

function toCedis(listedPrice) {
  return Math.round(listedPrice * GHANA_CEDIS_PER_LISTED_DOLLAR);
}

function loadCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "[]");
    if (!Array.isArray(savedCart)) return [];
    return savedCart.filter((item) =>
      typeof item.title === "string" &&
      Number.isFinite(item.price) &&
      Number.isInteger(item.quantity) &&
      item.quantity > 0
    );
  } catch (error) {
    showToast("Your saved bag could not be loaded in this browser.");
    return [];
  }
}

function loadWishlist() {
  try {
    const savedWishlist = JSON.parse(localStorage.getItem(WISHLIST_STORAGE_KEY) || "[]");
    return Array.isArray(savedWishlist)
      ? savedWishlist.filter((title) => typeof title === "string")
      : [];
  } catch (error) {
    return [];
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    showToast("Your bag could not be saved in this browser.");
  }
}

function watchBookCovers(container) {
  container.querySelectorAll('.book-cover-image[data-cover-id]:not([data-cover-id=""])').forEach((cover) => {
    cover.src = `https://covers.openlibrary.org/b/id/${cover.dataset.coverId}-L.jpg`;
  });
}

function saveWishlist() {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(wishlist));
  } catch (error) {
    showToast("Your saved books could not be stored in this browser.");
  }
  wishlistCount.textContent = wishlist.length;
  wishlistToggle.setAttribute("aria-pressed", String(showWishlistOnly));
}

let showWishlistOnly = false;

function toggleWishlist(book) {
  if (wishlist.includes(book.title)) {
    wishlist = wishlist.filter((title) => title !== book.title);
    showToast(`${book.title} removed from saved books`);
  } else {
    wishlist.push(book.title);
    showToast(`${book.title} saved for later`);
  }
  saveWishlist();
  updateWishlistButtons();
  renderBooks();
}

function updateWishlistButtons() {
  document.querySelectorAll(".book-card").forEach((card) => {
    const bookTitle = card.dataset.title;
    const saved = wishlist.includes(bookTitle);
    const button = card.querySelector(".favorite-button");
    if (!button) return;
    button.textContent = saved ? "♥" : "♡";
    button.setAttribute("aria-pressed", String(saved));
    button.setAttribute("aria-label", `${saved ? "Remove" : "Save"} ${bookTitle} ${saved ? "from" : "to"} saved books`);
  });
}

function createBookCard(book, featured = false) {
  const price = toCedis(book.price);
  const card = document.createElement("article");
  card.className = featured ? "book-card featured-book-card" : "book-card";
  card.dataset.category = book.category;
  card.dataset.title = book.title;
  card.dataset.author = book.author;
  card.dataset.price = price;
  const cover = document.createElement("img");
  cover.className = "book-cover-image";
  cover.alt = `Cover of ${book.title} by ${book.author}`;
  cover.loading = "lazy";
  cover.decoding = "async";
  cover.dataset.title = book.title;
  cover.dataset.author = book.author;
  cover.dataset.coverId = book.coverId || "";
  cover.style.setProperty("--book-start", book.start);
  cover.style.setProperty("--book-end", book.end);
  cover.addEventListener("load", () => {
    cover.classList.add("loaded");
    coverFrame.classList.add("has-image");
  }, { once: true });
  cover.addEventListener("error", () => {
    cover.classList.add("cover-unavailable");
    cover.removeAttribute("src");
  }, { once: true });

  const coverFrame = document.createElement("div");
  coverFrame.className = "book-cover";
  coverFrame.style.setProperty("--book-start", book.start);
  coverFrame.style.setProperty("--book-end", book.end);
  coverFrame.append(cover);
  const coverLabel = document.createElement("span");
  coverLabel.className = "cover-topline";
  coverLabel.textContent = book.category;
  coverFrame.append(coverLabel);
  const coverTitle = document.createElement("span");
  coverTitle.className = "cover-art-title";
  coverTitle.textContent = book.title;
  coverFrame.append(coverTitle);
  const coverAuthor = document.createElement("span");
  coverAuthor.className = "cover-art-author";
  coverAuthor.textContent = book.author;
  coverFrame.append(coverAuthor);
  const favoriteButton = document.createElement("button");
  favoriteButton.className = "favorite-button";
  favoriteButton.type = "button";
  favoriteButton.textContent = wishlist.includes(book.title) ? "♥" : "♡";
  favoriteButton.setAttribute("aria-label", `${wishlist.includes(book.title) ? "Remove" : "Save"} ${book.title} ${wishlist.includes(book.title) ? "from" : "to"} saved books`);
  favoriteButton.setAttribute("aria-pressed", String(wishlist.includes(book.title)));
  favoriteButton.addEventListener("click", () => toggleWishlist(book));
  coverFrame.append(favoriteButton);

  const info = document.createElement("div");
  info.className = "book-info";
  const meta = document.createElement("div");
  meta.className = "book-meta";
  const category = document.createElement("p");
  category.className = "book-category";
  category.textContent = book.category;
  const priceLabel = document.createElement("span");
  priceLabel.className = "book-price";
  priceLabel.textContent = formatCedis(price);
  meta.append(category, priceLabel);
  const title = document.createElement("h3");
  title.textContent = book.title;
  const author = document.createElement("p");
  author.className = "book-author";
  author.textContent = book.author;
  info.append(meta, title, author);

  const addButton = document.createElement("button");
  addButton.className = "add-button";
  addButton.type = "button";
  addButton.textContent = "Add to bag";
  addButton.addEventListener("click", () => addToCart(book));
  card.append(coverFrame, info, addButton);
  return card;
}

function renderBestsellers() {
  const featuredBooks = ["Atomic Habits", "The Midnight Library", "The House in the Cerulean Sea", "The Alchemist", "Braiding Sweetgrass", "The Silent Patient", "The Hobbit", "The Song of Achilles"]
    .map((title) => books.find((book) => book.title === title))
    .filter(Boolean);
  bestsellerCarousel.replaceChildren(...featuredBooks.map((book) => createBookCard(book, true)));
  watchBookCovers(bestsellerCarousel);
}

function renderBooks() {
  const query = searchInput.value.trim().toLowerCase();
  const visibleBooks = books
    .filter((book) => activeCategory === "All" || book.category === activeCategory)
    .filter((book) => !showWishlistOnly || wishlist.includes(book.title))
    .filter((book) => `${book.title} ${book.author} ${book.category}`.toLowerCase().includes(query));

  if (sortSelect.value === "title-asc") {
    visibleBooks.sort((first, second) => first.title.localeCompare(second.title));
  } else if (sortSelect.value === "price-asc") {
    visibleBooks.sort((first, second) => toCedis(first.price) - toCedis(second.price));
  } else if (sortSelect.value === "price-desc") {
    visibleBooks.sort((first, second) => toCedis(second.price) - toCedis(first.price));
  }

  bookGrid.replaceChildren(...visibleBooks.map((book) => createBookCard(book)));
  searchMessage.textContent = `${visibleBooks.length} ${visibleBooks.length === 1 ? "book" : "books"} shown${showWishlistOnly ? " · saved books" : ""}`;
  emptyState.hidden = visibleBooks.length > 0;
  emptyState.textContent = showWishlistOnly && wishlist.length === 0
    ? "You haven’t saved any books yet. Tap the heart on a cover to keep a title for later."
    : "No titles match your search yet. Try another keyword or category.";
  watchBookCovers(bookGrid);
}

function filterBooks() {
  renderBooks();
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

function addToCart(book) {
  const price = toCedis(book.price);
  const existing = cart.find((item) => item.title === book.title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ title: book.title, author: book.author, price, quantity: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${book.title} added to your bag`);
}

function updateCartQuantity(title, change) {
  const item = cart.find((cartItem) => cartItem.title === title);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cart = cart.filter((cartItem) => cartItem.title !== title);
  saveCart();
  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartItems.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-line";
    const details = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = item.title;
    const unitPrice = document.createElement("p");
    unitPrice.textContent = `${formatCedis(item.price)} each`;
    details.append(title, unitPrice);

    const controls = document.createElement("div");
    controls.className = "cart-actions";
    const quantityControls = document.createElement("div");
    quantityControls.className = "quantity-controls";
    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.textContent = "−";
    decrease.setAttribute("aria-label", `Decrease ${item.title} quantity`);
    decrease.addEventListener("click", () => updateCartQuantity(item.title, -1));
    const quantity = document.createElement("span");
    quantity.textContent = item.quantity;
    quantity.setAttribute("aria-label", `Quantity ${item.quantity}`);
    const increase = document.createElement("button");
    increase.type = "button";
    increase.textContent = "+";
    increase.setAttribute("aria-label", `Increase ${item.title} quantity`);
    increase.addEventListener("click", () => updateCartQuantity(item.title, 1));
    quantityControls.append(decrease, quantity, increase);

    const lineTotal = document.createElement("strong");
    lineTotal.textContent = formatCedis(item.price * item.quantity);
    const remove = document.createElement("button");
    remove.type = "button";
    remove.className = "remove-item";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${item.title} from bag`);
    remove.addEventListener("click", () => updateCartQuantity(item.title, -item.quantity));
    controls.append(quantityControls, lineTotal, remove);
    row.append(details, controls);
    cartItems.append(row);
  });

  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  cartSubtotal.textContent = formatCedis(subtotal);
  cartEmpty.style.display = cart.length ? "none" : "block";
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    filterButtons.forEach((chip) => chip.classList.toggle("active", chip === button));
    renderBooks();
  });
});

searchInput.addEventListener("input", filterBooks);
sortSelect.addEventListener("change", renderBooks);

wishlistToggle.addEventListener("click", () => {
  showWishlistOnly = !showWishlistOnly;
  wishlistToggle.classList.toggle("active", showWishlistOnly);
  saveWishlist();
  renderBooks();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && !event.ctrlKey && !event.metaKey && !["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) {
    event.preventDefault();
    searchInput.focus();
  }
  if (event.key === "Escape" && document.activeElement === searchInput) {
    searchInput.value = "";
    renderBooks();
    searchInput.blur();
  }
});

window.addEventListener("storage", (event) => {
  if (event.key === CART_STORAGE_KEY) {
    cart = loadCart();
    renderCart();
  }
  if (event.key === WISHLIST_STORAGE_KEY) {
    wishlist = loadWishlist();
    wishlistCount.textContent = wishlist.length;
    wishlistToggle.setAttribute("aria-pressed", String(showWishlistOnly));
    updateWishlistButtons();
    renderBooks();
  }
});

function openCart() {
  cartOverlay.hidden = false;
  document.body.style.overflow = "hidden";
  document.querySelector("#cart-close").focus();
}

function closeCart() {
  cartOverlay.hidden = true;
  document.body.style.overflow = "";
  document.querySelector("#cart-toggle").focus();
}

document.querySelector("#cart-toggle").addEventListener("click", openCart);
document.querySelector("#cart-close").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", (event) => {
  if (event.target === cartOverlay) closeCart();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !cartOverlay.hidden) closeCart();
});

newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#email");

  if (!email.value.trim() || !email.checkValidity()) {
    email.reportValidity();
    return;
  }

  const signupUrl = `mailto:kojon8944@gmail.com?subject=${encodeURIComponent("Bookshop reading list")}&body=${encodeURIComponent(`Please add ${email.value.trim()} to the Lawrence Book Shop reading list.`)}`;
  formMessage.textContent = "Opening an email draft so we can add you to the reading list.";
  window.location.href = signupUrl;
});

const carousel = document.querySelector("#bestseller-carousel");
const carouselPrevious = document.querySelector("#carousel-prev");
const carouselNext = document.querySelector("#carousel-next");
function updateCarouselControls() {
  const maxScroll = carousel.scrollWidth - carousel.clientWidth;
  carouselPrevious.disabled = carousel.scrollLeft <= 1;
  carouselNext.disabled = carousel.scrollLeft >= maxScroll - 1;
}

carouselPrevious.addEventListener("click", () => {
  carousel.scrollBy({ left: -carousel.clientWidth * 0.8, behavior: "smooth" });
});
carouselNext.addEventListener("click", () => {
  carousel.scrollBy({ left: carousel.clientWidth * 0.8, behavior: "smooth" });
});
carousel.addEventListener("scroll", updateCarouselControls, { passive: true });
window.addEventListener("resize", updateCarouselControls);

renderBestsellers();
renderBooks();
renderCart();
saveWishlist();
updateCarouselControls();
