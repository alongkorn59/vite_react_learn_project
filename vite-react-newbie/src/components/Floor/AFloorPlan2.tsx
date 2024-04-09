import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './AFloorPlan.css';
import Plan from '../../assets/plan/building/A/BuildingA_002.png'; // Import the Building image


function AFloorPlan2() {
    return (
        <div className='absolute -z-10' style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', outline: '1px solid green' }}>
            <img src={Plan} alt="Map" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', maxWidth: '100%', maxHeight: '100%', objectFit: 'cover' }} />
            <g>
                <Link to={"OpenVRIntegration/Type2"} className="building" style={{ position: 'absolute', top: '40%', left: '48.0%', transform: 'translate(-50%, -50%) ' }}>
                    <svg width="150" height="150">
                        <rect id="floor-6" className="highlightA" x="0" y="0" width="150" height="150" />
                    </svg>
                </Link>
                <Link to={"OpenVRIntegration/Type1"} className="building" style={{ position: 'absolute', top: '40%', left: '56.5%', transform: 'translate(-50%, -50%) ' }}>
                    <svg width="150" height="150">
                        <rect id="floor-6" className="highlightA" x="0" y="0" width="150" height="150" />
                    </svg>
                </Link>
            </g>
        </div >
    );
}

export default AFloorPlan2;
