import {useForm} from 'react-hook-form'
function FormDemo(){
    const {
        register, //to register form fields
        handleSubmit, //to handle for submission
        formState:{errors} //to handle validation
    }=useForm()

    //form submit fn
    const onFormSubmit=(obj)=>{
        console.log(obj);
    }
    return(
<div>
    <h1 className='text-4xl text-green-900 text-center font-bold mt-10'>Form Demo</h1>
             <form className="max-w-md mx-auto mt-10 " onSubmit={handleSubmit(onFormSubmit)}>
        <div>
            <label htmlFor="username">Username</label>
                <input type="text" {...register("username",{
                    required:"Username required",
                    validate:(v)=>v.trim().length===0|| "White space isn't valid"
                   //minLength:4
                })}
                id="username"
                className='border w-full p-3'></input>

                {/* USERNAME VALIDATION ERROR MESSAGE */}
                {errors.username?.type==="required" && <p className='text-red-700'>{errors.username.message}</p>}

                {errors.username?.type==="required" && <p className='text-red-700'>{errors}</p>}
        </div>
    </form>
</div>
    )

}
export default FormDemo;