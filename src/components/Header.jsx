import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo.png";
import claro from "../assets/navbar/claro.png";
import oscuro from "../assets/navbar/oscuro.png";
import {AuthContext} from "../context/AuthContext.jsx";

export default function Header() {
    const [modo, setModo] = useState("claro");
    const {login, user, logout, isAuthenticated} = useContext(AuthContext);

    const navLinks = [
        {path: "/", label: "INICIO"},
        {path: "/mascotas", label: "MASCOTAS"},
        {path: "contacto", label: "CONTACTO"},
    ];

    const toggleMenu = () => {
        const navMenu = document.getElementById("nav-menu-hamburger");
        navMenu.classList.toggle("show");
    };

    const cambiarModo = () => {
        setTimeout(() => {
            const nuevoModo = modo === "claro" ? "oscuro" : "claro";
            setModo(nuevoModo);
            document.body.classList.toggle("modo-oscuro");
        }, 300);
    };

    const mostrarLogin = () => {
        const modal = document.getElementById("modal-login-registro");
        modal.style.display = "block";
    };

    return (
        <header className="header">
            <div className="header-top">
                <span className="header-contact">Pide cita: 956 00 00 00 / 611 00 00 00</span>
                <span className="header-hours">
                    Horario: Lunes a Viernes de 9 a 21 hrs. | Sábados de 10:30 a 13:30
                </span>
                <span className="oscuro-claro">
                    <img
                        src={modo === "claro" ? oscuro : claro}
                        alt={`Modo ${modo}`}
                        onClick={cambiarModo}
                    />
                </span>
            </div>
            <div className="header-main">
                <div className="logo">
                    <img src={logo} alt="CuraPatas"/>
                </div>
                <button
                    className="hamburger"
                    id="hamburger"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    ☰
                </button>
                <nav className="nav" id="nav-menu">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <Link to={`/usuario/${user.nombreUsuario}`}>PERFIL</Link>
                                </li>
                                <li>
                                    <span onClick={logout}>LOGOUT</span>
                                </li>
                            </>
                        ) : (
                            <li>
                                <span onClick={mostrarLogin}>LOGIN</span>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
            <div className="nav-menu-movil" id="nav-menu-hamburger">
                <nav className="nav-hamburger">
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.path}>
                                <Link to={link.path}>{link.label}</Link>
                            </li>
                        ))}
                        {isAuthenticated ? (
                            <>
                                <li>
                                    <Link to={`/usuario/${user.nombreUsuario}`}>PERFIL</Link>
                                </li>
                                <li>
                                    <span onClick={logout}>LOGOUT</span>
                                </li>
                            </>
                        ) : (
                            <li>
                                <span onClick={mostrarLogin}>LOGIN</span>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
