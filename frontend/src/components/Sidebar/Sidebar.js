import './Sidebar.css'
import logo from '../../assets/img/devPonto.png'
import { Link } from 'react-router-dom'

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
   return (
      <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
         <div className="sidebar__title">
            <div className="sidebar__img">
               <img src={logo} alt="logo" />
               <h1>Dev Ponto</h1>
            </div>

            <i
            onClick={() => closeSidebar()}
            className="fa fa-times"
            id="sidebarIcon"
            aria-hidden="true"
            ></i>
         </div>
         <div className="sidebar__menu">
            <div className="sidebar__link active_menu_link">
               <i className="fa fa-clock"></i>
               <Link to={"/"}> Marcar Ponto</Link>
            </div>
            <h2>Ponto</h2>
            <div className="sidebar__link">
               <i className="fa fa-tachometer"></i>
               <Link to={"frequencia"}>Frequência</Link>
            </div>
            <div className="sidebar__link">
               <i className="fa fa-book"></i>
               <Link to={"espelho"}>Espelho</Link>
            </div>
            <div className="sidebar__link">
               <i className="fa fa-user"></i>
               <Link to={"user"}>Usuário</Link>
            </div>
            <div className="sidebar__link">
               <i className="fa fa-sign-out"></i>
               <Link to={"frequencia"}>Sair</Link>
            </div>
         </div>

      </div>
   )
}


export default Sidebar