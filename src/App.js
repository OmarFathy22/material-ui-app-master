import React from 'react';
import './App.css';
import Root from "./root"
import Home from "./pages/linksPages/home"
import Create from "./pages/create/create"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Profile from 'pages/linksPages/profile';
import Setting from 'pages/linksPages/setting';
import Logout from 'pages/linksPages/logout';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="profile" element={<Profile />} />
      <Route path="setting" element={<Setting />} />
      <Route path="logout" element={<Logout />} />
      {/* ... etc. */}
    </Route>
  )
);

function App() {
  return (
  
    <RouterProvider router={router} />
    
  );
}

export default App;
