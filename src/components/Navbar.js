import React from "react"
import { FaBell } from "react-icons/fa"
import logo from "../assets/logo.png"

function Navbar() {
  return (
    <div className="flex justify-between items-center">
      <a className="" href="/">
        <div className="flex justify-between items-center w-9 h-9 cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
      </a>
      <div className="flex space-x-2 items-center">
        <FaBell className="cursor-pointer hidden md:flex md:mr-5" />
        <div className="flex cursor-pointer ">
          <div className="w-7 h-7">
            <img
              className="rounded-lg"
              src="https://avatars.dicebear.com/api/micah/jack.svg?background=%23b0b0b0"
              alt="avatar"
            />
          </div>
        </div>
        <div className="hidden md:flex">missingtickets</div>
      </div>
    </div>
  )
}

export default Navbar
