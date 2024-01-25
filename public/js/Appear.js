const CancelElements = document.getElementsByClassName("cancel"),
  formBlock = document.querySelector("#form_block");
let isVisible = !1;
function checkScroll() {
  var e = document.getElementById("Amenities").getBoundingClientRect();
  if (e.top >= 0 && e.top <= window.innerHeight) {
    if (isVisible) return;
    (formBlock.style.top = 0),
      (formBlock.style.bottom = 0),
      (isVisible = !isVisible);
  }
}
function formPopup() {
  (formBlock.style.top = 0), (formBlock.style.bottom = 0);
}
window.addEventListener("scroll", checkScroll),
  CancelElements[0].addEventListener("click", () => {
    (formBlock.style.top = "-100%"), (formBlock.style.bottom = "");
  }),
  CancelElements[1].addEventListener("click", () => {
    (formBlock.style.top = "-100%"), (formBlock.style.bottom = "");
  });
