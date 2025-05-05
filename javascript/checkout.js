import {cart, findItem} from './cart.js';
import { products } from './products.js';

function generateHtml(){
    let itemElem = document.querySelector('.cart-items')
    let html = ''
    cart.cartItems.forEach(item => {
        let product = findItem(item.id, products).element
        html +=`<div class="order-item">
                    <h2>delivery date: Tuesday, June 21</h2>
                    <div class="product-container">
                        <div class="product-details">
                            <img src="./${product.image}" alt="product-iage" class="product-image">
                            <div class="details">
                                <h3>${product.name}</h3>
                                <p class="price">$${(product.priceCents).toFixed(2)}</p>
                                <div class="edit-order">
                                    <p>quantity: ${item.quantity}</p>
                                    <button>Update</button>
                                    <button>Delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="delivery-options">
                            <h3>Choose a delivery date: </h3>
                            <div class="date">
                                <input type="radio" name="delivery-date" id="">
                                <label for="1"><h3>Tuesday, june 21</h3> <P>Free Shipping</P></label>
                            </div>
                            <div class="date">
                                <input type="radio" name="delivery-date" id="">
                                <label for="1"><h3>Monday, june 21</h3> <P>$9.99 - Shipping</P></label>
                            </div>
                            <div class="date">
                                <input type="radio" name="delivery-date" id="">
                                <label for="1"><h3>Wednesday, june 15</h3> <P>$4.99 - Shipping</P></label>
                            </div>
                        </div>
                    </div>
                </div>`
    });
    itemElem.innerHTML = html
    console.log(itemElem.innerHTML)
}

generateHtml()