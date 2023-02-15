import { Outlet } from 'react-router-dom';

import { useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';



const App = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };
  const closeSidebar = () => {
    setSidebarOpen(false);
  }

  return (
    <div>
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Outlet />
    </div>
  )
}

export default App