import React from 'react';
import slideImg2 from "../../images/parcel.jpg";

export default function ParcelMapping() {
  return <>

    <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={slideImg2} alt="" />
    </div>
    <div className=" my-5">
      <div className="disc">
        <div className='my-3'>
        Parcel Mapping is a process in which land parcels are created for efficient and effective land management. Parcel mapping service generates maps, created from base maps, with polygons that have details about the ownership of properties and other related information. The base maps used in parcel mapping are the cadastral maps showing each individual plots in different sub divisions. The land parcels are the fundamental data layer on which different data are referenced. Parcel mapping has a variety of uses such as land administration & property registration by urban and rural governing bodies. Municipality planning & urban development is taken care through the use of various parcel mapping techniques, which have the ability to restore analytical data that is crucial for enhancing the operational abilities of the government bodies.
        </div>
        <div className='my-3'>
        Use of parcel mapping services has increased over time and it has been observed that the time required to process and fulfil requests for land registry information has dropped by almost 80% in various countries. The use of parcel mapping services has consequently led to substantial improvements in handling the enormous requests generated over a period. Subsequently there is a huge reduction of overhead costs, and maintaining the data in a secured environment. Parcel mapping is also used by cartographic officials, rescue operations during floods and natural disasters for identifying property owners and retrieving crucial data. Parcel maps are also the base for any such GIS Maps.
        </div>
        <div className="h3 fw-bold mt-4">
        GeoPro IT can replace the cumbersome process of maintaining data on paper maps with digital parcel maps using parcel mapping for:
        </div>
        <ul>
          <li>Municipal & other Urban Bodies</li>
          <li>Government Departments</li>
          <li>Builders</li>
          <li>Real Estate Agents</li>
          <li>Appraisers</li>
          <li>Engineers</li>
          <li>Surveyors</li>
          <li>Developers</li>  
        </ul>
      </div>
    </div>

  </>
}
