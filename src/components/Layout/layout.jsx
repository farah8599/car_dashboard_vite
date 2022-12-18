import React from 'react'
import Router from "../../routes/router";
import Sidebar from "../SideBar/sideBar";
import TopNav from "../TopNav/topNav";

function layout() {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main_layout">
        <TopNav />
        <div className="content">
          <Router />
        </div>
      </div>
    </div>
  )
}

export default layout