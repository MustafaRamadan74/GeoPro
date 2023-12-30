import React from 'react';
import { Link } from "react-router-dom";
import logo from "../../images/logo-geopro.png";

export default function About() {




  return <>

    <div className="container p-5 aboutDiv ">
      <div className="row">
        <div className="col-md-9">
          <ul>
            <li>GeoPro Is a full service Geographic Information System (GIS) consulting firm established in 2013.</li>
            <li>GeoPro provides GIS solutions and services to  local and international clients.</li>
            <li>GeoPro corporate headquarter is located in 6th of October, Giza, Egypt.</li>
            <li>GeoPro staff includes PMP certified Project Managers, GIS Application Developers, GIS Specialists and Surveyors.</li>
            <li>GeoPro programming staff maintains expertise in the customization, deployment and use of Esri technology. Our technical staff posses expertise in integrating applications using Esri software with industry-standard technologies.</li>
            <li>Geodatabase design and application development is the foundation of our information systems consultation and technical services. Our Senior Developers have extensive experience in designing and developing a full range of ArcSDE databases and related applications with varying size, complexity, and environment. The associated applications include stand alon solutions, mobile applications, and web-enabled interfaces.</li>
            <li>GeoPro is specialized in designing, developing, and deploying Enterprise GIS solutions for our clients .</li>
          </ul>
          <div className='bgMainColor container px-4 py-3 my-5 rounded'>
            <div className="row align-items-center aboutBottom">
              <div className="col-md-9">
                <p className='h5 '>Have any question ? </p>
                <p className='h5 '>a team of professionals is here to serve you</p>
              </div>
              <div className="col-md-3 aboutBottom">
                <div className="btn btn-dark ">
                  <Link onClick={()=>{window.scroll(0,0)}} className='linkDecoration text-white' to={"/Contact"}>Contact Us</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
        <div className="col-md-3 aboutLogo">
          <div className="navbar-brand "><img src={logo} alt="" /></div>


        </div>
      </div>
    </div>


  </>
}
