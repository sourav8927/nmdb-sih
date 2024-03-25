import React from 'react'
import "./AdmDashboard.css"
import Header from '../Header/Header'
import Dashboard from '../Dashboard/Dashboard'

function AdmDashboard() {
  return (
    <>
      <Header isLoggedIn="false" />
      < Dashboard />
      <div className="AdmDashboard">

      </div>
    </>
  )
}

export default AdmDashboard