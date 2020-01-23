import caesar13 from "./modules/caesar13";

const input = document.getElementById("input");
const btnEncript = document.getElementById("btnEncript");
const text = document.querySelector(".reply");

btnEncript.addEventListener("click", () => {
  text.innerHTML = caesar13(input.value);
  text.classList.add("active");
});
