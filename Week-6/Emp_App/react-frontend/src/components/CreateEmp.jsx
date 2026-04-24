import {useForm} from "react-hook-form"
import {useState} from 'react'
import {useNavigate} from "react-router"
import { useContext } from "react"


function CreateEmp() {

     const [loading, setLoading] = useState(false);
     const [error, setError] = useState("");
     const navigate = useNavigate();

     const {register,
        handleSubmit,
        formState:{errors}
    }=useForm();

  // FORM SUBMIT  
const onFormSubmit=async (newEmpObj)=>{
    try{
        setLoading(true);
        // MAKE HTTP POST REQUEST
        let res= await fetch ("https://emp-backend-yfoo.onrender.com/emp-api/employees",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEmpObj),
        });
        if (res.status === 201) {
        //navigate to employees component programatically
        navigate("/list");
      } else {
        let errorRes = await res.json();
        console.log("error response is ", errorRes);
        throw new Error(errorRes.reason);
      }
    } catch (err) {
      console.log("err in catch", err);
      //deal with err
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
    //console.log(error);

  if (loading) {
    return <p className="text-center text-4xl">Loading....</p>;
  }
  if (error) {
    return <p className="text-red-500 text-center text-3xl">{error}</p>;
  }
       
 return (
   <div>
    <h1 className='text-2xl sm:text-3xl md:text-5xl text-cyan-800 font-bold text-center'>Create New Employee</h1>
    <form  className="max-w-md mx-auto mt-10 px-4" onSubmit={handleSubmit(onFormSubmit)} >
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
                    validate:(v)=>v.trim().length!==0|| "White space isn't valid"
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
            <button type="submit" className='p-3 bg-pink-600 mt-3 w-full rounded-xl '>Add Emp</button>
        </form>
   </div>
  );
}

export default CreateEmp