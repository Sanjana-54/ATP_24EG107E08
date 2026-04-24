import { reduceStock } from "./product.js";
import { getCartItems,getCartTotal,clearCart } from "./cart.js";
import { applyDiscount } from "./discount.js";


export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
const items=getCartItems();
const subtotal=getCartTotal();
// 2. Apply discount if coupon provided
let discount=0;
let total=subtotal;
if(couponCode){
    const discount_result=applyDiscount(subtotal,couponCode,items);
    discount=discount_result.discount;
    total=discount_result.finalTotal;
}
// 3. Validate payment method (card/upi/cod)
const valid=validatePaymentMethod(paymentMethod);
if(!valid){
    return{
        status:"failed",
        message:"Invalid payment method "
    }
}
// 4. Process payment (simulate)
const orderId=generateOrderId();
// 5. Reduce stock for all items
for(let i=0;i<items.length;i++){
    reduceStock(items[i].productId,items[i].quantity);
}
// 6. Clear cart
clearCart();
// 7. Generate order summary
return{
  orderId:orderId ,
  items: items,
  subtotal: subtotal,
  discount: discount,
  total: total,
  paymentMethod: paymentMethod,
  status: "success",
  message:"Payment successful!!"
 }
}
                          
export function validatePaymentMethod(method) {
   // Check if method is valid (card/upi/cod)
   const methods=["card","upi","cod"];
   return methods.includes(method);

}
                          
function generateOrderId() {
    // Generate random order ID
        return 'ORD' + Date.now();

}
