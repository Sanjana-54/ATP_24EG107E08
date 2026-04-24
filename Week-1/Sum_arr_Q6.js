//Write a function that receives an array as arg and return their sum
let a=[8,17,20,81]

function Sum(a){
    let sum=0
    for(i=0;i<a.length;i++){
        sum=sum+a[i]
    }
    return sum
}

console.log(`Sum is ${Sum(a)}`);