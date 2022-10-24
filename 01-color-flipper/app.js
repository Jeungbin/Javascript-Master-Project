const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const changeBtn = document.getElementById("btn");
const colorName = document.getElementById("color-name");

function changeColor() {
  let randomNum = Math.floor(Math.random() * 4);
  colorName.innerHTML = colors[randomNum];
  document.body.style.background = colors[randomNum];
}
changeBtn.addEventListener("click", changeColor);
