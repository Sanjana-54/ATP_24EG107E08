import exp from "express"
import {EmpModel} from "../models/empModel.js"


export const empApp=exp.Router()

// CREATE EMP
empApp.post("/employees", async (req, res) => {
  const newEmp = req.body;
  const empDoc = new EmpModel(newEmp);
  await empDoc.save();
  res.status(201).json({ message: "Emp created" });
});

//READ ALL EMPS
empApp.get("/employees", async (req, res) => {
  let empList = await EmpModel.find();
  res.status(200).json({ message: "list of employees", payload: empList });
});

//UPDATE EMP ID
empApp.put("/employees/:id", async (req, res) => {
  const modifiedEmp = req.body;
  //find and update
  let updatedEmp = await EmpModel.findByIdAndUpdate(
    req.params.id,
    {
      $set: { ...modifiedEmp },
    },
    { returnDocument: "after" },
  );
  if (!updatedEmp) {
    return res.status(404).json({ message: "employee not found" });
  }
  res.status(200).json({ message: "employee updated", payload: updatedEmp });
});

// DELETE EMP BY ID
empApp.delete("/employees/:id", async (req, res) => {
  let deletedEmp = await EmpModel.findByIdAndDelete(req.params.id);
  if (!deletedEmp) {
    return res.status(404).json({ message: "employee not found" });
  }
  res.status(200).json({ message: "employee deleted", payload: deletedEmp });
});







