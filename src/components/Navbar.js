import React from "react";
import { FaBell } from "react-icons/fa";
import logo from '../assets/logo.png'

function Navbar() {
    return (
        <div className="flex justify-between">
            <a href="/">
                <div className="w-10 h-10 cursor-pointer">
                    <img src={logo} alt="logo" />
                </div>
            </a>
            <div className="flex space-x-5 justify-center items-center gap-3">
                <FaBell className="cursor-pointer" />
                <div className="flex cursor-pointer">
                    <div className="w-7 h-7 mr-2">
                        <img className="rounded-lg" src="https://avatars.dicebear.com/api/micah/jack.svg?background=%23b0b0b0" alt="avatar" />
                    </div>
                    <div>missingtickets</div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
