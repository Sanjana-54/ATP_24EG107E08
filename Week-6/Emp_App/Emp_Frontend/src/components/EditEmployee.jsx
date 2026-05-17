import { useEffect } from 'react';
import {useForm} from 'react-hook-form'
import { useLocation ,useNavigate} from 'react-router';
import axios from 'axios'


function EditEmployee() {
  const {register,
        handleSubmit,
        setValue,
        formState:{errors},
    }=useForm();

    const navigate=useNavigate();
// GET EMP OBJ FROM NAVIGATE HOOK
const {state}=useLocation();

useEffect(()=>{
  if(state){
  setValue("name",state.name);
  setValue("email",state.email);
  setValue("mobile",state.mobile);
  setValue("designation",state.designation);
  setValue("companyName",state.companyName);
  }
},[state])

const saveModifiedEmp=async (modifiedEmp)=>{
  // MAKE HTTP REQ
  const res=await axios.put(`https://emp-backend-yfoo.onrender.com/emp-api/employees/${state._id}`,modifiedEmp)
  if (res.status===200){
    navigate("/list");
  }
}

  return (
    <div>
    <h1 className='text-2xl sm:text-3xl md:text-5xl text-cyan-800 font-bold text-center'>Edit Employee</h1>
    <form  className="max-w-md mx-auto mt-10 px-4" onSubmit={handleSubmit(saveModifiedEmp)}>
        <div>
            <input type="text" 
            placeholder="Enter name"
            {...register("name",{
                    required:"name required",
                    validate:(v)=>v.trim().length!==0|| "White space isn't valid"
                   
            })}
            className="mb-3 border-2 p-3 w-full rounded-2xl"></input>
            {errors.name?.type==="required" && <p className='text-red-700'>{errors.name.message}</p>}
        </div>
        <div>
                <input type="text"
                placeholder="Enter Email "
                {...register("email",{
                    required:"email required",
                    validate:(v)=>v.trim().length!==0|| "White space isn't valid",
                 })}
                className='mb-3 border-2 p-3 w-full rounded-2xl'></input>
                {errors.email?.type==="required" && <p className='text-red-700'>{errors.email.message}</p>}
        </div>
        <div>
                
                <input type="number"
                 placeholder="Enter mobile number"
                {...register("mobile",{
                    required:"mobile number required",
                    //validate:(v)=>v.trim().length!==0|| "White space isn't valid"
                 
                })}
                className='mb-3 border-2 p-3 w-full rounded-2xl'></input>
                
                {errors.mobile?.type==="required" && <p className='text-red-700'>{errors.mobile.message}</p>}
        </div>
        <div>
                
                <input type="text" 
                placeholder="Enter designation"
                {...register("designation",{
                    required:"designation required",
                    validate:(v)=>v.trim().length!==0|| "White space isn't valid"
                   
                })}
                className='mb-3 border-2 p-3 w-full rounded-2xl'></input>

               
                {/*{errors.designation?.type==="required" && <p className='text-red-700'>{errors.desgination.message}</p>}*/}
        </div>
        <div>
                
                <input type="text" 
                 placeholder="Enter name of the company"
                {...register("companyName",{
                    required:"companyName required",
                    validate:(v)=>v.trim().length!==0|| "White space isn't valid"
                   
                })}
                className='mb-3 border-2 p-3 w-full rounded-2xl'></input>

               
                {errors.companyName?.type==="required" && <p className='text-red-700'>{errors.companyName.message}</p>}
        </div>
            <button type="submit" className=' p-3 bg-green-600 mt-3 text-white w-full rounded-xl'> Save </button>
        </form>
   </div>
  )
}

export default EditEmployee;