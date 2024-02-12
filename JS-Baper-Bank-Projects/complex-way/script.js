const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", () => {

  const email = document.getElementById("email");
  const password = document.getElementById("password");

  if (email.value === "admin@gmail.com" && password.value === "admin") {
    window.location = "account.html";
  }else{
    alert("invalid email or password");
  }

});
