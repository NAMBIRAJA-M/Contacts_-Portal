import { Outlet } from "react-router-dom";
import Sidebar from './sidebar';

import React from 'react'

function Layout() {
  return (
    <div className="dashboard" >
      <Sidebar />
      <main style={{ flex: 1, padding: "20px", background: "#f4f4f4" }} className="main-layout-container">
            <Outlet />

        
         </main>
     
    </div>
  )
}

export default Layout;