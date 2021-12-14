/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let board = [
  null,
  "fas fa-times",
  null,
  null,
  null,
  "far fa-circle",
  null,
  "far fa-circle",
  null
];

window.onload = function() {
  //write your code here

  document.querySelector(".board").innerHTML = board
    .map(elm => drawGrid(elm))
    .join("");
};

function drawGrid(symbol = "fas fa-times") {
  return `<div class="grid">
  <i class="${symbol}"></i>
</div>`;
}

let addin = document.querySelector(".grid");
if (addin) {
  addin.addEventListener("click", function(e) {
    board[e.target] = "fas fa-times";
    console.log(e.target);
  });
}
