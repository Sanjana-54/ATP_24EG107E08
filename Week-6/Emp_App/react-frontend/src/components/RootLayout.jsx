import Header from './Header'
import {Outlet} from 'react-router'

function RootLayout() {
  return (
    <div>
        <Header/>
        <div className='min-h-screen mx-0 sm:mx-5 md:mx-10 lg:mx-20 p-20'>
          <Outlet/>
        </div>
    </div>
  
  )
}

export default RootLayout