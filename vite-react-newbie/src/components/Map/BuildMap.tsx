import React from 'react';
import BuildingA from '../../assets/A_Building.png';
import BuildingB from '../../assets/B_Building.png';
import BuildingC from '../../assets/C_Building.png';
// import BuildingAPage from './BuildingAPage'; // เรียกใช้ Component ของหน้า BuildingA
// import BuildingBPage from './BuildingBPage'; // เรียกใช้ Component ของหน้า BuildingB
// import BuildingCPage from './BuildingCPage'; // เรียกใช้ Component ของหน้า BuildingC
import './BuildMap.css';

function openBuildingPage(buildingName = "") {
    // สร้าง URL หรือ path สำหรับแต่ละอาคาร
    let url;
    switch (buildingName) {
        case 'BuildingA':
            // กำหนด URL หรือ path สำหรับหน้า BuildingA
            url = '/buildingA';
            break;
        case 'BuildingB':
            // กำหนด URL หรือ path สำหรับหน้า BuildingB
            url = '/buildingB';
            break;
        case 'BuildingC':
            // กำหนด URL หรือ path สำหรับหน้า BuildingC
            url = '/buildingC';
            break;
        default:
            // หากไม่มีอาคารที่ตรงกับชื่อที่กำหนด ไม่ต้องทำอะไร
            return;
    }

    // เปิดหน้าใหม่โดยนำไปสู่ URL หรือ path ที่กำหนด
    window.open(url, '_blank');
}


function BuildMap() {
    return (
        <div className='absolute -z-10' style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' ,outline: '1px solid green' }}>
            <img src="https://decproduction.ddns.net/Image/React/002.jpg" alt="Map" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <img src={BuildingA} alt="BuildingA" className="building" style={{ position: 'absolute', top: '45.5%', left: '18.5%', transform: 'translate(-50%, -50%) scale(2.75)' }} onClick={() => openBuildingPage('BuildingA')} />
            <img src={BuildingB} alt="BuildingB" className="building" style={{ position: 'absolute', top: '61.5%', left: '42.9%', transform: 'translate(-50%, -50%) scale(2.75)' }} onClick={() => openBuildingPage('BuildingB')} />
            <img src={BuildingC} alt="BuildingC" className="building" style={{ position: 'absolute', top: '62%', left: '69.5%', transform: 'translate(-50%, -50%) scale(2.73)' }} onClick={() => openBuildingPage('BuildingC')} />
        </div>
    );
}


export default BuildMap;
