import React from 'react'
import { FaBeer, FaSignOutAlt } from 'react-icons/fa';

function SideNavigation() {
  return (
    <div className='absolute flex flex-col justify-between h-full'>
        <FaBeer />
        <FaBeer />
        <FaBeer />
        <FaSignOutAlt />
    </div>
  )
}

export default SideNavigation