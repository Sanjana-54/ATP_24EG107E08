import { useContext } from "react";
import { counterContextObj } from "./context/ContextProvider";

function Home() {

  const { changeCounter } = useContext(counterContextObj);

  return (
    <div className='text-cyan-800 text-center mt-20 px-4'>

      <h1 className='text-3xl sm:text-5xl md:text-6xl mb-4 font-bold'>
        Employee Management
      </h1>

      <p className='text-lg sm:text-xl md:text-2xl'>
        This website contains all the details of Employees
      </p>

<button
  onClick={changeCounter}
  className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
>
   Click To Increment
</button>

    </div>
  )
}

export default Home;