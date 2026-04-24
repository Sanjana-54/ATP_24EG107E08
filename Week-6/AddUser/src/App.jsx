import { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/UserCount";

function App() {
    // State to store user count
    const [count,setCount]=useState(0);
    // Function to increase count
    const incrementUser=()=>{
        setCount((prev)=>prev+1);
    };
  return (
    <div className=" max-w-6xl mx-auto text-center p-6">
        {/* Title */}
        <h1 className="text-2xl font-bold">User Count</h1>

        {/* To display count */}
        <UserCount count={count}/>

        
        <Users onAddUser={incrementUser}/>
    </div>
  )
}

export default App