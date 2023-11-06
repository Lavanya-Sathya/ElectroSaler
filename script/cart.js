const cartContainer = document.getElementById("cart-container");
const items = document.getElementById("items");
const label = document.getElementById("label");

const cart = JSON.parse(localStorage.getItem("data")) || [];
items.innerHTML = cart.length;
console.log(cart);

const generateCartItems = () => {
  if (cart.length !== 0) {
    cartContainer.innerHTML = cart
      .map((cartItems) => {
        const cartMobiles = smartMobilePhones.find(
          (x) => x.id === cartItems.id
        );
        const { id, name, price, img } = cartMobiles;
        return `<div class="cartHeader">
                    <img src=${img} alt=${name} />
                    <div class="cartDiv"> 
                        <div class="name_remove">
                            <h5>${name}</h5>
                            <i class="bi bi-x-lg"></i>
                        </div>
                        <span class="price">Rs ${price}</span>
                        <div class="ItemNo">
                            <i class="fa-solid fa-minus" style="color: #a12a0c;" id="decrement" dataid=${id} ></i>
                            <span id=${id}>${cartItems.item}</span>
                            <i class="fa-solid fa-plus" style="color: #09711b;" id="increment" dataid=${id}></i>
                        </div>
                        <div id="priceTotal">
                            <i class="fa-solid fa-indian-rupee-sign"> </i>${
                              cartItems.item * price
                            }
                        </div>
                    </div>
                </div>`;
      })
      .join("");
  } else {
    cartContainer.innerHTML = ``;
    label.innerHTML = `<div style="height:19rem"><h4>Your cart is empty</h4>
    <a href="product.html" id="back">Back to Product Section</a></div>`;
  }
};
generateCartItems();

let decrement = document.querySelectorAll("#decrement");
let increment = document.querySelectorAll("#increment");

decrement.forEach((x) => {
  x.addEventListener("click", (e) => {
    const id = e.target.getAttribute("dataid");
    decrementItem(id);
  });
});
let decrementItem = (id) => {
  const search = cart.find((data) => data.id === id);
  console.log("search:", search);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
  updateCart(id);
};

increment.forEach((x) => {
  x.addEventListener("click", (e) => {
    const id = e.target.getAttribute("dataid");
    incrementItem(id);
  });
});
let incrementItem = (id) => {
  const search = cart.find((data) => data.id === id);
  search.item += 1;
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
  updateCart(id);
};

let updateCart = (id) => {
  const search = cart.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
};
