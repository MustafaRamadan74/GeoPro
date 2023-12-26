import React from 'react';
import { Link } from "react-router-dom";
export default function Contact() {
  return <>

    <div className="container w-75 my-5 py-5 contactDiv">
      <div className="customShadow ">
        <div className=" bg-muted px-5 py-4 contactDiv">
          <div className="py-2 border-bottom border-dark d-flex justify-content-start align-items-center">
            <i className="fa-solid fa-location-dot text-light h5 px-2 mx-2"></i>
            <p className='text-light h5 px-2'>33 El-Shaikh Ahmed El-Sawy , Makram Ebeid , Nasr City , Cairo , Egypt</p>
          </div>
          <div className="py-2 border-bottom border-dark d-flex justify-content-start align-items-center">
            <i className="fa-solid fa-phone-volume text-light h5 px-2 mx-2"></i>
            <p className='text-light h5 px-2'>+201000812168</p>
          </div>
          <div className="py-2 border-bottom border-dark d-flex justify-content-start align-items-center">
            <i className="fa-solid fa-envelope text-light h5 px-2 mx-2"></i>
            <p className='text-light h5 px-2'>inf@geopro.org</p>
          </div>
          <div className="py-2 border-bottom border-dark d-flex justify-content-start align-items-center">
            <i className="fa-solid fa-globe text-light h5 px-2 mx-2"></i>
            <p className='text-light h5 px-2'>www.geopro.org</p>
          </div>
          <div className="py-2 d-flex justify-content-center align-items-center mt-3">
            <Link className='' target='__blank' to={"https://www.facebook.com/GeoProGISServices"}><i class="yelHover fa-brands text-light fa-2x px-2 fa-square-facebook"></i></Link>
            <Link className='' target='__blank' to={"https://www.linkedin.com/company/geopro-gisservices/mycompany/"}><i class="yelHover fa-brands text-light fa-2x px-2 fa-linkedin"></i></Link>
            <Link className='' target='__blank' to={"https://www.youtube.com/"}><i class="yelHover fa-brands text-light fa-2x px-2 fa-youtube"></i></Link>
          </div>
        </div>
      </div>
    </div>

  </>
}
