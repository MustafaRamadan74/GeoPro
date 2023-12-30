import React from 'react';
import logo from "../../images/logo-geopro.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return <>

    <div className="bg-navbar w-100 py-5 footerDiv ">
      <div className="container w-75">
        <div className="row">
          <div className="col-md-3 d-flex flex-column align-items-start ">
            <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-3 footerLogo " to={"/"}><img src={logo} alt="" /></Link>
            <p className='text-light py-3 '>GeoPro, Inc. provides GIS products and services to local and international clients.</p>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column align-items-start">
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-3" to={"/solutions"}><h3 className='fw-bolder text-light text-center'>Solutions</h3></Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"solutions/utilities"}>Utilities</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"solutions/landManagement"}>Land Management</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"solutions/communication"}>Communication</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"solutions/"}>Navigation & Mapping</Link>
            </div>
          </div>
          <div className="col-md-3">
            <div className="d-flex flex-column align-items-start">
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-3" to={"/Services"}><h3 className='fw-bolder text-light text-center'>Services</h3></Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/DigitalPhotogrammetry"}>Digital Photogrammetry</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/RemoteSensing"}>Remote Sensing</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/"}>Digitization</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/MunicipalGIS"}>Municipal GIS</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/GISDataCapture"}>GIS Data Capture</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/LidarDataProcessing"}>Lidar Data Processing</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/ParcelMapping"}>Parcel Mapping</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/IndoorMapping"}>Indoor Mapping</Link>
              <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-1 yelHover text-light text-center" to={"Services/Building3DLandmarks"}>Building 3D Landmarks</Link>
            </div>
          </div>
          <div className="col-md-3 d-flex flex-column align-items-start ">
            <Link onClick={()=>{window.scroll(0,0)}} className="navbar-brand py-3" to={"/Contact"}><h3 className='fw-bolder text-light text-center'>Contacts</h3></Link>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-location-dot text-light px-2 mb-3"></i>
              <p className='text-light px-2'>33 El-Shaikh Ahmed El-Sawy , Makram Ebeid , Nasr City , Cairo , Egypt</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-phone-volume text-light px-2 mb-3"></i>
              <p className='text-light px-2'>+201000812168</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-envelope text-light px-2 mb-3"></i>
              <p className='text-light px-2'>inf@geopro.org</p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <i className="fa-solid fa-globe text-light px-2 mb-3"></i>
              <p className='text-light px-2'>www.geopro.org</p>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-3">
              <Link className='' target='__blank' to={"https://www.facebook.com/GeoProGISServices"}><i class="yelHover fa-brands text-light fa-2x px-2 fa-square-facebook"></i></Link>
              <Link className='' target='__blank' to={"https://www.linkedin.com/company/geopro-gisservices/mycompany/"}><i class="yelHover fa-brands text-light fa-2x px-2 fa-linkedin"></i></Link>
              <Link className='' target='__blank' to={"https://www.youtube.com/"}><i class="yelHover fa-brands fa-2x px-2 text-light fa-youtube"></i></Link>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>
}
