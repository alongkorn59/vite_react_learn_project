import React from 'react'
import 'daisyui/dist/full.css';

const SimpleNavigation: React.FC = () => {
    return (
        <div className="navigation bg-gray shadow-lg py-5 ">
            <ul className="flex justify-center space-x-6">
                <li><a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">Homes</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">About</a></li>
                <li><a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300">Contact</a></li>
            </ul>
        </div>
    );
};
export default SimpleNavigation


// const SimpleNavigation: React.FC = () => {
//     return (
//         <div className="navigation">
//             <ul>
//                 <li><a href="#">Homes</a></li>
//                 <li><a href="#">About</a></li>
//                 <li><a href="#">Contact</a></li>
//             </ul>
//         </div>
//     );
// };


