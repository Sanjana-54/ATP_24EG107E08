/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.*/

  //Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

// TASKS:

    // 1. filter() employees from IT department
    const dept=employees.filter((empObj)=>empObj.department==="IT")
    console.log("Employees from IT department:",dept)

    /*2. map() to add:
            netSalary = salary + 10% bonus*/
    const updated=employees.map((empObj)=>{
      const bonus=empObj.salary*0.10;
      return{
        id:empObj.id,
        name:empObj.name,
        salary:empObj.salary,
        department:empObj.department,
        netSalary:empObj.salary+bonus,
      };
     });
     console.log("Employees with netsalary:",updated)

    //3. reduce() to calculate total salary payout
     const totalSalary=employees.reduce((acc,empObj)=>acc+empObj.salary,0)
     console.log("Total Salary Payout:",totalSalary)

    //4. find() employee with salary 30000
     const salary=employees.find((empObj)=>empObj.salary===30000)
    console.log("Employee with salary 30000:",salary)
    
    //5. findIndex() of employee "Neha"
    const idx=employees.findIndex((empObj)=>empObj.name==='Neha')
     console.log("Index of employee Neha:",idx)


