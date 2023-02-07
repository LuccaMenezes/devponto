import { Outlet } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Sidebar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
