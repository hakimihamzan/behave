import React from "react"

function SideNavbarItem({icon, title}) {
  return (
    <div className="flex items-center space-x-3 cursor-pointer">
      { icon }
      <h1 className="text-xl">{ title }</h1>
    </div>
  )
}

export default SideNavbarItem
