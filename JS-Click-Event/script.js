const yellow = document.getElementById("yellow");
const purple = document.getElementById("purple");
const fuchsia = document.getElementById("fuchsia");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
const allText = document.getElementById("all-text");

yellow.addEventListener("click", () => {
  document.body.style.backgroundColor = "yellow";
  allText.style.color = '#000080';
});
purple.addEventListener("click", () => {
  document.body.style.backgroundColor = "purple";
  allText.style.color = 'white';
});
fuchsia.addEventListener("click", () => {
  document.body.style.backgroundColor = "fuchsia";
  allText.style.color = '#000080';
});
green.addEventListener("click", () => {
  document.body.style.backgroundColor = "green";
  allText.style.color = 'white';
});
blue.addEventListener("click", () => {
  document.body.style.backgroundColor = "blue";
  allText.style.color = 'white';
});
