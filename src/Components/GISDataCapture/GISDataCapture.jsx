import React from 'react';
import slideImg4 from "../../images/dataCapture.jpg";

export default function GISDataCapture() {
  return <>

    <div className="w-75 my-4 m-auto">
      <img className='w-100 border-warning border-3 border rounded-2' src={slideImg4} alt="" />
    </div>
    <div className=" my-5">
      <div className="disc">
        <div className="h3 fw-bold mt-4">
          GIS Data capture can be divided into:
        </div>
        <div className=" fw-bold my-3">
          - Primary GIS Data Capture Techniques:
        </div>
        <p>The primary GIS data capture techniques use remote sensing and surveying technologies to capture the data using either raster data capture or vector data capture.</p>

        <ul>
          <li className='my-2'>The raster GIS data capture technique involves capturing of attributes and other data without physical contact. This is usually done with the help of satellite imaging techniques such as aerial photography. This type of GIS data capture is advantageous as there is a consistency in the data generated, and the whole process can be regularly and systematically multiplied to get accuracy of the data in a cost effective manner.</li>
          <li className='my-2'>The vector GIS data capture technique includes capturing of data-sets through physical surveying techniques such as Differential Global Positioning System (DGPS) and Electronic Total Station (ETS). Although this technique is the most effective process to have the accurate data on the target GIS system, it is more time consuming and expensive.</li>
        </ul>
        <div className=" fw-bold my-3">
          - Secondary GIS Data Capture Techniques:
        </div>
        <p>The secondary GIS data capture technique use technologies such as scanning, manual digitizing, vectorization, photogrammetry, and COGO feature construction to capture data by the following methods:</p>
        <ul>
          <li className='my-2'>Scanning the raster data for GIS Data Capture involves the use of high resolution scanners that generate highly accurate raster images from the hard copies which can be geo-referenced and digitized to get the vector output.</li>
          <li className='my-2'>Manual digitizing is done directly over the raster by the use of a digitizing tablet, which is a manual pointing device that creates an identical vector map on the computer screen, defining the vertices, points, line data, etc.</li>
          <li className='my-2'>Heads-up digitizing is a part of GIS Data Capture and is similar to the manual digitization, but in heads-up digitization, the raster scanned data is imported and laid below the vector data to be traced on the computer screen itself.</li>
          <li className='my-2'>Automatic raster to vector conversion is a great example of advancement of the technology, the technology uses special software using intelligent algorithms that have been developed to recognize the patterns of the points, lines and polygon features and capture them automatically to generate vector GIS data.</li>
          <li className='my-2'>Photogrammetry involves digital stereo-plotters that are used to capture the vector data from the Ariel photographs, pictures and images. This is comparatively the most effective method of accurate GIS data capture, but is one of the costliest methods too.</li>
        </ul>
        <div className="h3 fw-bold mt-4">
        GIS Data capture services provided by GeoPro IT can used for:
        </div>
        <ul>
          <li>Thematic Maps Creation: Analysing practical regional / cultural issues, transportation facilitation, hydrographic mapping, vegetation and other types of related features</li>
          <li>Capturing Electrical power networks using special software for GIS data capture</li>
          <li>Capturing Navigation data for easy navigation</li>
          <li>Capturing Land records and survey data for property, land, water and holding tax, etc. The spatial features are extracted from Ariel imagery using photogrammetry methods.</li>
          <li>Creation of Utility infrastructure GIS data capture for water lines, road network, pavements, sewerage network, and other related features.</li>
          <li>Generation of Environmental and geological GIS Data capture is done from geological maps, weather maps, mining and mineral exploration maps, etc.</li>
        </ul>
      </div>
    </div>

  </>
}
