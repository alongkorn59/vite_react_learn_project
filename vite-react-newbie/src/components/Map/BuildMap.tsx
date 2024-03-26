import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import BuildingA from '../../assets/A_Building.png';
import BuildingB from '../../assets/B_Building.png';
import BuildingC from '../../assets/C_Building.png';
import './BuildMap.css';

function BuildMap() {
    return (
        <div className='absolute -z-10' style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', outline: '1px solid green' }}>
            <img src="https://decproduction.ddns.net/Image/React/002.jpg" alt="Map" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <Link to={"buildingA"} className="building" style={{ position: 'absolute', top: '45.5%', left: '18.5%', transform: 'translate(-50%, -50%) scale(2.75)' }}>
                <img src={BuildingA} alt="BuildingA" />
            </Link>
            <Link to={"buildingB"} className="building" style={{ position: 'absolute', top: '61.5%', left: '42.9%', transform: 'translate(-50%, -50%) scale(2.75)' }}>
                <img src={BuildingB} alt="BuildingB" />
            </Link>
            <Link to={"buildingC"} className="building" style={{ position: 'absolute', top: '62%', left: '69.5%', transform: 'translate(-50%, -50%) scale(2.73)' }}>
                <img src={BuildingC} alt="BuildingC" />
            </Link>
        </div>
    );
}

export default BuildMap;
