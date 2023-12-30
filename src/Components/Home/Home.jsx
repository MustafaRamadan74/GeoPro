import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import slideImg1 from "../../images/digitizing.png";
import slideImg2 from "../../images/parcel.jpg";
import slideImg3 from "../../images/RemoteSensing.png";
import slideImg3_3 from "../../images/NavigationAndMapping.jpg";
import slideImg4 from "../../images/dataCapture.jpg";
import slideImg5 from "../../images/municipalGIS.jpg";
import slideImg5_5 from "../../images/5G.jpg";
import slideImg6 from "../../images/lidar.jpg";
import slideImg7 from "../../images/DigitalPhotogrammetry.jpg";
import slideImg8 from "../../images/indoorMapping.jpg";
import slideImg9 from "../../images/building3d.jpg";
import slideImg10 from "../../images/NavigationAndMapping.jpg";
import { ThemeContextVar } from '../../Context/DarkModeContext';
import { useContext } from 'react';


export default function Home() {

  const theme = useContext(ThemeContextVar);
  const darkMode = theme.state.darkMode;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return <>

    <div className="py-5 ">
      <Slider {...settings}>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg1} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg4} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg2} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg3_3} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg5_5} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg6} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg7} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg8} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg9} alt="" />
        </div>
        <div className='h-25'>
          <img className='w-100 customH px-1' src={slideImg10} alt="" />
        </div>

      </Slider>
    </div>



    <div className=" mt-1 mb-5 Statics ">
      <div className="rounded py-5">
        <div className="container row text-center m-auto py-4 rounded bgMainColor">
          <div style={{color:darkMode?"#fff":"#000"}} className=" col-md-3 StaticsItem">
            <i className="fa-solid fa-circle-check fa-2x"></i>
            <h5 className='my-2'>Projects Done</h5>
            <h5>+ 15</h5>
          </div>
          <div style={{color:darkMode?"#fff":"#000"}} className=" col-md-3 StaticsItem">
            <i className="fa-solid fa-spinner fa-spin fa-2x"></i>
            <h5 className='my-2'>Projects in Progress</h5>
            <h5>+ 3</h5>
          </div>
          <div style={{color:darkMode?"#fff":"#000"}} className=" col-md-3 StaticsItem">
            <i className="fa-solid fa-code fa-2x"></i>
            <h5 className='my-2'>Lines of Code</h5>
            <h5>+ 10000</h5>
          </div>
          <div style={{color:darkMode?"#fff":"#000"}} className=" col-md-3 StaticsItem">
            <i className="fa-solid fa-users fa-2x"></i>
            <h5 className='my-2'>Number of Engineers</h5>
            <h5>+ 10</h5>
          </div>
        </div>
      </div>
    </div>




    <div className="main-color ms-2 h2 OurServicesCol">
      OUR SERVICES :
    </div>

    <div className="row  py-5 g-sm-5 ">
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg1} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Digitizing</h5>
            <p className="card-text">Digitization services involve converting any physical document into a digital file. This ensures easy handling, sharing and editing of the document. ...</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg2} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Parcel Mapping</h5>
            <p className="card-text">Parcel Mapping is a process in which land parcels are created for efficient and effective land management. Parcel mapping service generates maps, ...</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/ParcelMapping"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg3} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Remote Sensing</h5>
            <p className="card-text">By choosing to build green, you aremaking an effort to reduce the burden on the environment and also add value to your home. StrusturePress provides you with the guidance and the tools that are necessary …</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/RemoteSensing"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg4} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">GIS Data Capture</h5>
            <p className="card-text">GIS data capture is a technique in which the information on various map attributes, facilities, assets, and organizational data are digitized and organized on a target GIS system in appropriate layers. ...</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/GISDataCapture"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg5} className="card-img-top customHCard border border-bottom border-warning border-2 object-fit-cover" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Municipal GIS</h5>
            <p className="card-text">GeoPro has been working with the local and national governmental organisations for a long time now and understands the uniqueness and confidentiality of governmental work.
              Many government aided bodies are recurring clients of GeoPro, ...</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/MunicipalGIS"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg6} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Lidar Data Processing</h5>
            <p className="card-text">LiDAR technology enables the data capture on field by lighting the target using pulsed laser. As LiDAR also provides elevation data, it finds applications in several industries. ...</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/LidarDataProcessing"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg7} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Digital Photogrammetry</h5>
            <p className="card-text">Photogrammetry as a science is among the earliest techniques of remote sensing. The word photogrammetry is the combination of three distinct Greek words ‘Photo’, ‘Gram’ and ‘metry’ which translated …</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/DigitalPhotogrammetry"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg8} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Indoor Mapping</h5>
            <p className="card-text">These days the increasing complexities of building structures and number of smart phone users have led to need for indoor building maps. Indoor building maps are a feature installed in various …</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/IndoorMapping"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="card border border-warning border-3">
          <img src={slideImg9} className="card-img-top customHCard border border-bottom border-warning border-2" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Building 3D Landmarks</h5>
            <p className="card-text">GeoPro IT creates 3D Building Landmarks and Photorealistic 3D Models for monuments, museums, places of worship, recreational destinations, petrol pumps and other establishments. 3D Building Landmarks and …</p>
            <Link onClick={()=>{window.scroll(0,0)}} to={"Services/Building3DLandmarks"} className="btn bgMainColor">See More</Link>
          </div>
        </div>
      </div>
    </div>

    <div className="bgMainColor rounded py-5 px-3 OurPromise">
      <h2 className="fw-bold text-center py-3">Our Promise and Values</h2>
      <div className="OurPromiseText w-75 m-auto px-5 py-3 border-start border-4 border-warning">
        Is to be responsive to all our clients GIS needs. We provide clients with a wide range of expertise scaling numerous industries. In this way, GIS Solutions is able to deliver timely, high quality, innovative GIS-based
      </div>
      <div className="h4 text-center fw-bolder py-4">Eng / Ehab M.Eid</div>
    </div>
    <div className='bgMainColor container px-4 py-3 my-5 rounded ContactHome'>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="px-4 ">
          <p className='h5 '>Do you need Professional GIS Services Company?</p>
          <p className='h5 '>We offer the best services and solutions.</p>
        </div>
        <div className="px-4 ">
          <div className="btn btn-dark  ">
            <Link onClick={()=>{window.scroll(0,0)}} className='linkDecoration text-white ' to={"/Contact"}>Contact Us</Link>
          </div>
        </div>
      </div>

    </div>
  </>
}
