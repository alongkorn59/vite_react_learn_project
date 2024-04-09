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

// import FloorPlan1 from './components/Floor/FloorPlan1';
// import FloorPlan2 from './components/Floor/FloorPlan2';
// import FloorPlan3 from './components/Floor/FloorPlan3';
// import FloorPlan4 from './components/Floor/FloorPlan4';
// import FloorPlan5 from './components/Floor/FloorPlan5';
// import FloorPlan6 from './components/Floor/FloorPlan6';

// import FloorPlan1 from './components/Floor/FloorPlan1';
// import FloorPlan2 from './components/Floor/FloorPlan2';
// import FloorPlan3 from './components/Floor/FloorPlan3';
// import FloorPlan4 from './components/Floor/FloorPlan4';
// import FloorPlan5 from './components/Floor/FloorPlan5';
// import FloorPlan6 from './components/Floor/FloorPlan6';

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

        {/* <Route path="/floor/BFloorPlan1" element={<AFloorPlan1 />} />
        <Route path="/floor/BFloorPlan2" element={<AFloorPlan2 />} />
        <Route path="/floor/BFloorPlan3" element={<AFloorPlan3 />} />
        <Route path="/floor/BFloorPlan4" element={<AFloorPlan4 />} />
        <Route path="/floor/BFloorPlan5" element={<AFloorPlan5 />} />
        <Route path="/floor/BFloorPlan6" element={<AFloorPlan6 />} />
        
        <Route path="/floor/CFloorPlan1" element={<AFloorPlan1 />} />
        <Route path="/floor/CFloorPlan2" element={<AFloorPlan2 />} />
        <Route path="/floor/CFloorPlan3" element={<AFloorPlan3 />} />
        <Route path="/floor/CFloorPlan4" element={<AFloorPlan4 />} />
        <Route path="/floor/CFloorPlan5" element={<AFloorPlan5 />} />
        <Route path="/floor/CFloorPlan6" element={<AFloorPlan6 />} /> */}
        //! Building A
        <Route
          path="/map/buildingA/AFloorPlan1/OpenVRIntegration/Type2"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type1/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan1/OpenVRIntegration/Type1"
          element={<OpenVRIntegration url="https://decproduction.ddns.net/CrescentBayVillaPhuket/Type2/" />}
        />
        <Route
          path="/map/buildingA/AFloorPlan1/OpenVRIntegration/Type1"
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
