/*Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"*/

    //List of courses
    const courses = ["javascript", "react", "node", "mongodb", "express"];

    //  1.filter() courses with name length > 5
    let l=courses.filter((course)=>course.length>5);
    console.log("Courses with name length greater than 5 are:",l);

    //  2.map() to convert course names to uppercase
    let convert=courses.map((course)=>course.toUpperCase());
    console.log("Course names converted to uppercase are:",convert);

    /*  3.reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"*/
    let single_string = courses.map(course=>course.toUpperCase()).reduce((acc, course)=>acc+" | "+course);
    console.log("Single string:",single_string)

    //  4.find() the course "react"
    let find=courses.find(course=>course==='react')
    console.log("Found Course:",find)

    //  5.findIndex() of "node"*/
    let index=courses.findIndex(course=>course==="node")
    console.log("Index of Node is:",index)