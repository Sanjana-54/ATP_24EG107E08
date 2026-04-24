function User(props){
    let {userObj}=props;
    return(
          <div className="border p-4 rounded-lg text-center shadow">
            <img src={userObj.image} alt="image unavailable" className="w-20 h-20 mx-auto  mt-5"/>
            <h2 className="mt-2 font-semibold">{userObj.name}</h2>
            <p className="text-sm ">{userObj.email}</p>
            <button className="mt-2 px-3 py-1 bg-blue-500 text-white rounded">Profile</button>
          </div>
    )
}
export default User;