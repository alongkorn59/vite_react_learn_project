import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './BuildMap.css';

function BuildingB() {
    return (
        <div className='absolute -z-10' style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', outline: '1px solid green' }}>
            <img src="https://decproduction.ddns.net/Image/React/building.jpeg" alt="Map" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <Link to={""} className="building" style={{ position: 'absolute', top: '35%', left: '50.0%', transform: 'translate(-50%, -50%) ' }}>
                <svg width="1250" height="85">
                    <rect id="floor-6" className="highlightB" x="0" y="0" width="1250" height="85" />
                </svg>
            </Link>
            <Link to={""} className="building" style={{ position: 'absolute', top: '46%', left: '50.0%', transform: 'translate(-50%, -50%) ' }}>
                <svg width="1250" height="85">
                    <rect id="floor-5" className="highlightB" x="0" y="0" width="1250" height="85" />
                </svg>
            </Link>
            <Link to={""} className="building" style={{ position: 'absolute', top: '56.7%', left: '50.0%', transform: 'translate(-50%, -50%) ' }}>
                <svg width="1250" height="85">
                    <rect id="floor-4" className="highlightB" x="0" y="0" width="1250" height="85" />
                </svg>
            </Link>
            <Link to={""} className="building" style={{ position: 'absolute', top: '67.5%', left: '50.0%', transform: 'translate(-50%, -50%) ' }}>
                <svg width="1250" height="85">
                    <rect id="floor-3" className="highlightB" x="0" y="0" width="1250" height="85" />
                </svg>
            </Link>
            <Link to={""} className="building" style={{ position: 'absolute', top: '78%', left: '50.0%', transform: 'translate(-50%, -50%) ' }}>
                <svg width="1250" height="85">
                    <rect id="floor-2" className="highlightB" x="0" y="0" width="1250" height="85" />
                </svg>
            </Link>
            <Link to={""} className="building" style={{ position: 'absolute', top: '89%', left: '50.0%', transform: 'translate(-50%, -50%) ' }}>
                <svg width="1250" height="85">
                    <rect id="floor-1" className="highlightB" x="0" y="0" width="1250" height="85" />
                </svg>
            </Link>
        </div>
    );
}

export default BuildingB;
