import React, { useState } from 'react';

const CardPopup: React.FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <div className="mx-1 my-5 px-5 hidden lg:flex" style={{ outline: '1px solid red' }}>
                    <div className="w-60 bg-base-300 shadow-xl mx-0 relative">
                        {/* Button positioned at top-right */}
                        <button className="btn btn-square btn-sm absolute top-2 right-2 z-10" onClick={handleClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="w-60 h-auto">
                            <figure style={{ pointerEvents: 'none' }}>
                                {/* Image with pointer-events none to allow button clicks */}
                                <img src="https://decproduction.ddns.net/Image/React/momentum.jpg" alt="Shoes" />
                            </figure>
                        </div>
                        <div className="w-auto py-3" style={{ outline: '1px solid green' }}>
                            <h2 className="card-title justify-center">LAGUNA PHUKET</h2>
                            <p className="px-5" style={{ fontSize: '14px' }}>The Momentum Phuket is a mixed community close to Layan Beach. It offers a variety of homes, including condos and villas, and commercial spaces. There are special spots for wellness, food, entertainment, and business or learning activities. With smart home features and green energy, it's a place that combines modern living with nature.</p>
                            <div className="card-actions justify-center py-5">
                                <figure style={{ pointerEvents: 'none' }}>
                                    {/* Image with pointer-events none to allow button clicks */}
                                    <img className="px-10" src="https://decproduction.ddns.net/Image/React/Logo.svg" alt="Shoes" />
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default CardPopup;
