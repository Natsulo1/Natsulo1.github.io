const bannerSlides = document.querySelectorAll(".banner-slide");
const bannerDots = document.querySelectorAll(".carousel-dots button");
let currentBanner = 0;

function updateBanner() {
  bannerSlides.forEach((slide, index) => {
    slide.classList.toggle("active", index === currentBanner);
  });

  bannerDots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentBanner);
  });
}

document.querySelector(".hero.carousel .next").addEventListener("click", () => {
  currentBanner = (currentBanner + 1) % bannerSlides.length;
  updateBanner();
});

document.querySelector(".hero.carousel .prev").addEventListener("click", () => {
  currentBanner = (currentBanner - 1 + bannerSlides.length) % bannerSlides.length;
  updateBanner();
});

bannerDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentBanner = index;
    updateBanner();
  });
});

setInterval(() => {
  currentBanner = (currentBanner + 1) % bannerSlides.length;
  updateBanner();
}, 5000);

const cartBadge = document.querySelector(".cart-badge");
let cartItems = Number(cartBadge.textContent);

document.querySelectorAll(".add-cart").forEach((button) => {
  button.addEventListener("click", () => {
    cartItems++;
    cartBadge.textContent = cartItems;
    button.textContent = "Adicionado!";

    setTimeout(() => {
      button.textContent = "Adicionar ao carrinho";
    }, 900);
  });
});

document.querySelector(".search-form").addEventListener("submit", (event) => {
  event.preventDefault();
});

document.querySelector(".newsletter form").addEventListener("submit", (event) => {
  event.preventDefault();
  const input = event.currentTarget.querySelector("input");
  if (input.value.trim()) {
    alert("E-mail cadastrado com sucesso!");
    input.value = "";
  }
});
