import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CardPopup from './components/NavBar/CardPopup';
import BuildingMap from './components/Map/BuildMap';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages";
import Apartment from "./pages/apartment";
import Floor from "./pages/floor";
import BuildingAPage from './components/Map/BuildingA';
import BuildingBPage from './components/Map/BuildingB';
import BuildingCPage from './components/Map/BuildingC';

import AFloorPlan1 from './components/Floor/AFloorPlan1';
import AFloorPlan2 from './components/Floor/AFloorPlan2';
import AFloorPlan3 from './components/Floor/AFloorPlan3';
import AFloorPlan4 from './components/Floor/AFloorPlan4';
import AFloorPlan5 from './components/Floor/AFloorPlan5';
import AFloorPlan6 from './components/Floor/AFloorPlan6';

import BFloorPlan1 from './components/Floor/AFloorPlan1';
import BFloorPlan2 from './components/Floor/AFloorPlan2';
import BFloorPlan3 from './components/Floor/AFloorPlan3';
import BFloorPlan4 from './components/Floor/AFloorPlan4';
import BFloorPlan5 from './components/Floor/AFloorPlan5';
import BFloorPlan6 from './components/Floor/AFloorPlan6';

import CFloorPlan1 from './components/Floor/AFloorPlan1';
import CFloorPlan2 from './components/Floor/AFloorPlan2';
import CFloorPlan3 from './components/Floor/AFloorPlan3';
import CFloorPlan4 from './components/Floor/AFloorPlan4';
import CFloorPlan5 from './components/Floor/AFloorPlan5';
import CFloorPlan6 from './components/Floor/AFloorPlan6';


import OpenVRIntegration from './components/VR/OpenVRIntegration';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<BuildingMap />} />
        <Route path="/floor" element={<Floor />} />
        <Route path="/apartment" element={<Apartment />} />

        <Route path="/buildingA" element={<BuildingAPage />} />
        <Route path="/buildingB" element={<BuildingBPage />} />
        <Route path="/buildingC" element={<BuildingCPage />} />

        <Route path="/map/buildingA" element={<BuildingAPage />} />
        <Route path="/map/buildingB" element={<BuildingBPage />} />
        <Route path="/map/buildingC" element={<BuildingCPage />} />

        <Route path="/map/buildingA/AFloorPlan1" element={<AFloorPlan1 />} />
        <Route path="/map/buildingA/AFloorPlan2" element={<AFloorPlan2 />} />
        <Route path="/map/buildingA/AFloorPlan3" element={<AFloorPlan3 />} />
        <Route path="/map/buildingA/AFloorPlan4" element={<AFloorPlan4 />} />
        <Route path="/map/buildingA/AFloorPlan5" element={<AFloorPlan5 />} />
        <Route path="/map/buildingA/AFloorPlan6" element={<AFloorPlan6 />} />

        <Route path="/map/buildingB/BFloorPlan1" element={<BFloorPlan1 />} /> 
        <Route path="/map/buildingB/BFloorPlan2" element={<BFloorPlan2 />} /> 
        <Route path="/map/buildingB/BFloorPlan3" element={<BFloorPlan3 />} /> 
        <Route path="/map/buildingB/BFloorPlan4" element={<BFloorPlan4 />} /> 
        <Route path="/map/buildingB/BFloorPlan5" element={<BFloorPlan5 />} /> 
        <Route path="/map/buildingB/BFloorPlan6" element={<BFloorPlan6 />} /> 

        <Route path="/map/buildingC/CFloorPlan1" element={<CFloorPlan1 />} /> 
        <Route path="/map/buildingC/CFloorPlan2" element={<CFloorPlan2 />} /> 
        <Route path="/map/buildingC/CFloorPlan3" element={<CFloorPlan3 />} /> 
        <Route path="/map/buildingC/CFloorPlan4" element={<CFloorPlan4 />} /> 
        <Route path="/map/buildingC/CFloorPlan5" element={<CFloorPlan5 />} /> 
        <Route path="/map/buildingC/CFloorPlan6" element={<CFloorPlan6 />} /> 


        //? Building A ------------------------------------------------------------------------------------
        //! Building A Floor 1
        <Route
          path="/map/buildingA/AFloorPlan1/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan1/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan1/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building A Floor 2
        <Route
          path="/map/buildingA/AFloorPlan2/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan2/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan2/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building A Floor 3
        <Route
          path="/map/buildingA/AFloorPlan3/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan3/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan3/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building A Floor 4
        <Route
          path="/map/buildingA/AFloorPlan4/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan4/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan4/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building A Floor 5
        <Route
          path="/map/buildingA/AFloorPlan5/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan5/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan5/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building A Floor 6
        <Route
          path="/map/buildingA/AFloorPlan6/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan6/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan6/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //? Building B ------------------------------------------------------------------------------------
        //! Building B Floor 1
        <Route
          path="/map/buildingB/BFloorPlan1/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan1/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan1/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building B Floor 2
        <Route
          path="/map/buildingB/BFloorPlan2/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan2/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan2/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building B Floor 3
        <Route
          path="/map/buildingB/BFloorPlan3/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan3/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan3/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building B Floor 4
        <Route
          path="/map/buildingB/BFloorPlan4/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan4/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan4/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building B Floor 5
        <Route
          path="/map/buildingB/BFloorPlan5/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan5/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan5/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building B Floor 6
        <Route
          path="/map/buildingB/BFloorPlan6/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan6/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingB/BFloorPlan6/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //? Building C ------------------------------------------------------------------------------------
        //! Building C Floor 1
        <Route
          path="/map/buildingC/CFloorPlan1/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan1/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan1/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building C Floor 2
        <Route
          path="/map/buildingC/CFloorPlan2/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan2/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan2/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building C Floor 3
        <Route
          path="/map/buildingC/CFloorPlan3/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan3/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan3/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building C Floor 4
        <Route
          path="/map/buildingC/CFloorPlan4/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan4/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan4/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building C Floor 5
        <Route
          path="/map/buildingC/CFloorPlan5/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan5/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan5/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

        //! Building C Floor 6
        <Route
          path="/map/buildingC/CFloorPlan6/Pano/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan6/Pano/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingC/CFloorPlan6/Pano/Type3"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type3/" />}
        />

      </Routes>
      <NavBar />
      <CardPopup />
    </Router>
  );
}

export default App;



const Body: React.FC = () => {
  return (
    <>
      {/* <div className="" style={{ outline: '1px solid red' }}/> ใช้ className ที่เราตั้งไว้ใน CSS */}
    </>
  );
};

const FooterCard: React.FC = () => {
  return <div className="card w-auto bg-primary text-primary-content">
    {/* <h2 className="card-title">Card title!</h2> */}
  </div>;
}


{/* <div className=" border" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>

<BuildingMap />
<Body />
<footer className="footer footer-start p-4 bg-base-300 text-base-content mt-auto z-10" >
  <aside>
    <FooterCard />
  </aside>
</footer>
</div> */}
