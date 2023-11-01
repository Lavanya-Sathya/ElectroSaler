// Validation for Login
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

// validation for sign up
const nameSignup = document.getElementById("nameSignup");
const emailSignup = document.getElementById("emailSignup");
const mobileSignup = document.getElementById("mobileSignup");
const passwordSignup = document.getElementById("passwordSignup");
const RepasswordSignup = document.getElementById("RepasswordSignup");

const errorNameSignup = document.getElementById("errorNameSignup");
const errorEmailSignup = document.getElementById("errorEmailSignup");
const errorMobileSignup = document.getElementById("errorMobileSignup");
const errorPassSignup = document.getElementById("errorPassSignup");
const errorRePassSignup = document.getElementById("errorRePassSignup");
const errorSubmitSignup = document.getElementById("errorSubmitSignup");

function validateSignupName() {
  const name = nameSignup.value;
  if (name === "") {
    errorNameSignup.innerHTML = "Name is required";
    errorNameSignup.style.color = "red";
    return false;
  } else {
    errorNameSignup.innerHTML = "";
    return true;
  }
}
function validateSignupEmail() {
  const emailValue = emailSignup.value;
  if (emailValue.length == 0) {
    errorEmailSignup.innerHTML = "Email is required";
    errorEmailSignup.style.color = "red";
    return false;
  } else if (
    !emailValue.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
  ) {
    errorEmailSignup.innerHTML = "Email is invalid";
    errorEmailSignup.style.color = "red";
    return false;
  } else {
    errorEmailSignup.innerHTML = "";
    return true;
  }
}
function validateSignupMobile() {
  const mobile = mobileSignup.value;
  const mobileNumberPattern = /^\+(?:[0-9] ?){6,14}[0-9]$/;
  if (mobile.length == 0) {
    errorMobileSignup.innerHTML = "Contact number is required. ";
    errorMobileSignup.style.color = "red";
    return false;
  } else if (!mobileNumberPattern.test(mobile)) {
    errorMobileSignup.innerHTML =
      "Please enter Contact number along with the country code. Ex: +91 XXXXXXXXXX";
    errorMobileSignup.style.color = "red";
    return false;
  } else {
    errorMobileSignup.innerHTML = "";
    return true;
  }
}
function validateSignupPassword() {
  const password = passwordSignup.value;
  const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (password === "") {
    errorPassSignup.innerHTML = "password is required";
    errorPassSignup.style.color = "red";

    return false;
  } else if (!password.match(passwordPattern)) {
    errorPassSignup.innerHTML =
      "Password must be at least 8 characters long and include at least one lowercase letter, one uppercase letter, and one digit.";
    errorPassSignup.style.color = "red";
    return false;
  } else {
    errorPassSignup.innerHTML = "";
    return true;
  }
}
function validateSignupRePassword() {
  const password = passwordSignup.value;
  const repassword = RepasswordSignup.value;

  if (repassword === "") {
    errorRePassSignup.innerHTML = "Please Confrim password";
    errorRePassSignup.style.color = "red";

    return false;
  } else if (!repassword.match(password)) {
    errorRePassSignup.innerHTML = "Password does not match";
    errorRePassSignup.style.color = "red";
    return false;
  } else {
    errorRePassSignup.innerHTML = "";
    return true;
  }
}
function validateSignUp() {
  if (
    !validateSignupName() ||
    !validateSignupEmail() ||
    !validateSignupMobile() ||
    !validateSignupPassword() ||
    !validateSignupRePassword()
  ) {
    errorSubmitSignup.innerHTML = "Please fix the error";
    errorSubmitSignup.style.color = "red";
    return false;
  } else {
    errorSubmitSignup.innerHTML = "";
    return true;
  }
}
