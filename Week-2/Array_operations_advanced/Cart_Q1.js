/*ASSIGNMENT 1:
-------------
You are building a shopping cart summary for an e-commerce website.*/

//Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// TASKS:
   
// 1.filter() to get only inStock products
let prod=cart.filter((cartObj)=>cartObj.inStock);
console.log("Instock Products are :",prod);

// 2.map() to create a new array with:  { name, totalPrice }
let new_arr=cart.map(cartObj=>({
  name:cartObj.name,
  totalPrice :(cartObj.price*cartObj.quantity)
}));
console.log("New array with name & totalPrice:");
console.log(new_arr);

// 3.Use reduce() to calculate grand total cart value
let total=cart.reduce((acc,cartObj)=>acc+(cartObj.price*cartObj.quantity),0);
console.log("Grand Total Cart Value:",total);

// 4.Use find() to get details of "Mouse"
let mouse=cart.find((cartObj)=>cartObj.name==='Mouse');
console.log("Mouse details:",mouse);

// 5.Use findIndex() to find the position of "Keyboard"
let idx=cart.findIndex((cartObj)=>cartObj.name==="Keyboard");
console.log("Index of Keyboard is:",idx);