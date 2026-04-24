import {getProductById, checkStock } from './product.js';
                          
let cartItems = [];
                          
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
    // 1. Get product details
    const prod_details=getProductById(productId)
    if(!prod_details){
      return "Product details not found"
    }

   // 2. Check stock availability
   const available=checkStock(productId, quantity)
   if(!available){
     return "Stock is not available";
   }
    // 3. Check if product already in cart
    const exist=cartItems.find((item)=>item.productId===productId)
    //    - If yes, update quantity
    if(exist){
        exist.quantity=exist.quantity+quantity;
    }
    //    - If no, add new item
    else{
        cartItems.push({
            productId: productId,
            name: prod_details.name,
            price: prod_details.price,
            quantity: quantity
        })
    }
    // 4. Return success/error message
    return "Product added to cart";
}
                          
export function removeFromCart(productId) {
    // Remove product from cart
    const idx=cartItems.findIndex(item=>item.productId===productId)
    if(idx!=-1){
        cartItems.splice(idx,1)
        return "Product removed from cart"
    }
    return "Product not found in cart"
    }
                          
export function updateQuantity(productId, newQuantity) {
    //find item in cart
    const item=cartItems.find(item=>item.productId===productId)
    //check if item exists
    if(!item){
        return "Product not found in cart"
    }
    //  Check stock before updating
    const available=checkStock(productId,newQuantity);
    if(!available){
        return "Stock not available"
    }
    // Update quantity of product in cart
    item.quantity=newQuantity
    return "Quantity updated successfully"
    }
                          
export function getCartItems() {
    // Return all cart items with product details
    return cartItems;
    }
                          
export function getCartTotal() {
    // Calculate total price of all items in cart
    return cartItems.reduce((total,item)=>{//used reduce to calculate total
        // Return total
        return total+(item.price*item.quantity)
    } ,0)
    }
                          
export function clearCart() {
    // Empty the cart
    cartItems=[];
    return "Cart cleared successfully"
    }
