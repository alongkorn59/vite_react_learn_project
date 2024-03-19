import React from 'react'

const NavBar: React.FC = () => {
    return (
        //  <div className="navigation bg-gray shadow-lg py-5">
        <div className="container" style={{ outline: '1px solid red' }}>
            <div className="navbar bg-white py-2">
                {/* //? Mobile Mode Display */}
                <div className="container lg:hidden">
                    <div className="navbar-start w-auto " >
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
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                </div>
                {/* //? PC Mode Display */}
                <div className="container " style={{ outline: '1px solid red' }}>
                    <div className="navbar-start">
                        <a className="btn btn-ghost text-xl w-auto">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
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
                    </div>
                    <div className="navbar-end">
                        <a className="btn">Button</a>
                    </div>
                </div>
            </div>
        </div >
    )
};
export default NavBar
