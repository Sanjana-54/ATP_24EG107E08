import {useState}  from 'react'
import {useForm} from 'react-hook-form'

function UserForm(){
    // State to store all users
    const[users,setUsers]=useState([]);
    // React Hook Form
    const {
        register, //to register form fields
        handleSubmit, //to handle for submission 
        formState:{errors}//to handle validation
    }=useForm();

    //form submit function
    const onFormSubmit=(obj)=>{
        // Check if user already exists using email
    const userExists = users.some(
      (user) => user.email.toLowerCase() === obj.email.toLowerCase()
    );

    // If duplicate user exists
    if (userExists) {
      alert("User with this email already exists!");
      return;
    }
        console.log(obj);
        setUsers([...users, obj]);
    }
    return(
        <div className="min-h-screen bg-gray-100 p-4">
          {/* Heading */}
            <h1 className='text-3xl text-cyan-800 font-bold text-center mt-2'>User Form</h1>
          {/* Form */}
        <form className="max-w-md mx-auto mt-4" onSubmit={handleSubmit(onFormSubmit)}>
             
             {/* Name */}
             <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input type="text" {...register("name",{
                    required:"Name required",
                    validate:(v)=>v.trim().length!==0|| "White space isn't valid"
                   
                })}
                id="name"
                className='border w-full p-3'></input>

                {/* FIRSTNAME VALIDATION ERROR MESSAGE */}
                {errors.name?.type==="required" && <p className='text-red-700'>{errors.name.message}</p>}
            </div>
             {/* Email */}
            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input type="text" {...register("email",{
                    required:"Email required",
                    validate:(v)=>v.trim().length!==0|| "White space isn't valid"
                 
                })}
                id="email"
                className='border w-full p-3'></input>

                {/* EMAIL VALIDATION ERROR MESSAGE */}
                {errors.email?.type==="required" && <p className='text-red-700'>{errors.email.message}</p>}
            </div>

           {/* Date of Birth */}
            <div className="mb-4">
                <label htmlFor="dateofbirth">Date of birth</label>
                <input type="date" {...register("dateofbirth",{
                    required:"Dateofbirth required",
                  })}
                id="dateofbirth"
                className='border w-full p-3'></input>
                {/* DOB VALIDATION ERROR MESSAGE */}
                {errors.dateofbirth?.type==="required" && <p className='text-red-700'>{errors.dateofbirth.message}</p>}
            </div>

             {/* Button */}
            <button type="submit" className="bg-pink-600 text-white px-5 py-3 rounded w-full mt-3">Add user</button>
        </form>
        {/* User List Heading */}
          <h1 className='text-3xl font-bold text-cyan-900 text-center mt-8'>List Of Users</h1>
          
          {/* Table to display List of Users */}
      <table className="border mx-auto text-center mt-5">
        <thead className="bg-cyan-700 text-white">
          <tr>
            <th className="border p-3">Name</th>
            <th className="border p-3">Email</th>
            <th className="border p-3">Date Of Birth</th>
          </tr>
        </thead>
        <tbody>
          {users.map((userObj, index) => (
            <tr key={index}>
              <td className="border p-3">{userObj.name}</td>
              <td className="border p-3">{userObj.email}</td>
              <td className="border p-3">{userObj.dateofbirth}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}
export default UserForm;