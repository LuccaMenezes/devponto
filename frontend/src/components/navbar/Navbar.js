import { Link } from 'react-router-dom'
import avatar from '../../assets/img/devPonto.png'


const Navbar = ({  sidebarOpen, openSidebar }) => {
   return (
      <nav className="navbar">
         <div className="nav_icon" onClick={() => openSidebar()}>
            <i className="fa fa-bars" aria-hidden="true"></i>
         </div>

         <div className="navbar__left">
            <Link to={"/"}><i className='fa fa-search'></i></Link>
            <Link to={"/"}><i className='fa fa-bell'></i></Link>
            <Link to={"/"}><img width="30" src={avatar} alt="avatar"></img></Link>
         </div>
      </nav>
   )
}

export default Navbar;