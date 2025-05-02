import { products } from '../data/products.js';

function generateHtml(){
    let gridElem = document.querySelector('.item-grid-area')
    let gridhtml =''
    products.forEach((product)=>{
    gridhtml += `<div class="item-container">
                <img src="./${product.image}" alt="product" class="product-image">
                <p class="name">${product.name}</p>
                <div class="product-detail">
                    <div class="item-properties">
                            <img src="./images/ratings/rating-${(product.rating.stars)*10}.png" alt="rated ${product.rating.stars}" class="ratings-image">
                            <p class="number-of-ratings">${product.rating.count}</p>
                        </div>

                        <p class="items-in-cart">0 : in art</p>

                        <select name="number-of-items" id="number-of-items">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>
                </div>
                <div class="price-and-buy">
                    <div class="adding-to-cart">
                        <p class="added-animation"><img src="./images/icons/checkmark.png" alt="check mark"> Added</p>
                        <p class="price-cents">${(product.priceCents/100).toFixed(2)}</p>
                    </div>
                    <p><button class="add-to-cart-button">Add to Cart</button></p>
                </div>
            </div>`
    })

    gridElem.innerHTML = gridhtml;
}

generateHtml()