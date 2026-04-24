//given object
const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
    city: "Hyderabad",
    pincode: 500085
    }
  },
    items: [
     { product: "Laptop", price: 70000 }
      ]
};

//Task:

 //1. Create a deep copy of order
let dc=structuredClone(order) //used structuredClone() to make a deep copy

 //2. Modify in copied object:

    // i. customer.address.city
dc.customer.address.city="Delhi"

 // ii. items[0].price
dc.items[0].price=80000;

// iii. Verify original object remains unchanged
console.log(order) //original object
console.log(dc)  // modified object