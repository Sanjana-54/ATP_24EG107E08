/*ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system.*/

//     Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//TASKS:

// 1.filter() students who passed (marks ≥ 40)
const passedStudents=students.filter((stuObj)=>stuObj.marks>=40)
console.log("Students who passed are:",passedStudents)

/*2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D*/
const grades=students.map(stuObj=>{
    let grade;

    if (stuObj.marks>= 90) {
    grade = "A";
  } else if (stuObj.marks>= 75) {
    grade = "B";
  } else if (stuObj.marks>= 60) {
    grade = "C";
  } else {
    grade = "D";
  }
    return {
  id: stuObj.id,
  name: stuObj.name,
  marks: stuObj.marks,
  grade: grade

  }});
  console.log("Grade:",grades)     

// 3.reduce() to calculate average marks
const sum=students.reduce((acc,studObj)=>acc+studObj.marks,0)
const avg=sum/students.length
console.log("Averge marks:",avg)

// 4.find() the student who scored 92
const find=students.find((studObj)=>studObj.marks===92)
console.log("Student who scored 92:",find)

// 5.findIndex() of student "Kiran"
const findIndex=students.findIndex((studObj)=>studObj.name=='Kiran')
console.log("Index of student Kiran:",findIndex)