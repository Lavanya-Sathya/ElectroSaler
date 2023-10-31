// Generate Feature Data
let features = document.getElementById("feature");
let generateFeatures = () => {
  return (features.innerHTML = featureData.map((x) => {
    `<h1 class="text-center text-white p-3" id="features">Features</h1>`;
    if (x.num === "1") {
      return `<div class="row mt-3">
            <div class="col-md-5">
                <p class="h2 text-white featureHeading">${x.name}</p>
                <p class="p-2 text-white">${x.desc}</p>
            </div>
            <div class="col-md-7">
                <img src="${x.img}" class="feature_img" alt="feature_performance">
            </div>
         </div>`;
    } else {
      return `<div class="row mt-3">
            <div class="col-md-5 order-md-2">
                <p class="h2 text-white featureHeading">${x.name}</p>
                <p class="p-2 text-white">${x.desc}</p>
            </div>
            <div class="col-md-7 order-md-1 ">
                <img src="${x.img}" class="feature_img" alt="display">
            </div>
        </div>`;
    }
  }));
};

generateFeatures();

// Product section hover effect
const cardHoverEffect = document.querySelectorAll("#cardHoverEffect");
cardHoverEffect.forEach((cardHover) => {
  cardHover.addEventListener("mouseover", () => {
    cardHover.classList.add("enlarge");
  });
});

cardHoverEffect.forEach((cardHover) => {
  cardHover.addEventListener("mouseout", () => {
    cardHover.classList.remove("enlarge");
  });
});

// Validation for contact section
const nameContact = document.getElementById("name_Contact");
const emailContact = document.getElementById("email_contact");
const queryContact = document.getElementById("comment_contact");
const nameError = document.getElementById("error_name_contact");
const emailError = document.getElementById("error_email_contact");
const queryError = document.getElementById("error_query_contact");
const errorMessage = document.getElementById("error_submit_contact");

function ValidateContactName() {
  const name = nameContact.value;
  if (name === "") {
    nameError.innerHTML = "Name is Required";
    nameError.style.color = "red";
    return false;
  } else {
    nameError.innerHTML = "";
    return true;
  }
}
function ValidateContactEmail() {
  var email = emailContact.value;

  if (email.length == 0) {
    emailError.innerHTML = "Email is required";
    emailError.style.color = "red";
    return false;
  } else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    emailError.innerHTML = "Email is invalid";
    emailError.style.color = "red";
    return false;
  } else {
    emailError.innerHTML = "";
    return true;
  }
}
function ValidateContactQuery() {
  var query = queryContact.value;
  if (query.length == 0) {
    queryError.innerHTML = "Please mention your query";
    queryError.style.color = "red";
    return false;
  } else {
    queryError.innerHTML = "";
    return true;
  }
}
function ValidateContactForm() {
  if (
    !ValidateContactName() ||
    !ValidateContactEmail() ||
    !ValidateContactQuery()
  ) {
    errorMessage.innerHTML = "Please fix the error";
    errorMessage.style.color = "red";
    setTimeout(() => {
      errorMessage.innerHTML = "";
    }, 3000);
    return false;
  }
}
