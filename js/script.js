// este lo necesito para agregarle el clic
const botonMenu = document.querySelector(".btn-menu");
// este lo necesito para agregarle la clase
const menu = document.querySelector("#menu-nav");

botonMenu.addEventListener("click", () => {
  menu.classList.toggle("open");
});
