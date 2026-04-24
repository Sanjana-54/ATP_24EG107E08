//Given object
let user = {
         name: "Ravi",
        city: "Hyderabad"
             };
//Tasks

// Create a new object updatedUser & Copy all properties from user
let updatedUser={...user};

//Add a new property age: 25
updatedUser={...updatedUser,age:25};

//Print both objects
console.log(user) //Original object
console.log(updatedUser) //Updated object
