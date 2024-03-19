import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { AiOutlineExpand } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLayout } from "react-icons/ai";
import { AiOutlineCodeSandbox } from "react-icons/ai";

const NavBar: React.FC = () => {
    return (
        //  <div className="navigation bg-gray shadow-lg py-5">
        // <div className="container flex-1" style={{ outline: '1px solid red' }}>
        <div className="navbar bg-white py-2 mx-1 my-1 space-x- " style={{ outline: '1px solid red' }}>
            {/* //? Mobile Mode Display */}
            {/* <div className="container lg:hidden"> */}
            <MobileMode />
            {/* </div> */}
            {/* //? PC Mode Display */}
            {/* <div className="container " style={{ outline: '1px solid red' }}> */}
            <div className="navbar-start w-auto hidden lg:flex">
                {ButtonTextIcon(FiMapPin, "PHUKET", "btn btn-neutral rounded-none rounded-l-xl")}
                {ButtonTextIcon(AiOutlineExpand, "THE MOMENTUM", "btn btn-neutral rounded-none ")}
                {ButtonTextIcon(AiFillHome, "BUILDING", "btn btn-neutral rounded-none ")}
                {ButtonTextIcon(AiOutlineLayout, "FLOOR", "btn btn-neutral rounded-none ")}
                {ButtonTextIcon(AiOutlineCodeSandbox, "APARTMENT", "btn btn-neutral rounded-none rounded-r-xl")}
            </div>
            <div className="navbar-center w-auto px-2  hidden lg:flex">
                {ButtonText("EN", "btn btn-neutral rounded-none rounded-l-xl")}
                {ButtonText("RU", "btn btn-neutral rounded-none rounded-r-xl")}
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
            {/* <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Item 1</a></li>
                    <li>
                        <details>
                            <summary>Parent</summary>
                            <ul className="p-2">
                                <li><a>Submenu1</a></li>
                                <li><a>Submenu2</a></li>
                            </ul>
                        </details>
                    </li>
                    <li><a>Item 3</a></li>
                </ul>
            </div> */}
            {/* </div> */}
        </div>
        // </div >
    )
};
const PCMode: React.FC = () => {
    return <div className="navbar-start w-auto hidden lg:flex">
        {ButtonTextIcon(FiMapPin, "PHUKET", "btn btn-neutral rounded-none rounded-l-xl")}
        {ButtonTextIcon(AiOutlineExpand, "THE MOMENTUM", "btn btn-neutral rounded-none ")}
        {ButtonTextIcon(AiFillHome, "BUILDING", "btn btn-neutral rounded-none ")}
        {ButtonTextIcon(AiOutlineLayout, "FLOOR", "btn btn-neutral rounded-none ")}
        {ButtonTextIcon(AiOutlineCodeSandbox, "APARTMENT", "btn btn-neutral rounded-none rounded-r-xl")}
    </div>;
}

const MobileMode: React.FC = () => {
    return <div className="navbar-start lg:hidden">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                    <a>Parent</a>
                    <ul className="p-2">
                        <li><a>Submenu 1</a></li>
                        <li><a>Submenu 2</a></li>
                    </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
        </div>
    </div>;
}

function ButtonTextIcon(Icon, text, classStyle) {
    return (
        // <div className="container w-auto ">
        <button className={classStyle}>
            <Icon />
            <span>{text}</span>
        </button >
        // </div >
    );
}
function ButtonText(text, classStyle) {
    return (
        // <div className="container w-auto">
        <button className={classStyle}>
            <span>{text}</span>
        </button >
        // </div >
    );
}

// function createButton(className, text, xmlns) {
//     return (
//         <div className="container w-auto">
//             <button className={className}>
//                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox={`0 0 ${xmlns.width} ${xmlns.height}`} xmlns={xmlns.value}>
//                     <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
//                 </svg>
//                 <span>{text}</span>
//             </button>
//         </div>
//     );
// }

// const NavBar: React.FC = () => {
//     return (
//         //  <div className="navigation bg-gray shadow-lg py-5">
//         // <div className="container flex-1" style={{ outline: '1px solid red' }}>
//         <div className="navbar bg-white py-2 mx-1 my-1 " style={{ outline: '1px solid red' }}>
//             {/* //? Mobile Mode Display */}
//             {/* <div className="container lg:hidden"> */}
//             <div className="navbar-start" >
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="">
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//                     </div>
//                     <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
//                         <li><a>Item 1</a></li>
//                         <li>
//                             <a>Parent</a>
//                             <ul className="p-2">
//                                 <li><a>Submenu 1</a></li>
//                                 <li><a>Submenu 2</a></li>
//                             </ul>
//                         </li>
//                         <li><a>Item 3</a></li>
//                     </ul>
//                 </div>
//                 <a className="btn btn-ghost text-xl">daisyUI</a>
//             </div>
//             {/* </div> */}
//             {/* //? PC Mode Display */}
//             {/* <div className="container " style={{ outline: '1px solid red' }}> */}
//             <div className="navbar-start">
//                 <a className="btn btn-ghost text-xl w-auto">daisyUI</a>
//             </div>
//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     <li><a>Item 1</a></li>
//                     <li>
//                         <details>
//                             <summary>Parent</summary>
//                             <ul className="p-2">
//                                 <li><a>Submenu1</a></li>
//                                 <li><a>Submenu2</a></li>
//                             </ul>
//                         </details>
//                     </li>
//                     <li><a>Item 3</a></li>
//                 </ul>
//             </div>
//             <div className="navbar-end">
//                 <a className="btn">Button</a>
//             </div>
//             {/* </div> */}
//         </div>
//         // </div >
//     )
// };
export default NavBar
