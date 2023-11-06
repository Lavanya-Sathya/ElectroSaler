const cartContainer = document.getElementById("cart-container");
const items = document.getElementById("items");
const label = document.getElementById("label");

let cart = JSON.parse(localStorage.getItem("data")) || [];
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
                            <i class="bi bi-x-lg"  id="remove" dataid=${id}></i>
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
    attachEventListeners();
  } else {
    cartContainer.innerHTML = ``;
    label.innerHTML = `<div style="height:19rem"><h4>Your cart is empty</h4>
    <a href="product.html" id="back">Back to Product Section</a></div>`;
  }
};
generateCartItems();

function attachEventListeners() {
  let decrement = document.querySelectorAll("#decrement");
  let increment = document.querySelectorAll("#increment");
  let remove = document.querySelectorAll("#remove");

  decrement.forEach((x) => {
    x.addEventListener("click", (e) => {
      const id = e.target.getAttribute("dataid");
      decrementItem(id);
    });
  });

  increment.forEach((x) => {
    x.addEventListener("click", (e) => {
      const id = e.target.getAttribute("dataid");
      incrementItem(id);
    });
  });

  remove.forEach((x) => {
    x.addEventListener("click", (e) => {
      const id = e.target.getAttribute("dataid");
      removeItem(id);
    });
  });
}
// Decrement the number of items added to the cart
let decrementItem = (id) => {
  let search = cart.find((data) => data.id === id);
  if (search === undefined) return;
  else if (search.item === 0) return;
  else {
    search.item -= 1;
  }
  updateCart(id);
  cart = cart.filter((x) => x.item !== 0);
  generateCartItems();
  items.innerHTML = cart.length;
  localStorage.setItem("data", JSON.stringify(cart));
};

// Add more  items added to the cart

let incrementItem = (id) => {
  let search = cart.find((data) => data.id === id);
  search.item += 1;
  updateCart(id);
  generateCartItems();
  items.innerHTML = cart.length;
  localStorage.setItem("data", JSON.stringify(cart));
};

// Remove item from the cart

let removeItem = (id) => {
  cart = cart.filter((data) => data.id !== id);
  items.innerHTML = cart.length;
  TotalAmount();
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
};

// update Cart items

let updateCart = (id) => {
  let search = cart.find((x) => x.id === id);
  document.getElementById(id).innerHTML = search.item;
  TotalAmount();
};

// calculate total items

let TotalAmount = () => {
  const Amount = cart
    .map((x) => {
      const search = smartMobilePhones.find((data) => data.id === x.id) || [];
      return x.item * search.price;
    })
    .reduce((x, y) => x + y, 0);
  label.innerHTML = `<div><h4>Total Bill:  ${Amount}</h4>
    <a href="#" id="back" style="background-color:#080">Checkout</a> 
    <a href="#" id="back" onclick="clearCart()" style="background-color:#c00">Clear cart</a>
    </div>`;
};
TotalAmount();

// Clear all items

let clearCart = () => {
  cart = [];
  items.innerHTML = cart.length;
  generateCartItems();
  localStorage.setItem("data", JSON.stringify(cart));
};
