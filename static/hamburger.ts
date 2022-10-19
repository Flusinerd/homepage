const button = document.querySelector(".hamburger");
console.log("Button", button);
if (button) {
  button.addEventListener("click", () => {
    button.classList.toggle("open");
  });
}
