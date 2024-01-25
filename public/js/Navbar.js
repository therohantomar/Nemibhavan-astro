const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const menuContainer = document.getElementById("menu-container");
menuContainer.addEventListener("click", (event) => {
  const target = event.target;
  if (target.tagName === "A") {
    toggleMobileMenu();
  }
});

function toggleMobileMenu() {
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("block");
  } else {
    mobileMenu.classList.add("hidden");
  }
}

mobileMenuButton.addEventListener("click", () => {
  console.log("mobileMenuButton clicked");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("block");
  } else {
    mobileMenu.classList.add("hidden");
  }
});

// Close mobile menu when clicking outside of it
document.addEventListener("click", (event) => {
  if (
    !mobileMenu.contains(event.target) &&
    !mobileMenuButton.contains(event.target)
  ) {
    mobileMenu.classList.add("hidden");
  }
});
