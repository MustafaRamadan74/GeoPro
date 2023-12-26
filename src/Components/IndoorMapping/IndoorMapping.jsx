import React from 'react';
import slideImg8 from "../../images/indoorMapping.jpg";

export default function IndoorMapping() {
  return <>


    <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={slideImg8} alt="" />
    </div>
    <div className=" my-5">
      <div className="disc">
        These days the increasing complexities of building structures and number of smart phone users have led to need for indoor building maps. Indoor building maps are a feature installed in various devices like kiosks and phone applications for navigational purposes and personnel directories. They enable the user to navigate from one place to another within a building premise and save the user from being lost and clueless in a huge and complex building premise.

        Indoor building maps operates on the basic fundamentals of calculated path mapping – a sophisticated system allows the user to find the shortest route between their origin and destination in real time, depending on sources of user input.

        The smart phone users now expect the indoor plan of all the building’s to be a click way therefore GeoPro creates indoor building plans for buildings worldwide. These indoor maps are significant in information transmission and searching perspective, especially in large public and private buildings. The indoor maps act as mobility aids in navigation to classrooms, restrooms, stairwells, elevators, entry/exit areas, cafeterias, restaurants or any other parts of the building. A comprehensive indoor map dataset ideally includes building floor plan details such as rooms, corridors, stairways, elevators, entry and exit. The indoor map created provides efficient route – planning in order to provide directions pro-actively.

        <div className="h3 fw-bold mt-4">
          Typical indoor building map creation methodology includes the following steps:
        </div>
        <div className=" fw-bold my-3">
          Step 1: Collection of building floor plans and attributes
        </div>
        <p>GeoPro collects indoor building plans and its various attributes are collected from a variety of sources including websites, open forums, blogs and/or by visiting and coordinating with building owners.</p>
        <div className=" fw-bold my-3">
        Step 2: Building plan and attribute validation
        </div>
        <p>GeoPro technical resources visit the building site for validating the floor plans and the attributes. The team collects 5 – 10 geographic coordinates per building using GPS equipment.</p>
        <div className=" fw-bold my-3">
        Step 3: Digitization of Floor Plan
        </div>
        <p>Subsequently, GeoPro in-house teams use appropriate GIS software for digitizing individual buildings on a layer-by-layer basis with reference to floor levels and for various attributes.</p>
        <div className=" fw-bold my-3">
        Step 4: Geo-referencing and Validation
        </div>
        <p>GeoPro collects GeoPro technical resources geo-reference and validate the digitized indoor building plans with reference to high resolution imagery or with respect to the geographic coordinates collected by the field team.</p>
        <div className=" fw-bold my-3">
        Step 5: Quality check of Indoor maps created
        </div>
        <p>Extensive quality check and error fixing is carried out by GeoPro Quality Assurance (QA) professionals for the quality and accuracy of indoor maps. Important points considered during QA/QC of the indoor maps include testing for missing vector layers, duplicate features, dangling errors, overshoots and undershoots.</p>
        <div className=" fw-bold my-3">
        Step 6: Shipment
        </div>
        <p>The completed indoor maps are delivered to the client in required format via email and/or CDROM.</p>
        
      </div>
    </div>

  </>
}
