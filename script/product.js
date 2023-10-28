const productContainerMobile = document.getElementById("product-container");
const items = document.getElementById("items");
let basket = JSON.parse(localStorage.getItem("data")) || [];
items.innerHTML = basket.length;

const generateMobile = () => {
  return (productContainerMobile.innerHTML = smartMobilePhones
    .map((x) => {
      const { id, name, descp, price, img } = x;
      const search = basket.find((x) => x.id === id);
      return `<div class="grid-product" id="cardHoverEffect">
            <div class="imgItem"><img src=${img} alt=${name}></div>
            <div class="card-product">
                <h5 class="titleProd">${name}</h5>
                <p id="descProd">${descp}</p>
                <div class="price-cart">
                    <h4><i class="fa-solid fa-indian-rupee-sign"></i>${price}</h4>
                    <button class="cartButton" id = ${
                      search === undefined ? "cartButton" : "cartButtonRemove"
                    }  data-id=${id} onclick="addToBasket(${id})" type="button">
                   ${
                     search === undefined ? "Add to cart" : "Added to cart"
                   }   </button>
                </div>
            </div>
        </div>`;
    })
    .join(""));
};

generateMobile();

const cartButton = document.querySelectorAll(".cartButton");
const cardHoverEffect = document.querySelectorAll("#cardHoverEffect");
const overlay = document.querySelector(".overlay");

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
// onclick event handling for add or remove item from basket
cartButton.forEach((idVal) => {
  idVal.addEventListener("click", (event) => {
    const id = event.target.getAttribute("data-id");
    const search = basket.find((x) => x.id === id);
    if (!search) {
      addToBasket(id);
      event.target.innerHTML = "Added to cart";
      event.target.id = "cartButtonRemove";
      alert("Item Added to cart");
    } else {
      const confirmItemRemoval = confirm(
        "Are you Sure you want to remove item from cart"
      );
      if (confirmItemRemoval) {
        event.target.innerHTML = "Add to cart";
        event.target.id = "cartButton";
        removeFromBasket(id);
      }
    }
  });
});
// Add item to cart
let addToBasket = (id) => {
  basket.push({
    id: id,
    item: 1,
  });
  items.innerHTML = basket.length;
  localStorage.setItem("data", JSON.stringify(basket));
};

// remove Item from cart
let removeFromBasket = (id) => {
  basket = basket.filter((Item) => Item.id !== id);
  items.innerHTML = basket.length;
  localStorage.setItem("data", JSON.stringify(basket));
};
