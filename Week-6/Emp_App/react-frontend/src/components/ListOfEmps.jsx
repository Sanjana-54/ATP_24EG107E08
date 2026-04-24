import { useState, useEffect } from "react";
import {useNavigate} from "react-router";
import axios from 'axios'

function ListOfEmps() {
  const [emps,setEmps]=useState([]);
  const navigate=useNavigate();

  const goToEmp=(empObj) =>{
    //navigate to /employee along with selected emp obj
    navigate("/employee",{state:empObj})
  }

  const goToEditEmp=(empObj) =>{
    //navigate to /edit-emp 
    navigate("/edit-emp",{state:empObj})
  }

  const delEmpById= async (id)=>{
    let res = await axios.delete(`https://emp-backend-yfoo.onrender.com/emp-api/employees/${id}`);
      if (res.status === 200) {
      
         let updatedRes = await axios.get("https://emp-backend-yfoo.onrender.com/emp-api/employees");
        setEmps(updatedRes.data.payload);
      }
    }

// GET ALL EMPS


  useEffect(() => {
    async function getEmps() {
      let res = await axios.get("https://emp-backend-yfoo.onrender.com/emp-api/employees");
      if (res.status === 200) {
        let resObj = res.data
        setEmps(res.data.payload);
      }
    }

    getEmps();
  }, []);
  return (
    <div className="max-w-6xl mx-auto px-4" >
      <h1 className="  text-cyan-800 text-2xl sm:text-3xl md:text-5xl text-center mb-4 font-bold">List of Employees</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {emps.map((empObj) => (
          <div key={empObj._id} className=" bg-white p-4 sm:p-5 text-center rounded-2xl shadow-2xl">
            <p>{empObj.email}</p>
            <p className="mb-4">{empObj.name}</p>
            {/* 3 BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-2">
              <button onClick={()=>goToEmp(empObj)} className="bg-pink-400 p-2 rounded-2xl">View</button>
              <button  onClick={()=>goToEditEmp(empObj)} className="bg-pink-400 p-2 rounded-2xl">Edit</button>
              <button onClick={()=>delEmpById(empObj._id)} className="bg-pink-400 p-2 rounded-2xl">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListOfEmps