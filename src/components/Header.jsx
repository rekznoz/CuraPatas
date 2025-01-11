export default function Header() {
    return (
        <header className="header">
            <div className="header-top">
                <span className="header-contact">
                    Pide cita: 956 00 00 00 / 611 00 00 00
                </span>
                <span className="header-hours">
                    Horario: Lunes a Viernes de 9 a 21 hrs. | Sábados de 10:30 a 13:30
                </span>
            </div>
            <div className="header-main">
                <div className="logo">
                    <img src="logo.png" alt="CuraPatas"/>
                </div>
                <nav className="nav">
                    <ul>
                        <li><a href="#">INICIO</a></li>
                        <li><a href="#">NUESTRO EQUIPO</a></li>
                        <li><a href="#">SERVICIOS</a></li>
                        <li><a href="#">PACIENTES</a></li>
                        <li><a href="#">EVENTOS</a></li>
                        <li><a href="#">CONTACTO</a></li>
                        <li><a href="#">SUGERENCIAS</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}