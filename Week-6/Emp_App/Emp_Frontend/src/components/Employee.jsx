import { useLocation } from "react-router"

function Employee() {

  const {state}=useLocation();
  return (
    <div className="p-16 text-center text-2xl space-y-4 text-fuchsia-950">
      <h1 className="text-center text-3xl font-extrabold text-shadow-fuchsia-800">Details of Employee</h1>
      <div className="max-w-md mx-auto space-y-3">
          <p className="font-semibold">Name:{state.name}</p>
          <p className="font-semibold">Email:{state.email}</p>
           <p className="font-semibold">MobileNo:{state.mobile}</p>
          <p className="font-semibold">Designation:{state.designation}</p>
        
          <p className="font-semibold">Company Name:{state.companyName}</p>
       </div>
    </div>
  )
}

export default Employee