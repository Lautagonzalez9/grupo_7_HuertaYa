import React from "react";
import LogoDH from "../../assets/images/logo-DH.png";
import LogoHY from "../../assets/images/Logo-Huerta-Ya-JPG_Marca.jpg";
import { Link } from "react-router-dom";

function SideBar(props){
    return(
        <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
        
        {/* <!-- Sidebar - Brand --> */}
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
            <div className="sidebar-brand-icon">
                <img className="w-100" src={LogoHY} alt="Huerta Ya" />
            </div>
        </a>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
            <Link className="nav-link" to="/">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard - Huerta Ya</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Actions</div>

        {/* <!-- Nav Item - Pages --> */}
        <li className="nav-item">
            <Link className="nav-link collapsed" to="/last-product">
                <i className="fas fa-fw fa-folder"></i>
                <span>Último producto</span>
            </Link>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
            <Link className="nav-link" to="/categories">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Categorías</span></Link>
        </li>

        {/* <!-- Nav Item - Tables --> */}
        <li className="nav-item">
            <Link className="nav-link" to="/list">
                <i className="fas fa-fw fa-table"></i>
                <span>Listado de productos</span></Link>
        </li>
         {/* <!-- Nav Item - Tables --> */}
         <li className="nav-item">
            <Link className="nav-link" to="/users">
                <i className="fas fa-fw fa-table"></i>
                <span>Listado de usuarios</span></Link>
        </li>


        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
        
    </ul>
    )
}

export default SideBar;