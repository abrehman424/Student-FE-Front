import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Calendar from './pages/Calendar';
import Inbox from './pages/Inbox';
import RolesPermissions from './pages/RolesPermissions';
import Support from './pages/Support/Support';
import Roles from './pages/Permissions/Roles';

import Profile from './pages/Users/Profile';
import Chatsupport from './pages/Support/Chatsupport';
import AirCraftProfile from './pages/AirCraftProfile';
import AirCraftDetail from './pages/AirCraftProfile/AirCraftDetail';


const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/air-craft-profile" element={<AirCraftProfile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/inbox" element={<Inbox />} />
        <Route path="/roles-permissions" element={<RolesPermissions />} />
        <Route path="/support" element={<Support />} />


        <Route path="/roles-permissions/create" element={<Roles />} />
        
        
        <Route path="/users/profile/:id" element={<Profile />} />

        <Route path="/support/chatsupport" element={<Chatsupport />} />

        <Route path="/air-craft-profile/aircraft/:id" element={<AirCraftDetail />} />





      </Route>
    </Routes>

  );
};

export default App;
