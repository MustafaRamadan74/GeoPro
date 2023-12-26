import React from 'react';
import img1 from "../../images/LandManagement.jpg";
import img2 from "../../images/LandPolicyReforms.jpg";
import img3 from "../../images/E-governance.jpg";
import img4 from "../../images/SmartCities.jpg";

export default function LandManagement() {
  return <>

    <div className="h3 fw-bold mt-4">
      SUSTAINABLE LAND MANAGEMENT
    </div>

    <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={img1} alt="" />
    </div>

    <div className="h3 fw-bold mt-4">
      Turnkey solutions from consulting to enterprise applications and maintenance
    </div>
    <div className='my-3'>
      GeoPro provides interoperable, scalable, and flexible land and urban management solutions to governments, municipal authorities and national mapping agencies. These end to end solutions include a combination of both data and enterprise application development, ranging from customized standalone services to turnkey models.
    </div>
    <div className='my-3'>
      GeoPro’s solutions facilitate effective information management, integration of business processes, increased productivity, performance, transparency, and improved decision making. They address both prescriptive as well as aspirational business needs ranging from compliance with regularly changing regulations to implementation of specific service delivery programs.
    </div>
    <div className='my-3'>
      Our solutions help our public and private sector clients in improving efficiencies and faster delivery of G2B and G2C (Government to Citizen) services. Our solutions address necessary requirements for information security, encryption of sensitive data and customized secured access. GeoPro also has a suite of proprietary products applicable to the land and infrastructure industry.
    </div>

    <div className="h3 fw-bold mt-4">
      LAND POLICY & REFORMS
    </div>
    <div className="w-75 my-4 m-auto">
      <img className='w-50 border-warning border-3 border rounded-2' src={img2} alt="" />
    </div>

    <div className='my-3'>
      GeoPro supports technology infusion in large land policy and reform programs across the globe. Our solutions target national and regional government customers requiring compliance with regularly changing regulations. We also implement specific service delivery programs whose outcomes rely significantly on efficiency improvement, information sharing and increase of transparency amongst different stakeholders. Key solutions include:
    </div>
    <ul>
      <li>Land registration, records, reform, and land policy implementation</li>
      <li>Web based and enterprise system development</li>
      <li>Cadastral, tax and parcel mapping</li>
      <li>Rapidly deployable field survey products</li>

    </ul>

    <div className="h3 fw-bold mt-4">
      E-GOVERNANCE
    </div>

    <div className="w-75 my-4 m-auto">
      <img className='w-50 border-warning border-3 border rounded-2' src={img3} alt="" />
    </div>

    <div className='my-3'>
      We provide solutions to address G2B, G2C and G2G services as part of public sector e-governance strategy at regional and national levels. These solutions target improved information dissemination, complaints/grievance management and effective implementation of public sector programs.
    </div>
    <div className='my-3'>
      All our solutions are built to guarantee secure access to data, functionality, information dissemination and reporting. Our platform agnostic approach enables us to develop solutions grounds-up  or leverage existing investments in technology by our clients.  Key solutions include:
    </div>
    <ul>
      <li>Mobile apps for G2C (Government to Citizen) for information dissemination</li>
      <li>Mobile apps for C2G (Citizen to Government) for citizen feedback</li>
      <li>Enterprise applications to implement e-gov programs</li>
      <li>Complaints and consumer grievance management</li>
      <li>Disaster mitigation planning and preparedness</li>
    </ul>

    <div className="h3 fw-bold mt-4">
      URBAN RENEWAL & SMART CITIES
    </div>

    <div className="w-75 my-4 m-auto">
      <img className='w-50 border-warning border-3 border rounded-2' src={img4} alt="" />
    </div>

    <div className='my-3'>
      GeoPro offers GIS based mapping and analytics for urban infrastructure management and redevelopment. We have expertise in mapping public health services, habitats, conservation sites and other environmentally sensitive areas including urban forests, trees and landfills. Further, the historical data is analyzed by our experts who conduct big data analytics to see trends in traffic, disease, health, and air quality. Our solutions help our government clients in implementing policy decisions to improve city planning for long term environmental sustainability.
    </div>
    <div className='my-3'>
      GeoPro develops customized solutions to address the needs of smart cities. These solutions bring together best practices from all our verticals – land & property, utilities, disaster management and natural resource management. Key solutions include:
    </div>
    <ul>
      <li>Study of urban sprawl to understand the underlying driving forces</li>
      <li>3D city models for visualization and analysis</li>
      <li>Change detection studies</li>
      <li>Field data survey & update</li>
      <li>Mapping habitats, conservation sites, landfills and other environmentally sensitive areas</li>
      <li>Analyzing historical geo-data information for environmental uses</li>
      <li>Mapping of public health services  –  water, sanitation, and solid waste management</li>
      <li>Big data analytics to see trends in traffic, disease, health, air quality</li>
    </ul>

  </>
}
