import React from 'react';
import slideImg6 from "../../images/lidar.jpg";

export default function LidarDataProcessing() {
  return <>

    <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={slideImg6} alt="" />
    </div>
    <div className=" my-5">
      <div className="disc">
        <div className='my-3'>
          LiDAR technology enables the data capture on field by lighting the target using pulsed laser. As LiDAR also provides elevation data, it finds applications in several industries.
        </div>
        <div className='my-3'>
          GeoPro provides a wide range of LiDAR data processing services that helps in creating Digital Elevation Models (DEM), Digital Terrain Models (DTM) and Triangulated Inverse Networks (TIN) to provide highly accurate detail of the Earth’s surface. GeoPro LiDAR data processing services have helped global industries in taking informed decisions about their business. LiDAR data processing services enable the electrical utility industry with the efficient planning and maintenance of electric networks. LiDAR classification also gives a supporting hand to the agricultural sector, by watershed delineation and crop assessment mapping using LiDAR point cloud data. This way, LiDAR classification and LiDAR data processing assists many industrial sectors in planning and making informed decisions.
        </div>

        <div className="h3 fw-bold mt-4">
          Typical LiDAR data processing services by GeoPro IT include:
        </div>
        <ul>
          <li>LiDAR data processing of electrical utilities</li>
          <li>Watershed delineation using LiDAR data processing techniques</li>
          <li>LiDAR data processing of forestry area</li>
          <li>LiDAR data processing of agricultural features</li>
          <li>LiDAR data classification /point cloud classification</li>
          <li>LiDAR data processing of oil and gas networks</li>
        </ul>
        <div className="h3 fw-bold mt-4">
          In addition, GeoPro also provides the following services on LiDAR data
        </div>
        <ul>
          <li>Data cleansing and noise removal</li>
          <li>Bare Earth & non ground LiDAR classification</li>
          <li>Generation of DTM and contours</li>
          <li>Vectorisation and feature extraction</li>
          <li>Image overlay and point cloud colourisation</li>
        </ul>

      </div>
    </div>

  </>
}
