import React from 'react'
import { FiMapPin } from "react-icons/fi";
import { AiOutlineExpand } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { AiOutlineLayout } from "react-icons/ai";
import { AiOutlineCodeSandbox } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavBar: React.FC = () => {
    return (
        <>
            {/* style={{ outline: '1px solid red' }}> */}
            < div className="navbar py-2 mx-1 my-1 space-x-3 z-10" >
                <MobileMode />
                <DesktopMode />
                {/* style={{ outline: '1px solid red' }}> */}
                <div className="navbar-end flex-1 px-100">
                    {ButtonText("PRESENTATION", "btn btn-warning justify-start")}
                </div>
            </div >
        </>
    )
};
export default NavBar;

const DesktopMode: React.FC = () => {
    return (
        <>
            {/* style={{ outline: '1px solid red' }}> */}
            <div className="navbar-start  w-auto hidden lg:flex " >

                <NavLinkIcon icon={FiMapPin} text="PHUKET" to="/home" classStyle="btn btn-neutral rounded-none rounded-l-xl" isDisabled={false} />
                <NavLinkIcon icon={AiOutlineExpand} text="LAGUNA PHUKET" to="/map" classStyle="w-auto btn btn-neutral rounded-none " isDisabled={false} />
                <BuildingDropDawn />
                <NavLinkIcon icon={AiOutlineLayout} text="FLOOR" to="/floor" classStyle="btn btn-neutral rounded-none" isDisabled={true} />
                <NavLinkIcon icon={AiOutlineCodeSandbox} text="APARTMENT" to="/apartment" classStyle="btn btn-neutral rounded-none rounded-r-xl" isDisabled={true} />
            </div>
            {/* style={{ outline: '1px solid red' }}> */}
            <div className="navbar-center hidden lg:flex">
                {ButtonText("EN", "btn btn-neutral rounded-none rounded-l-xl")}
                {ButtonText("RU", "btn btn-neutral rounded-none rounded-r-xl")}
            </div>
        </>
    );
};

const MobileMode: React.FC = () => {
    return (
        <>
            {/* style={{ outline: '1px solid red' }}> */}
            <div className="navbar-start lg:hidden w-auto">
                <div className="dropdown">
                    {/* <div tabIndex={0} role="button" className="btn m-1">Click</div> */}
                    {ButtonTextIcon(FiMapPin, "PHUKET", "btn btn-neutral ")}
                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>{ButtonTextIcon(FiMapPin, "LAGUNA PHUKET", "btn btn-neutral rounded-none justify-start", false)}</li>
                        <li>{ButtonTextIcon(AiFillHome, "BUILDING", "btn btn-neutral rounded-none justify-start", false)}</li>
                        <li>{ButtonTextIcon(AiOutlineLayout, "FLOOR", "btn btn-neutral rounded-none justify-start", false)}</li>
                        <li>{ButtonTextIcon(AiOutlineCodeSandbox, "APARTMENT", "btn btn-neutral rounded-none rounded-b-xl justify-start", false)}</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

const NavLinkIcon: React.FC<{ icon: React.ElementType, text: string, to: string, classStyle: string, isDisabled: boolean }> = ({ icon, text, to, classStyle, isDisabled }) => {
    const textColor = isDisabled ? 'black' : 'white'; // If isDisabled is true, text color is black, otherwise white
    return (
        <Link to={to} className={classStyle} style={{ color: textColor }}>
            {React.createElement(icon)}
            <span>{text}</span>
        </Link>
    );
}

function ButtonTextIcon(Icon = FiMapPin, text = "", classStyle = "", isDisabled = false) {
    const textColor = isDisabled ? 'black' : 'white'; // If isDisabled is true, text color is black, otherwise white
    return (
        <button className={classStyle} style={{ color: textColor }}>
            <Icon />
            <span>{text}</span>
        </button>
    );
}

function ButtonText(text = "", classStyle = "") {
    return (
        <button className={classStyle}>
            <span>{text}</span>
        </button >
    );
}

const BuildingDropDawn: React.FC = () => {
    return <div className="navbar-start  hidden lg:flex">
        <div className="dropdown">
            {/* <div tabIndex={0} role="button" className="btn m-1">Click</div> */}
            {ButtonTextIcon(AiFillHome, "BUILDING", "btn btn-neutral rounded-none justify-start")}
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>BUILDING 1</a></li>
                <li><a>BUILDING 2</a></li>
                <li><a>BUILDING 3</a></li>
                <li><a>BUILDING 4</a></li>
            </ul>
        </div>
    </div>;
}




// const DesktopMode: React.FC = () => {
//     return (
//         <>
//             <div className="navbar-start  w-auto hidden lg:flex " style={{ outline: '1px solid red' }}>

//                 {ButtonTextIcon(FiMapPin, "PHUKET", "btn btn-neutral rounded-none rounded-l-xl")}
//                 {ButtonTextIcon(AiOutlineExpand, "LAGUNA PHUKET", "w-auto btn btn-neutral rounded-none ")}
//                 <BuildingDropDawn />
//                 {ButtonTextIcon(AiOutlineLayout, "FLOOR", "btn btn-neutral rounded-none", true)}
//                 {ButtonTextIcon(AiOutlineCodeSandbox, "APARTMENT", "btn btn-neutral rounded-none rounded-r-xl", true)}
//             </div>
//             <div className="navbar-center hidden lg:flex" style={{ outline: '1px solid red' }}>
//                 {ButtonText("EN", "btn btn-neutral rounded-none rounded-l-xl")}
//                 {ButtonText("RU", "btn btn-neutral rounded-none rounded-r-xl")}
//             </div>
//             {/* <div role="tablist" className="tabs tabs-bordered">
//                 <a role="tab" className="tab w-auto h-auto"> AAA</a>
//                 <a role="tab" className="tab tab-active w-auto h-auto">BBB</a>
//                 <a role="tab" className="tab w-auto h-auto">CCC</a>
//             </div> */}
//         </>

//     );
// };


