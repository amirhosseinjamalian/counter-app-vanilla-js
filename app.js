const number = document.querySelector(".number");
const add = document.querySelector(".add");
const reset = document.querySelector(".reset");
const minus = document.querySelector(".minus");

let newNum = 0;

add.onclick = () => (number.textContent = ++newNum);
reset.onclick = () => (number.textContent = newNum = 0);
minus.onclick = () => (number.textContent = --newNum);

document.addEventListener("click", () => {
  if (newNum > 0) {
    number.style.color = "green";
  } else if (newNum < 0) {
    number.style.color = "red";
  } else {
    number.style.color = "black";
  }
});
