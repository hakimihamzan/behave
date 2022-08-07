import React from "react"
import { FaSignOutAlt } from "react-icons/fa"
import {
  AiTwotoneSave,
  AiTwotoneSetting,
  AiOutlineUser,
  AiOutlineLeftCircle,
} from "react-icons/ai"
import { FiHome } from "react-icons/fi"
import SideNavbarItem from "./SideNavbarItem"

function SideNavbar() {
  const collapse = (e)=>{
    console.log('Hi')
    //TODO add logic to move container when clicked
  }
  
  return (
    <div className="w-full h-full hidden" id="sidebarContainer" >
      <div className="bg-gray-900 bg-opacity-75 w-full h-full z-0 absolute top-0 left-0" onClick={collapse}>
      </div>
      <div className="bg-gray-600 w-3/4 h-full z-10 absolute top-0 left-0">
        <div className="h-full flex flex-col items-center justify-between p-24 relative">
          <div onClick={collapse} className="absolute top-1/2 right-0 transform translate-x-3 -translate-y-1/2 text-xl text-gray bg-gray-600 rounded-full p-1">
            <AiOutlineLeftCircle />
          </div>
          <div>
            <SideNavbarItem icon={<FiHome />} title="Home" />
            <SideNavbarItem icon={<AiTwotoneSave />} title="Notes" />
            <SideNavbarItem icon={<AiOutlineUser />} title="Profile" />
            <SideNavbarItem icon={<AiTwotoneSetting />} title="Setting" />
          </div>
          <SideNavbarItem icon={<FaSignOutAlt />} title="Logout" />
        </div>
      </div>
    </div>
  )
}

export default SideNavbar
