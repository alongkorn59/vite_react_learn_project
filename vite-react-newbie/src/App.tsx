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
// import About from "./pages/about";
import Apartment from "./pages/blogs";
import Floor from "./pages/contact";
import BuildingAPage from './components/Page/BuildingAPage';
import BuildingBPage from './components/Page/BuildingBPage';
import BuildingCPage from './components/Page/BuildingCPage';


function App() {

  return (
    // <>
    //   <NavBar />
    //   <BuildingMap />
    // </>
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/map" element={<BuildingMap />} />
        <Route path="/floor" element={<Floor />} />
        <Route path="/apartment" element={<Apartment />} />
        <Route path="/buildingA" element={<BuildingAPage />} />
        <Route path="/buildingB" element={<BuildingBPage />} />
        <Route path="/buildingC" element={<BuildingCPage />} />
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
