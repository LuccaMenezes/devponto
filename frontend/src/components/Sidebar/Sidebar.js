import React from 'react'
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <main>
      <header className={styles.header}>
         <div className="header-toggle">
            <i class='fas fa-bars'></i>
         </div>
      </header>

      <aside className="sidebar">
         <nav className="nav">
            <div>
               <Link to="/" className="nav-link">
                  <i className="fa-solid fa-clock nav-link-icon"></i>
                  <span className="nav-link-name">Marcar Ponto</span>
               </Link>
               
               <div className="nav-list">
               <Link to="/login" className="nav-link">
                  <i className="fa-solid fa-user-clock nav-link-icon"></i>
                  <span className="nav-link-name">Frequência</span> 
               </Link>
               <Link to="/login" className="nav-link">
                  <i className="fa-solid fa-book nav-link-icon"></i>
                  <span className="nav-link-name">Espelho</span> 
               </Link>
               <Link to="/login" className="nav-link">
                  <i className="fa-solid fa-user nav-link-icon"></i>
                  <span className="nav-link-name">Usuário</span> 
               </Link>
               </div>
            </div>

            <Link to="/login" className="nav-link">
                  <i className="fa-solid fa-sign-out nav-link-icon"></i>
                  <span className="nav-link-name">Sair</span> 
               </Link> 
         </nav>
      </aside>

      <h1>Content</h1>
    </main>
  )
}

export default Sidebar