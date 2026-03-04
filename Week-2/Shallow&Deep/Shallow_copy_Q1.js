const user = {
  id: 101,
  name: "Ravi",
  preferences: {
      theme: "dark",
      language: "en"
      }
};

//Tasks:

// 1. Create a shallow copy of user
let sc={...user}

//  2. Change:
  
//i. name in the copied object
sc.name=`Khushi`

//ii. preferences.theme in the copied object
sc.preferences.theme=`humour`

//iii .Log both original and copied objects
console.log(user) //original object
console.log(sc) //modified object
