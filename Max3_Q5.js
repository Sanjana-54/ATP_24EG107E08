// Write a function that receives 3 number args and  return the big number 
let test=function rbig(a,b,c){
    if(a>b && a>c){
        return a
    }
    else if(b>a && b>c){
    return b
}
else{
    return c
}
}
console.log(test(10,25,15))