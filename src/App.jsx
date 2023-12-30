import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Layout from './Components/Layout/Layout';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';
import DigitalPhotogrammetry from './Components/DigitalPhotogrammetry/DigitalPhotogrammetry';
import RemoteSensing from './Components/RemoteSensing/RemoteSensing';
import Digitization from './Components/Digitization/Digitization';
import MunicipalGIS from './Components/MunicipalGIS/MunicipalGIS';
import GISDataCapture from './Components/GISDataCapture/GISDataCapture';
import LidarDataProcessing from './Components/LidarDataProcessing/LidarDataProcessing';
import ParcelMapping from './Components/ParcelMapping/ParcelMapping';
import IndoorMapping from './Components/IndoorMapping/IndoorMapping';
import Building3DLandmarks from './Components/Building3DLandmarks/Building3DLandmarks';
import Solutions from './Components/Solutions/Solutions';
import Utilities from './Components/Utilities/Utilities';
import LandManagement from './Components/LandManagement/LandManagement';
import Communication from './Components/Communication/Communication';
import NavigationAndMapping from './Components/NavigationAndMapping/NavigationAndMapping';
import NotFound from './Components/NotFound/NotFound';
import Toggle from './Components/Toggle/Toggle';
import { ThemeContextVar } from './Context/DarkModeContext';
import { useContext } from 'react';


function App() {

  const theme = useContext(ThemeContextVar);
  const darkMode = theme.state.darkMode;

  let routers = createHashRouter([
    {
      path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "About", element: <About /> },
        { path: "Contact", element: <Contact /> },
        {
          path: "Services", element: <Services />, children: [
            { path: "DigitalPhotogrammetry", element: <DigitalPhotogrammetry /> },
            { path: "RemoteSensing", element: <RemoteSensing /> },
            { path: "", element: <Digitization /> },
            { path: "MunicipalGIS", element: <MunicipalGIS /> },
            { path: "GISDataCapture", element: <GISDataCapture /> },
            { path: "LidarDataProcessing", element: <LidarDataProcessing /> },
            { path: "ParcelMapping", element: <ParcelMapping /> },
            { path: "IndoorMapping", element: <IndoorMapping /> },
            { path: "Building3DLandmarks", element: <Building3DLandmarks /> },
          ]
        },
        {
          path: "solutions", element: <Solutions />, children: [
            { path: "utilities", element: <Utilities /> },
            { path: "landManagement", element: <LandManagement /> },
            { path: "communication", element: <Communication /> },
            { path: "", element: <NavigationAndMapping /> },
          ]
        },
        { path: "*", element: <NotFound /> },


      ]
    }
  ])

  return <>

    <div style={{
      backgroundColor: darkMode ? "#131722" : "#fff",
      color: darkMode ? "#fff" : "#000"
    }}>

      <Toggle />
      <RouterProvider router={routers}></RouterProvider>

    </div>
  </>
}

export default App;
