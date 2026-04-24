function Header(){
    return(
        <div className="flex justify-between items-center bg-white shadow p-4 m-4 rounded-lg">
            <div className="flex items-center gap-4">
            <ul className="flex gap-6 text-sm">
                <li>Home</li>
                <li>About Author</li>
                <li>About This Project</li>
            </ul>
        </div>
       
         <ul className="flex gap-4 text-gray-600">
            <li>github</li>
            <li>mail</li>
            <li>in</li>
         </ul>
    </div>
    )
}

export default Header;