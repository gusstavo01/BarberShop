import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Login } from './pages/login';
import { CreateAccountPage } from './pages/CreateAccount';
import { Dashboard } from './pages/Dashboard';
import { MyAccount } from './pages/MyAccount';
import { DashboardAdm } from './pages/DashboardAdm';
import { LoyaltyCard } from './pages/LoyaltyCard';
import { LoyaltyCardAdm } from './pages/LoyaltyCardAdm';
export const MainRoutes = () => {
 return (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/createAccount" element={<CreateAccountPage />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="/myAccount" element={<MyAccount/>} />
    <Route path="/dashboardAdm" element={<DashboardAdm/>} />
    <Route path="/loyaltyCard" element={<LoyaltyCard />} />
    <Route path="/loyaltyCardAdm" element={<LoyaltyCardAdm/>} />
  </Routes>
 )
}

export default MainRoutes;