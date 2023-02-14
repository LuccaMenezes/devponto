import { Outlet } from 'react-router-dom';

import { useState} from 'react';
import Sidebar from './components/Sidebar/Sidebar';



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
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      <Outlet />
    </div>
  )
}

export default App