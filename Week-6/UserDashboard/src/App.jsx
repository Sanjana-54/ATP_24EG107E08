import { useState } from "react";
import Users from "./components/Users";
import UserCount from "./components/UserCount";

function App() {
    // State to store user count
    const [count,setCount]=useState(0);

    // State to store added users
    const [addedUsers,setAddedUsers]=useState([]);

     // State to store message
    const [message, setMessage] = useState("");

    // Function to add user
    const incrementUser=(user)=>{

      // Check if user already added
        let exists=addedUsers.includes(user.id);

        // If already exists
        if(exists){
            setMessage("User already added!");
            return;
        }
      
         // Add user id
        setAddedUsers((prev)=>[...prev,user.id]);

        // Increase count
        setCount((prev)=>prev+1);

        // Success message
        setMessage(`${user.name} added successfully`);
    };
  return (
    <div className= "min-h-screen max-w-6xl mx-auto text-center p-6">
       
        {/* Title */}
        <h1 className="text-2xl font-bold">User Count</h1>

        {/* To display count */}
        <UserCount count={count}/>

        {/* Message */}
        {message && (
        <p className="mt-3 text-emerald-700 font-medium bg-white w-fit mx-auto px-4 py-2 rounded-xl shadow">
        {message}
        </p>
)}

         {/* User cards */}
        <Users onAddUser={incrementUser}/>
    </div>
  )
}

export default App;