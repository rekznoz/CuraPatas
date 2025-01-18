import logo from '../assets/logo.png';
import {Link} from "react-router-dom";
import claro from '../assets/navbar/claro.png';
import oscuro from '../assets/navbar/oscuro.png';
import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContext.jsx";

export default function Header() {

    const [modo, setModo] = useState('claro')
    const {login, user, logout, isAuthenticated} = useContext(AuthContext);

    const toggleMenu = () => {
        const navMenu = document.getElementById('nav-menu');
        navMenu.classList.toggle('show');
    }

    const cambiarModo = () => {
        setTimeout(() => {
            const nuevoModo = modo === 'claro' ? 'oscuro' : 'claro'
            setModo(nuevoModo)
            document.body.classList.toggle('modo-oscuro')
        }, 300)
    }

    const mostarLogin = () => {
        const modal = document.getElementById('modal-login-registro')
        modal.style.display = 'block'
    }

    return (
        <header className="header">
            <div className="header-top">
                <span className="header-contact">
                    Pide cita: 956 00 00 00 / 611 00 00 00
                </span>
                <span className="header-hours">
                    Horario: Lunes a Viernes de 9 a 21 hrs. | Sábados de 10:30 a 13:30
                </span>
                <span className="oscuro-claro">
                    {
                        modo === 'claro' ?
                            <img src={oscuro} alt="Modo oscuro" onClick={cambiarModo}/>
                            :
                            <img src={claro} alt="Modo claro" onClick={cambiarModo}/>
                    }
                </span>
            </div>
            <div className="header-main">
                <div className="logo">
                    <img src={logo} alt="CuraPatas"/>
                </div>
                <button className="hamburger" id="hamburger" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className="nav" id="nav-menu">
                    <ul>
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/mascotas">MASCOTAS</Link></li>
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="/">INICIO</Link></li>
                        <li><Link to="contacto">CONTACTO</Link></li>
                        {
                            isAuthenticated ?
                                <>
                                    <li><Link to={`/usuario/${user.username}`}>PERFIL</Link></li>
                                    <li><span onClick={logout}>LOGOUT</span></li>
                                </>

                                :
                                <li><span onClick={mostarLogin}>LOGIN</span></li>

                        }
                    </ul>
                </nav>
            </div>
        </header>
    )
}