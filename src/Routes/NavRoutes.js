import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BuyersPage from '../pages/BuyersPage';
import StaffPage from '../pages/StaffPage';
import BusinessPage from '../pages/BusinessPage';

const NavRoutes = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<BuyersPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/business" element={<BusinessPage />} />
      
    </Routes>
  </Router>
  )
}

export default NavRoutes