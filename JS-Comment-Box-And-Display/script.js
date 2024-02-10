// target comment display box and comment sender button
const comBoxParent = document.getElementById("comBoxParent");
const send = document.getElementById("send");

// create click event
send.addEventListener("click", () => {
  // target input box
  const inputBox = document.getElementById("inputBox");
  // cheak input validation
  if (inputBox.value === "") {
    alert("Empty comment!");
  } else {
    // create element
    const div = document.createElement("div");
    // set class list
    div.setAttribute(
      "class",
      "bg-base-200 text-xl font-medium rounded-2xl p-4"
    );
    // add div text
    div.innerText = inputBox.value;
    // append dynamic display
    comBoxParent.appendChild(div);
    inputBox.value = "";
    
  }
});
