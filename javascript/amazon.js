import { products } from '../data/products.js';
import { cart, findItem } from './cart.js';

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
                        <p class="added-animation"><img src="./images/icons/checkmark.png" alt="check mark" class= 'js-added'> Added</p>
                        <p class="price-cents">${(product.priceCents/100).toFixed(2)}</p>
                    </div>
                    <p><button class="add-to-cart-button" data-product-id = '${product.id}'>Add to Cart</button></p>
                </div>
            </div>`
    })

    gridElem.innerHTML = gridhtml;
}

function addingToCart(){
    let buttonElem = document.querySelectorAll('.add-to-cart-button');
    let quantity = document.querySelectorAll('#number-of-items')
    
    buttonElem.forEach((button,index)=>{
        button.addEventListener('click', ()=>{
            let id = button.dataset.productId
            let product=findItem(id, products).element

            let cartObject = {
                id : product.id,
                name : product.name,
                quantity:quantity[index].value,
                deliveryOption: 1
            }
            cart.addToCart(cartObject)
            animatOnClick(index)
        
        })
    })
    
}

function animatOnClick(index){
    let elem = document.querySelectorAll('.added-animation')
    elem[index].style.opacity = '1'
    let max = 1
    setInterval(()=>{
        elem[index].style.opacity = max
        max -= 0.009
        console.log(max)
    }, 40)
}
generateHtml()
addingToCart()

