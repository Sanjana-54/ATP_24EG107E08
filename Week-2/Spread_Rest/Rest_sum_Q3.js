//Create a function findSum which can accept any number of arguments using REST parameter
const findSum=(...numbers)=>{
 return numbers.reduce((sum,ele)=>sum+ele)//used reduce() to calculate sum
}

//calling the function with 3 numbers
let sum1=findSum(10,20,30)
console.log(`Sum of given numbers:${sum1}`) //printing the result

//calling the function with 4 numbers
let sum2=findSum(10,20,30,40)
console.log(`Sum of given numbers:${sum2}`) //printing the result

