import React from "react";
import { Link } from "react-router-dom";
import  { BiUserCircle } from 'react-icons/bi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { HiXMark } from 'react-icons/hi2';
import { AiOutlineMenu } from 'react-icons/ai';
import { useState } from "react";


export const Navbar = () => {
    const [isShowNav, setIsShowNav] = useState(true);
    const [isHideNav, setIsHideNav] = useState(false);
    const [isNav, setIsNav] = useState('[-1000px]');

    const menuClicked = () => {
        setIsHideNav(true);
        setIsShowNav(false);
        setIsNav('0');
    }
    const closeMenuClicked = () => {
        setIsHideNav(false);
        setIsShowNav(true);
        setIsNav('[-1000px]');
    }
    return(
        <>
        <nav className="bg-[#000C23] flex items-center justify-around p-[10px]">
            <div><Link to='/' className="uppercase font-[900] text-[25px]  text-[#fff] z-10 relative"> AllFurniture</Link></div>
            <ul className={`flex-col items-start gap-[25px] md:gap-[35px] flex md:flex-row md:justify-center fixed bg-[#000C23] duration-500 ease-in animation left-${[isNav]} md:left-0 w-[50%] top-0 px-[20px] md:px-0   py-[100px] bottom-0 md:py-[10px] md:relative`}>
                <li><Link to='/' className="text-[20px]   font-[400] text-[#fff] ">Home</Link></li>
                <li><Link to='/modern' className="text-[20px]  font-[400] text-[#fff] ">Modern Furniture</Link></li>
                <li><Link to='/art' className="text-[20px]  font-[400] text-[#fff] ">Art Design Furniture</Link></li>
                <li><Link to='/about' className="text-[20px]  font-[400] text-[#fff] ">About</Link></li>
                <li><Link to='/contact' className="text-[20px]  font-[400] text-[#fff] ">Contact</Link></li>
            </ul>
       <div className="flex flex-row items-center justify-center gap-[10px] ">
        <div className="flex flex-row items-center gap-[10px] justify-center">
            <Link><BiUserCircle className="text-[#fff] text-[30px] "/></Link>
            <Link><BsFillCartCheckFill className="text-[#fff] text-[30px] "/></Link>
        </div>
        <div className="flex md:hidden flex-row items-center justify-center gap-[10px]">
           {isShowNav && <AiOutlineMenu onClick={menuClicked}  className="text-[#fff] text-[30px] "/>}
           { isHideNav && <HiXMark onClick={closeMenuClicked} className="text-[#fff] text-[30px] "/>}
        </div>
       </div>
        </nav>
        </>
    )
}