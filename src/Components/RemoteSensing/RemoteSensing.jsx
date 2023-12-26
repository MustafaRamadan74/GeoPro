import React from 'react';
import slideImg3 from "../../images/RemoteSensing.png";


export default function RemoteSensing() {
  return <>
  
  <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={slideImg3} alt="" />
    </div>
    <div className=" my-5">
      <div className="disc">
        <div className='my-3'>
        Some projects require acquisition of information on objects and phenomena at a large scale. Physical survey in such a situation is not a viable option. Remote sensing is a technique that is time and cost effective and is therefore apt for such projects.
        </div>
        <div className='my-3'>
        GeoPro offers remote sensing services to its clients worldwide. The services ensure accurate and cost-effective data collection which is important input for planning and designing of mapping projects. GeoPro'sexpertise in remote sensing branches out to meet classification, image correction, image enhancement, image processing, and change detection services. These services are rendered as per the project’s requirements.
        </div>
        <div className='my-3'>
        GeoPro offers remote sensing services by creating data to analyse and compare data of forestry, weather, vegetation, pollution, erosion, land use. The remote sensing services offered by GeoPro can also be helpful for city planning, military observation, archaeological investigations, and so on.
        </div>
        <div className='my-3'>
        GeoPro technical teams have good hands-on experience of using remote sensing software’s like ERDAS IMAGINE, ENVI, and ER Mapper etc.
        </div>
        <div className="h3 fw-bold mt-4">
        GeoPro remote sensing services includes in the following verticals:
        </div>
        <ul>
        <li>Satellite imagery interpretation and classification</li>
          <li>Classification-supervised and unsupervised</li>
          <li>Change detection</li>
          <li>Slope aspect analysis</li>
          <li>Land cover classification</li>
          <li>Coastal ecosystem management</li>
          <li>Forestry mapping</li>
          <li>Agricultural mapping</li>
          <li>Mining and geology mapping</li>
          <li>Environmental impact assessment mapping</li>
          <li>Clutter data for wireless telecommunication network planning  </li>
          <li>Watershed management</li>
        </ul>
        <div className='my-3'>
        GeoPro has extensive experience and expertise in providing cost effective, time bound and flawless services. The clients are continuously kept in loop with the development of the project.
        </div>
      </div>
    </div>
  
  </>
}
