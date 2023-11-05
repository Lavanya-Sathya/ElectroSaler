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
        const { id, name, price, img, descp } = cartMobiles;
        return `<div class="cartHeader">
                    <img src=${img} alt=${name} />
                    <div class="cartDiv"> 
                        <div class="name_remove">
                            <h5>${name}</h5>
                        </div>
                        <span class="price">Rs ${price}</span>
                        
                        <div class="ItemNo">
                            <i class="fa-solid fa-minus" style="color: #a12a0c;"></i>
                            <span id="ItemTotal">${cartItems.item}</span>
                            <i class="fa-solid fa-plus" style="color: #09711b;"></i>
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
