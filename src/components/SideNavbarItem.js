import React from "react"

function SideNavbarItem({icon, title}) {
  return (
    <div className="flex items-center space-x-5 cursor-pointer bg-slate-800 opacity-95 rounded-sm px-16 py-2 drop-shadow-xl">
      { icon }
      <h1 className="text-xl">{ title }</h1>
    </div>
  )
}

export default SideNavbarItem
