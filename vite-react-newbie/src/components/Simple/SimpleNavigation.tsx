import React from 'react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


const SimpleNavigation: React.FC = () => {
    return (
        <div className="navigation">
            <ul>
                <li><a href="#">Homes</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    );
};
export default SimpleNavigation
