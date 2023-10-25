const productContainerMobile = document.getElementById("product-container");

const generateMobile = () => {
  return (productContainerMobile.innerHTML = smartMobilePhones
    .map((x) => {
      const { id, name, descp, price, img } = x;
      return `<div class="grid-product" id="cardHoverEffect">
            <div class="imgItem"><img src=${img} alt=${name}></div>
            <div class="card-product">
                <h5 class="titleProd">${name}</h5>
                <p id="descProd">${descp}</p>
                <div class="price-cart">
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i>${price}</h4>
                    <button id="cartButton" value=${id}>Add to cart</button>
                </div>
            </div>
        </div>`;
    })
    .join(""));
};

generateMobile();

const cardHoverEffect = document.querySelectorAll("#cardHoverEffect");
const overlay = document.querySelector(".overlay");
const popUp = document.querySelector(".popUp");
const closePopup = document.getElementById("closePopup");

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
cardHoverEffect.forEach((cardHover) => {
  cardHover.addEventListener("click", () => {
    if (window.innerWidth >= 900) {
      overlay.style.display = "block";
      popUp.style.display = "block";
    }
  });
});
closePopup.addEventListener("click", () => {
  overlay.style.display = "none";
  popUp.style.display = "none";
});
