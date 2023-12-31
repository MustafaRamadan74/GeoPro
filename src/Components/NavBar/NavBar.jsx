import React from 'react';
import logo from "../../images/logo-geopro.png";
import { Link } from 'react-router-dom';



export default function NavBar() {
  return <>

    <nav className="navbar navbar-expand bg-navbar fixed-top ">
      <div className="container  ">
        <div className="row w-100 align-items-center ">
          <div className="col-md-4 navimg ">
            <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand" to={"/"}><img className='w-100 navimginside' src={logo} alt="" /></Link>
          </div>
          <div className="col-md-8 ">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav  justify-content-end w-100">
                <Link onClick={()=>{window.scroll(0,0)}} className="nav-link px-4 fw-bold yelHover text-light fs-md-5 " aria-current="page" to={"/"}>Home</Link>
                <Link onClick={()=>{window.scroll(0,0)}} className="nav-link px-4 fw-bold yelHover text-light fs-md-5 " to={"/solutions"}>Solutions</Link>
                <Link onClick={()=>{window.scroll(0,0)}} className="nav-link px-4 fw-bold yelHover text-light fs-md-5 " to={"/Services"}>Services</Link>
                <Link onClick={()=>{window.scroll(0,0)}} className="nav-link px-4 fw-bold yelHover text-light fs-md-5 " to={"/About"}>About GeoPro</Link>
                <Link onClick={()=>{window.scroll(0,0)}} className="nav-link px-4 fw-bold yelHover text-light fs-md-5 " to={"/Contact"}>Contact Us</Link>
              </div>
            </div>
          </div>
        </div>


      </div>
    </nav>

  </>
}

