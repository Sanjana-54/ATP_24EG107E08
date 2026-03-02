/*Write a function that receives an array & search element as args and returns the index of 
that search element in the array. It should return "not found" when search element not found.*/
let a=[5,10,15,20]

function Search(a,key){
    for(i=0;i<a.length;i++){
        if(a[i]==key){
            return i
        }
    }
            return (`Not found`)
        }
console.log(Search(a,10))
console.log(Search(a,17))

