/*ASSIGNMENT 4: 
------------
Movie Streaming Platform

You are working on a movie recommendation system.*/

//Test data:
const movies = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// Tasks:

    //1. filter() only "Sci-Fi" movies
    const scifi=movies.filter((movObj)=>movObj.genre==="Sci-Fi")
    console.log("Movies with Sci-Fi genre:",scifi)

    /*2. map() to return:
            "Inception (8.8)"*/
    const mov=movies.map(movObj=>{
      return (`${movObj.title} (${movObj.rating})`);
      });
      console.log("Movie titles and ratings:",mov)

    //3. reduce() to find average movie rating
    const sum=movies.reduce((acc,movObj)=>acc+movObj.rating,0)
    const avg=sum/movies.length
    console.log("Average movie rating:",avg)

    //4. find() movie "Joker"
    const movie=movies.find((movObj)=>movObj.title==="Joker")
    console.log("Found:",movie)

    //5. findIndex() of "Avengers"
    const idx=movies.findIndex((movObj)=>movObj.title=="Avengers")
     console.log("Index of movie Avengers:",idx)


    







