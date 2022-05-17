let acardion = document.querySelectorAll(".acardion");
let acardionOpen = document.querySelector(".acardion-open");

acardion.forEach((item) => {
  let acardionOpen = item.nextElementSibling;

  item.addEventListener("click", () => {
    item.classList.toggle("active");

    if (acardionOpen.style.maxHeight) {
      acardionOpen.style.maxHeight = null;
    } else {
      acardionOpen.style.maxHeight = acardionOpen.scrollHeight + "px";
    }
  });
});
