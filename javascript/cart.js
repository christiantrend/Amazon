class Cart {
    constructor (){
        this.cartItems = JSON.parse(localStorage.getItem('cart'))
        || []
    }

    saveToStorage(){
        localStorage.setItem('cart',JSON.stringify(this.cartItems))
    }

    addToCart(object){
        this.cartItems.push(object)
        this.saveToStorage()
    }

    romoveFromCart(){
        this.cartItems.splice(indexe,1)
        this.saveToStorage()
    }
}

export let cart = new Cart;

export function findItem(id, object){
    let found
    object.forEach((element,index) => {
        if (id === element.id){
            found = {element, index}
        }
    });
    return found;
}