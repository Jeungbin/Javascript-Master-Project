const inc = document.getElementById("inc");
const res = document.getElementById("reset");
const dec = document.getElementById("dec");
const num = document.getElementById("num");
let currentNum = parseInt(num.innerHTML);
console.log(currentNum);

res.addEventListener("click", () => {
  currentNum = 0;
  num.innerHTML = "0";
});

inc.addEventListener("click", () => {
  currentNum = currentNum + 1;
  num.innerHTML = currentNum;
});

dec.addEventListener("click", () => {
  currentNum = currentNum - 1;
  num.innerHTML = currentNum;
});
