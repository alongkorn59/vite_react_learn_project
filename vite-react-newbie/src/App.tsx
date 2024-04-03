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
import FloorPlan1 from './components/Floor/FloorPlan1';
import FloorPlan2 from './components/Floor/FloorPlan2';
import FloorPlan3 from './components/Floor/FloorPlan3';


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

        <Route path="/floor/FloorPlan1" element={<FloorPlan1 />} />
        <Route path="/floor/FloorPlan2" element={<FloorPlan2 />} />
        <Route path="/floor/FloorPlan3" element={<FloorPlan3 />} />
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
