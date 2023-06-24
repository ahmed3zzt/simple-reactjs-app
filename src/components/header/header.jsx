import React from "react";
import { BiUserCircle } from "react-icons/bi";
import { CiMenuBurger } from "react-icons/ci";
import './header.css'
export function Nav() {
    return(
    <>
        <nav className=" shadow-lg">
            <div className="w-[80%] mx-auto">
                <div className=" hidden md:flex items-center justify-between p-4">
                    <div className="logo">
                        <a href="/" className="text-2xl">Ahmed Ezzt</a>
                    </div>
                    <ul className=" hidden md:flex items-center gap-4 text-gray-400">
                        <li className="cursor-pointer text-gray-700 ">Home</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">About</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">services</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">plans</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">News & updates</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">Financial Tools</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">Contact</li>
                    </ul>
                    <div className=' hidden md:flex items-center gap-2 text-blue-500 group'>
                        <BiUserCircle style={{"font-size":"22px"}}/>
                        <p className="font-bold"> login </p>
                    </div>
                </div>
                <div className=" md:hidden flex flex-wrap items-center justify-between p-4">
                    <div className="logo">
                        <a href="/" className="text-2xl">Ahmed Ezzt</a>
                    </div>
                    <input type="checkbox" id="burger" name="burger" className="hidden"/>
                    <label for="burger" className="cursor-pointer"><CiMenuBurger style={{"font-size":"28px","font-weight":"bold"}}/></label>
                    <ul className="mb-menu h-0 opacity-0 transition-all flex flex-col w-[100%] items-start mt-4 gap-4 text-gray-400">
                        <li className="cursor-pointer text-gray-700 ">Home</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">About</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">services</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">plans</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">News & updates</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">Financial Tools</li>
                        <li className="cursor-pointer hover:text-gray-700 transition-all   ">Contact</li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
    )
}