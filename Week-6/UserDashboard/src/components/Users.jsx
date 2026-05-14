import { useEffect,useState } from "react"
import UserCard from "./UserCard"

function Users({onAddUser}) {
    //State to store users from API
    const [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        // Fetch data from API
        async function getData() {
            setLoading(true);
            try{
                let res=await fetch("https://jsonplaceholder.typicode.com/users")
                let data=await res.json();
                setUsers(data);
            }catch(err){
                console.log("Error is:",err);
                // Store error
                setError(err);
            }finally{
                setLoading(false);
            }
        }
        getData();
    },[]);
    if(loading){
        return <h3 className="text-center">Loading...</h3>
    }
    if(error){
        return <h3 className="text-red-600 text-center" >{error.message}</h3>
    }      
    
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {users.map((user)=>(
           <UserCard
           key={user.id}
           user={user}
           onAddUser={onAddUser} 
           />
        )
        )}
    </div>
  )
}

export default Users;