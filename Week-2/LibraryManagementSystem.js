//Created a class with the given properties
class Book{
    title;
    author; 
    pages;
    isAvailable;
      
    //constructor to initialize book details
    constructor(title,author,pages,isAvailable=true){
      this.title=title;
      this.author=author; 
      this.pages=pages;
      this.isAvailable=isAvailable;
      }
      //Method to borrow book
    borrow(){
         this.isAvailable=false;   
      }
      //Method to return book
    returnBook(){
          this.isAvailable=true;
      }
      //Method to get info of books
    getInfo(){
        return(`${this.title} is a book by ${this.author} with ${this.pages} pages`);
      }
      //Method to check whether a given book is long or not
    isLongBook(){
       return this.pages>300;
        }
      }


 /*1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.*/
let b1=new Book(`Titanic`,'Caspain',250);
let b2=new Book(`Harry potter`,`Thomas`,350);
let b3=new Book(`Haunted House`,'Jack',25);
let b4=new Book(`1984`,'Peter',152);
let b5=new Book(`Hobbit`,'John',225);
 
let library=[b1,b2,b3,b4,b5]; //Storing all objects in a array

//2. Perform the following operations:

    //i. Display info of all books
  console.log("Info Of All Books:")
   for(let i=0;i<library.length;i++){
    console.log(library[i].getInfo());
   }

    //ii. Borrow 2 books and show their availability status
    console.log("\nBorrowed books:");
    b1.borrow();
    b3.borrow();

    console.log(b1.title,"Available:",b1.isAvailable );
    console.log(b3.title,"Available:",b3.isAvailable );
    
    
    //iii. Return 1 book and show updated status
    console.log("\nAfter returning a book:");
      b1.returnBook();
      console.log(b1.title,"Available:",b1.isAvailable);


      //iv. Count how many books are "long books" (more than 300 pages)
      let count=0;
      for(let book of library){
        if(book.isLongBook()){
          count++;
        }
      }
      console.log("\nBooks with pages more than 300:",count)

      //v. List all available books
      console.log("\nAvailable books are:");
      for(let b of library){
        if(b.isAvailable){
          console.log(b.getInfo());
        }
      }
