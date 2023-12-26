import React from 'react'
import NavBar from '../NavBar/NavBar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout() {
  return <>



    <NavBar></NavBar>
    <div className='py-5'>
      <div className="container my-5">
        <Outlet></Outlet>
      </div>
    </div>
    <Footer></Footer>





  </>
}
