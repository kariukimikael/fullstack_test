import React from 'react'

const layout = ({ children}) => {
  return (
    <div className="flex">
      <div className="h-screen border-2 border-red-700 w-[350px] top-0 left-0">
        <h2>SideBar</h2>
      </div>
      {children}
    </div>
  )
}

export default layout