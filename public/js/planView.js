const wrapper = document.getElementById("Wrapper");
const images = wrapper.querySelectorAll("img");
let currentImageIndex = 0;

wrapper.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    const imgSrc = e.target.src;
    currentImageIndex = Array.from(images).indexOf(e.target);

    const existingDiv = document.getElementById("lightbox");
    if (existingDiv) {
      existingDiv.style.display = "flex";
      updateLightboxImage(imgSrc);
      slider.addEventListener("blur", closeLightbox, true);
      slider.setAttribute("tabindex", "0"); // Make the lightbox focusable
      slider.focus(); // Set focus to the lightbox
    } else {
      openLightbox(imgSrc);
    }
  }
});

function openLightbox(imgSrc) {
  const existingDiv = document.getElementById("lightbox");
  const slider = document.getElementById("slider");
  if (existingDiv) {
    existingDiv.style.display = "flex";
    const lightboxImage = document.createElement("img");

    lightboxImage.src = imgSrc;

    slider.addEventListener("blur", closeLightbox, true);
    slider.setAttribute("tabindex", "0"); // Make the lightbox focusable
    slider.focus(); // Set focus to the lightbox
  } else {
    const lightbox = document.createElement("div");
    lightbox.id = "lightbox";
    lightbox.classList.add("lightbox");

    const slider = document.createElement("div");
    slider.id = "slider";
    slider.classList.add("slider");

    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close-btn");
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = closeLightbox;

    const lightboxImage = document.createElement("img");
    lightboxImage.id = "lightbox-image";
    lightboxImage.src = imgSrc;
    lightboxImage.alt = "Lightbox Image";

    const prevBtn = document.createElement("span");
    prevBtn.classList.add("nav-btn", "prev-btn");
    prevBtn.innerHTML = "&#9665;";
    prevBtn.onclick = showPreviousImage;

    const nextBtn = document.createElement("span");
    nextBtn.classList.add("nav-btn", "next-btn");
    nextBtn.innerHTML = "&#9655;";
    nextBtn.onclick = showNextImage;

    lightbox.appendChild(closeBtn);
    slider.appendChild(prevBtn);
    slider.appendChild(lightboxImage);
    slider.appendChild(nextBtn);
    lightbox.appendChild(slider);
    document.body.appendChild(lightbox);
    lightbox.style.display = "flex";

    // Add event listener to close lightbox when clicking outside of it
    document.addEventListener("mousedown", outsideClickHandler);

    // Add blur event listener to close lightbox when it loses focus
    slider.addEventListener("blur", closeLightbox, true);
    slider.setAttribute("tabindex", "0"); // Make the lightbox focusable
    slider.focus(); // Set focus to the lightbox
  }
}

function closeLightbox() {
  const existingDiv = document.getElementById("lightbox");
  slider.addEventListener("blur", closeLightbox, true);
  slider.setAttribute("tabindex", "0"); // Make the lightbox focusable
  slider.focus();
  if (existingDiv) {
    existingDiv.style.display = "none";
  }
}

function outsideClickHandler(e) {
  const lightbox = document.getElementById("lightbox");

  if (lightbox && !lightbox.contains(e.target)) {
    closeLightbox();
  }
}

function showPreviousImage(e) {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  const imgSrc = images[currentImageIndex].src;
  updateLightboxImage(imgSrc);
}

function showNextImage(e) {
  e.stopPropagation();
  currentImageIndex = (currentImageIndex + 1) % images.length;
  const imgSrc = images[currentImageIndex].src;
  updateLightboxImage(imgSrc);
}

function updateLightboxImage(imgSrc) {
  const lightboxImage = document.getElementById("lightbox-image");
  lightboxImage.src = imgSrc;
}

document.addEventListener("keydown", function (event) {
  // Check if the pressed key is the "Escape" key
  if (event.key === "Escape") {
    const existingDiv = document.getElementById("lightbox");
    if (existingDiv) {
      existingDiv.style.display = "none";
    }
  }
});
