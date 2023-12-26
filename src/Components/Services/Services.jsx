import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return <>

    <div className="row py-5 servicesSection">

      <div className="col-md-3 border-start border-2 border-warning">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link class="nav-link main-color fs-4 active" aria-current="page" to={""}>Digitizing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"ParcelMapping"}>Parcel Mapping</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"RemoteSensing"}>Remote Sensing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"GISDataCapture"}>GIS Data Capture</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"MunicipalGIS"}>Municipal GIS</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"LidarDataProcessing"}>Lidar Data Processing</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"DigitalPhotogrammetry"}>Digital Photogrammetry</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"IndoorMapping"}>Indoor Mapping</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link main-color fs-4" to={"Building3DLandmarks"}>Building 3D Landmarks</Link>
          </li>
        </ul>
      </div>
      <div className='col-md-9'><Outlet></Outlet></div>

    </div>
  </>
}
