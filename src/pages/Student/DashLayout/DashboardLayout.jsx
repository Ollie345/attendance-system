import React from 'react'
import "./DashboardLayout.css"
import Sidebar from "../Sidebar/Sidebar"

const DashboardLayout = ({state, children}) => {
  return (
    <div className='layout'>
        <Sidebar state={state}/>
        <div className='dash-body'>
            {children}
        </div>
    </div>
  )
}

export default DashboardLayout