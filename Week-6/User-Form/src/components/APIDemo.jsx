import {useEffect,useState} from "react";

function APIDemo(){
   /* let [count,setCount]=useState(10);
    const ChangeCount=()=>{
        setCount(count+1);
    }*/
    /*useEffect(()=>{
        console.log("use effect rendered")
    },[])*/
    console.log("API demo rendered")
    let [users,setUsers]=useState([]);
    let [loading,setLoading]=useState(false);
    let[error,setError]=useState(null)

    useEffect(()=>{

        async function getData(){
            //set loading to true
            setLoading(true);
            try{
                let res=await fetch ("https://jsonplaceholder.typicode.com/comments")
                let usersList=await res.json();
                //update state
                setUsers(usersList)
            }catch(err){
                console.log("err is",err);
                //update error state
                setError(err);
            }finally{
            //
            setLoading(false)
        }
        }


        getData();
    },[]);

    if(loading){
                return <p className="text-6xl text-center">Loading.....</p>
    }
    if(error){
        return <p className="text-4xl text-center">{err.message}</p>
    }

return(
    <div className="" >
        <h1 className="text-5xl text-cyan-950 text-center">List Of Users</h1>
        <div className="grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
       {users.map((userObj) => (
        <div key={userObj.id}>
            <p>{userObj.name}</p>
            <p>{userObj.email}</p>
         </div>
       ))}
        </div>
      </div>
      )
    }

    export default APIDemo;