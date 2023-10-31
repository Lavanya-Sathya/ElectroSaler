const email = document.getElementById("emailLogin");
const pass = document.getElementById("passwordLogin");

const errorEmail = document.getElementById("errorEmailLogin");
const errorPass = document.getElementById("errorPassLogin");
const errorMsg = document.getElementById("errorSubmit");

function validateLoginEmail() {
  const emailValue = email.value;
  if (emailValue.length == 0) {
    errorEmail.innerHTML = "Email is required";
    errorEmail.style.color = "red";
    return false;
  } else if (
    !emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    errorEmail.innerHTML = "Email is invalid";
    errorEmail.style.color = "red";
    return false;
  } else {
    errorEmail.innerHTML = "";
    return true;
  }
}
function validateLoginPassword() {
  const password = pass.value;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password === "") {
    errorPass.innerHTML = "password is required";
    errorPass.style.color = "red";

    return false;
  } else if (!password.match(passwordPattern)) {
    errorPass.innerHTML =
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
    errorPass.style.color = "red";
    return false;
  } else {
    errorPass.innerHTML = "";
    return true;
  }
}

function validateLogin() {
  if (!validateLoginEmail() || !validateLoginPassword()) {
    errorMsg.innerHTML = "Please fix the error";
    errorMsg.style.color = "red";
    return false;
  } else {
    errorMsg.innerHTML = "";
    return true;
  }
}
