import React from 'react';
import img1 from "../../images/NavigationAndMapping.jpg";
import img2 from "../../images/OutdoorMapping.jpg";
import img3 from "../../images/indoorNavigation.jpg";

export default function NavigationAndMapping() {
  return <>

    <div className="h3 fw-bold mt-4">
      NAVIGATION & MAPPING
    </div>

    <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={img1} alt="" />
    </div>


    <div className='my-3'>
      GeoPro has extensive experience in developing, updating, and maintaining high quality points of interest (POI) and accurate street databases that support in-car navigation, web and mobile applications, emergency management, and location-based services.
    </div>
    <div className='my-3'>
      We have a proven, ready to deploy, proprietary suite of integrated tools (RMSI Map Pro) for each stage of the map data development cycle from input preparation, network data capture, attribute conflation, video data integration, to POI integration. RMSI Map Pro also includes automated QA/QC tools for each stage of the production cycle.
    </div>
    <div className='my-3'>
      In addition to outdoor navigation maps, RMSI also has demonstrable experience in creating and maintaining indoor venue maps from multiple input sources such as CAD drawings and PDF venue maps.
    </div>

    <div className="h3 fw-bold mt-4">
      Outdoor Mapping
    </div>
    <div className="w-75 my-4 m-auto">
      <img className='w-50 border-warning border-3 border rounded-2' src={img2} alt="" />
    </div>

    <div className='my-3'>
      GeoPro has the expertise to handle end to end map data development, maintenance and enhancement, from specifications creation to actual production. We have proven experience of working on large map data projects that require significant ramp up and training within a short turnaround time. Key solutions include:
    </div>
    <ul>
      <li>Consultancy and specifications creation</li>
      <li>Image processing & interpretation</li>
      <li>Digital cartography</li>
      <li>Street network digitization & realignment</li>
      <li>Attribute & road sign capture</li>
      <li>Building 3D landmarks & models</li>
      <li>Mobile video mapping & field data collection</li>

    </ul>

    <div className="h3 fw-bold mt-4">
      Indoor Venue Maps
    </div>

    <div className="w-75 my-4 m-auto">
      <img className='w-50 border-warning border-3 border rounded-2' src={img3} alt="" />
    </div>

    <div className='my-3'>
      GeoPro provides indoor venue map data creation and maintenance services to indoor positioning application providers, map data providers, and large retail chains, amongst others. We create and convert indoor venue map data from multiple resources, (CAD/PDF) following AVF (Apple Venue Format) standards.
    </div>
    <div className='my-3'>
      We help our clients in creating a unique ‘in-store’ navigation experience for their customers and in accurately guiding them to various points of interest within the venue. Our team of experts have an in-depth understanding of different types of indoor venues such as airports, museums, stadiums, stores, malls, hospitals, etc. Key steps include:
    </div>
    <ul>
      <li>Geo-referencing of floor plans</li>
      <li>Capturing of sub-structures within each level, such as rooms, elevators, escalators & stairs</li>
      <li>Capturing of immovable architectural features and other structures within a level such as walls, doorways, and shelving units.</li>
      <li>Building topology & logical connectivity of indoor features</li>
      <li>Capturing of attributes from floor plans, visitor maps, directories, etc</li>
      <li>Internet research to add additional attributes such as opening hours, phone numbers & any other client specified details</li>
      <li>Data delivery in client compatible formats</li>

    </ul>


  </>
}
