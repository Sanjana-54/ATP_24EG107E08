function NavBar(){
    return(
        <div className="flex justify-between items-center bg-gray-400 h-16 px-6 m-4 rounded-lg" >
            <h1 className="font-bold">LOGO</h1>
            <ul className="flex gap-6 items-center">
                <li>Home</li>
                <li>SignUp</li>
                <li>Login</li>
            </ul>
        </div>
    )
}

export default NavBar;