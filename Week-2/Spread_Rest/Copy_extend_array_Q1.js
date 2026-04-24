//Given array of fruits
let fruits= ["apple", "banana"]
          //Tasks

// -> Create a new array moreFruits &  Copy all fruits from fruits
let moreFruits=[...fruits];

//-> Add "orange" at the end using spread
moreFruits = [...moreFruits,"orange"]

//-> Print both arrays
console.log(fruits);//Original array
console.log(moreFruits);//Modified array