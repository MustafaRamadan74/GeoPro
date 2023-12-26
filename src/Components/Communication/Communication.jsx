import React from 'react';
import img1 from "../../images/telephoneWireline.jpg";
import img2 from "../../images/3ddata.jpg";
import img3 from "../../images/2D-Data.jpg";
import img4 from "../../images/city__data.jpg";
import img5 from "../../images/Regional-Data-Package.jpg";

export default function Communication() {
  return <>

    <div className="h3 fw-bold mt-4">
      WIRELINE COMMUNICATIONS
    </div>

    <div className="w-75 my-4 m-auto">
      <img className='w-50 border-warning border-3 border rounded-2' src={img1} alt="" />
    </div>
    <div className="h3 fw-bold mt-4">
      GIS for planning, design and management of next generation networks
    </div>


    <div className='my-3'>
      The telecommunications sector has witnessed significant technological and regulatory changes over the last two decades. The concept of converged or unified network for voice, data and video information has greatly influenced the industry leading to a trend of migration of copper network to fiber.
    </div>
    <div className='my-3'>
      GeoPro provides domain specific GIS solutions that address the entire telecom industry landscape including cable and broadband services. Our key capabilities include copper and FTTx design, drafting and migration services using CAD, GIS and SpatialNET technologies.
    </div>
    <div className='my-3'>
      These are complimented with our strong application development capabilities for enterprise application integration, technology up-gradation / migration, and developing smart tools for conflation, network migration, and automating critical processes and workflows.
    </div>
    <div className='my-3'>
      GeoPro has successfully developed solutions for complex telecom projects for a range of global clients. Our solutions enable clients to achieve operational efficiencies, capacity optimization, and required throughputs. We have experience on all leading industry platforms such as Synchronoss SpatialNET, Intergraph FRAMME, Ericsson Network Engineer, and other Custom OSP applications.
    </div>

    <div className="h3 fw-bolder mt-4">
      Solutions
    </div>
    <div className="h3 fw-bold mt-4">
      Network Planning and Design (Fiber and Copper)
    </div>

    <div className='my-3'>
      GeoPro offers network planning and design services for FTTP, FTTN & HFC technologies to communication service providers across the globe.  Our team of network planning & design experts synthesize their domain knowledge with technical capabilities to provide efficient design solutions which optimize the client’s existing infrastructure and enable faster  network rollouts. We also offer trained domain experts to help our clients increase their network capacity, thereby enabling improved customer experience.
    </div>
    <ul>
      <li>Backbone/Distribution Design & Planning</li>
      <li>Detailed Documentation – Splicing Details, BOM, BOQ, SLDs, CAPEX</li>
      <li>AS-built Updates in GIS</li>
      <li>Physical Network Inventory Data Management</li>
      <li>Network Design Drafting Plans for Municipal Approvals</li>

    </ul>

    <div className="h3 fw-bold mt-4">
      GIS Data Management
    </div>


    <div className='my-3'>
      GeoPro has considerable experience of developing and maintaining high quality datasets for for both OSP (Outside Plant) and ISP(Inside Plant) networks. These datasets are developed using best of the breed industry technologies and processes that ensures reliable network information for various business and operational support systems. Key services include:
    </div>
    <ul>
      <li>Data Migration</li>
      <li>Legacy Data/ PLRs Conversion</li>
      <li>Landbase and Facility Network Mapping</li>
      <li>Engineering Work Order Posting</li>
      <li>OSP & ISP Data Cleansing</li>
      <li>Data Conflation for Accuracy Improvement</li>
    </ul>

    <div className="h3 fw-bold mt-4">
      Application Development
    </div>


    <div className='my-3'>
      GeoPro provides a host of innovative solutions using industry-standard tools and platforms for the communications industry to maintain accurate, up-to-date data for planning, design and management of networks. Our dedicated team of application development experts provides the following services:
    </div>
    <ul>
      <li>Application Development & Maintenance</li>
      <li>Web GIS Applications</li>
      <li>Enterprise Application Integration</li>
      <li>Technology Upgradation / Migration</li>
      <li>Customized Applications / Tools</li>
    </ul>








    <div className="h3 fw-bold mt-4">
      WIRELESS COMMUNICATIONS
    </div>


    <div className="h3 fw-bold mt-4">
      Largest repository of geodata products of most recent vintage
    </div>


    <div className='my-3'>
      In today’s competitive landscape, the wireless telecom industry faces multiple challenges including optimizing infrastructure costs, improving customer experience, and coping with the rapid transition of technology. We at GeoPro, provide geo-data solutions that help the industry address these key challenges.
    </div>
    <div className='my-3'>
      GeoPro is the world’s leading supplier of geo-data for fixed wireless (WLL, LMDS) and mobile wireless (GSM, CDMA, TDMA, UMTS and WiMAX) networks. Our solutions help clients in wireless network planning, design and performance optimization. Our solutions include DEM/DTM, Land Use/Clutter, Vector/Linear databases, 3-D building heights and off-the-shelf geo-data products, at varying levels of details, resolution and accuracy.
    </div>
    <div className='my-3'>
      With two decades of experience, our mapping solutions are used by wireless and cellular operators, equipment suppliers, and network planning consultants, who incorporate GeoPro’s databases for multiple wireless applications, ranging from preliminary regional network planning and coverage analysis to micro-cell design, line-of-sight analysis, network expansion and site acquisition.
    </div>
    <div className='my-3'>
      GeoPro owns one of the largest international inventories of off-the-shelf geodata products in the industry including 5,000 cities and 150 countries. GeoPro has also established a leadership position in the 3D data market for mobile wireless technologies. For customized software requirements, GeoPro has varied experience of developing simple desktop viewer applications to large, scalable and secure web-enabled systems for enterprise and public portals.
    </div>

    <div className="row">
      <div className="col-md-6">
        <h3>3D Data</h3>
        <div className="row">
          <div className="col-md-6">
            <img className='w-100' src={img2} alt="" />
          </div>
          <div className="col-md-6">
            <p><span className='fw-bold'>Resolution</span>: 1-5 meters <br />
              <span className='fw-bold'>Coverage</span>: Client specified high dense urban sprawls, CBD areas <br />
              <span className='fw-bold'>Layers</span>: Digital Terrain Model (DTM), Digital Surface Model (DSM), Digital Building Height Model (DHM), Vegetation Model, 2D Linear Feature, Clutter, Ortho Image</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h3>2D Data</h3>
        <div className="row">
          <div className="col-md-6">
            <img className='w-100' src={img3} alt="" />
          </div>
          <div className="col-md-6">
            <p><span className='fw-bold'>Resolution</span>: 5 meters <br />
              <span className='fw-bold'>Coverage</span>: Client specified urban sprawls <br />
              <span className='fw-bold'>Layers</span>: Digital Terrain Model (DTM), Vectors, Average Height Based Clutter (Land Use), Orthoimage
              Land Parcel based data creation approach</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h3>City Data</h3>
        <div className="row">
          <div className="col-md-6">
            <img className='w-100' src={img4} alt="" />
          </div>
          <div className="col-md-6">
            <p><span className='fw-bold'>Resolution</span>: 5-20 meters <br />
              <span className='fw-bold'>Coverage</span>: Client specified dense urban sprawls <br />
              <span className='fw-bold'>Layers</span>: Digital Terrain Model (DTM), Vectors, Clutter (Land Use), Orthoimage
              Parcel (encompassed between road/street network) based data creation approach</p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <h3>Regional Data</h3>
        <div className="row">
          <div className="col-md-6">
            <img className='w-100' src={img5} alt="" />
          </div>
          <div className="col-md-6">
            <p><span className='fw-bold'>Resolution</span>: 30-100 meters <br />
              <span className='fw-bold'>Coverage</span>: Complete countries or client specified regions <br />
              <span className='fw-bold'>Layers</span>: Digital Terrain Model (DTM), Clutter (Land Use), Vector (Linear) and Text</p>
          </div>
        </div>
      </div>
    </div>


  </>
}
