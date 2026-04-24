import Header from "./Header"
import Footer from "./Footer"
import { Outlet } from "react-router"
import { useEffect } from "react"
import { useAuth } from "../Store/AuthStore"

function RootLayout() {

  //import checkAuth
  let checkAuth=useAuth(state=>state.checkAuth)

  useEffect(()=>{
      checkAuth()
  },[])
  return (
    <div>
        <Header/>
        <div className="min-h-screen mx-20">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default RootLayout