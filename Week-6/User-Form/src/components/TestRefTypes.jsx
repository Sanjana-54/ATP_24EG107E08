import {useState} from "react";

const [user,setUser]=useState({username:"khushi",age:20,city:"hyd"});
const [marks,setMarks]=useState([10,20,30]);

//update user state
const updateUser =() =>{
    setUser({...user,username:"bhanu",age:22});
};

//update marks
const updateMarks =() =>{
    setMarks([40,...marks]);
};
<div>
<p className="text-3xl">Username:{user.username}</p>
<p className="text-3xl">Age:{user.age}</p>
<p className="text-3xl">City:{user.city}</p>
</div>