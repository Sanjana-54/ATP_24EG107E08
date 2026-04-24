const coupons = {
        'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
        'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
        'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
// TODO: Implement these functions
export function validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if coupon exists
const coupon=coupons[couponCode];
if(!coupon){
    return {valid:false,meassage:"Coupon does not exist"};
}
// 2. Check minimum amount requirement
if(cartTotal<coupon.minAmount){
    return {valid:false,meassage:"Minimum amount not required"};
}
// 3. Check category requirement (if any)
if(coupon.category){
    const filteredItems=cartItems.filter(item=>item.category===coupon.category);
    if(filteredItems.length===0){
        return {valid:false,message:"Coupon valid only for specific category"}
    }
}
return {valid:true,message:"Coupon is valid"}
}
                          
export function calculateDiscount(couponCode, cartTotal) {
// Calculate discount amount based on coupon type
const coupon=coupons[couponCode];
if(coupon.type==="percenatage"){
    return (cartTotal * coupon.value)/100;
}
if(coupon.type==="flat"){
    return coupon.value;
}
// Return discount amount
return 0;
}                     
                          
export function applyDiscount(cartTotal, couponCode, cartItems) {
// 1. Validate coupon
const validation=validateCoupon(couponCode,cartTotal,cartItems);
if(!validation.valid){
    return{
     originalTotal: cartTotal,
     discount: 0,
     finalTotal: cartTotal,
     message: validation.message
    };
}
// 2. If valid, calculate discount
const discount=calculateDiscount(couponCode,cartTotal)
const finalTotal=cartTotal-discount;
// 3. Return final amount and discount details
  return { 
    originalTotal:cartTotal, 
    discount: discount, 
    finalTotal: finalTotal,
    message: 'Discount applied'
     }
}
