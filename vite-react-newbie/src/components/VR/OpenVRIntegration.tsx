import React from 'react';
import { useParams } from 'react-router-dom';

interface OpenVRIntegrationProps {
    url: string;
}

const OpenVRIntegration: React.FC<OpenVRIntegrationProps> = ({ url }) => {
    // ใช้ URL ที่ถูกส่งเข้ามาผ่าน props
    // เช่น
    // console.log(url);

    return (
        <div className='absolute -z-10 inset-0 flex justify-center items-center '>
            <iframe
                title="OpenVR Website"
                src={url}
                width="100%"
                height="100%"
                frameBorder="0"
                allowFullScreen
                style={{ outline: '1px solid green' }}
            />
        </div>
    );
};

export default OpenVRIntegration;
