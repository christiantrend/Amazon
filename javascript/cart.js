class Cart {
    constructor (){
        this.cartItems = JSON.parse(localStorage.getItem('cart'))
        || []
    }

    saveToStorage(){
        localStorage.setItem('cart',JSON.stringify(this.cartItems))
    }

    addToCart(object){
        console.log()
        let i = findItem(object.id, this.cartItems)
        console.log(findItem(object.id, this.cartItems))
        let item
        if (i){
            this.cartItems[i.index].quantity += Number(object.quantity)
        }
        else {
            this.cartItems.push(object)
        } 
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