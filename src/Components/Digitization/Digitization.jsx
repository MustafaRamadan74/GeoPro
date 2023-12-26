import React from 'react';
import slideImg1 from "../../images/digitizing.png";

export default function Digitization() {
  return <>

    <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={slideImg1} alt="" />
    </div>
    <div className=" my-5">
      <div className="disc">
        Digitization services involve converting any physical document into a digital file. This ensures easy handling, sharing and editing of the document. Digitization services are used for converting maps, sketches, schematic diagrams, or circuit diagrams. They are known for ensuring positional accuracy of the objects and is therefore useful in many industries. Digitization services are also used in contour maps, topographic maps, zonal maps, cadastral maps, and utility maps.

        <div className='my-3'>
          GeoPro IT offers digitization services such as complete CAD Conversion, paper to CAD Conversions and CAD Drafting. These Digitization services are rendered using global standards and therefore the resulting products have high precision and quality. The digitization services at GeoPro IT seamlessly convert paper drawings and maps into highly accurate digital files, with the help of paper to CAD conversions.
        </div>
        <div className="h3 fw-bold mt-4">
          The various digitization services at GeoPro IT are:
        </div>
        <ul>
          <li>2D and 3D Digitization</li>
          <li>Paper to CAD Conversion</li>
          <li>Raster to Vector Conversion</li>
        </ul>
      </div>
    </div>

  </>
}
