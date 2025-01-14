import React from "react";

import "../css/perfilesusuario.css";

export default function PerfilUsuario() {
    return (
        <>
            <div className="area1">
                <div className="encabezado-perfil">
                    <img className="foto-perfil" src="https://mighty.tools/mockmind-api/content/human/122.jpg"
                         alt="profile"/>
                    <div className="nombre-perfil">Rafita</div>
                    <div className="rol-perfil">Admin</div>
                    <button className="boton-editar-usuario-perfil">Editar Perfil</button>
                </div>
            </div>
            <div className="area2">
                <div className="informacion-perfil-usuario">
                    <div className="bloque-informacion">
                        <h4>Descripción</h4>
                        <p>Lalalalalallallalaalalala</p>
                    </div>
                    <div className="bloque-informacion">
                        <h4>Ubicación</h4>
                        <p>Ciudad, País</p>
                    </div>
                    <div className="bloque-informacion">
                        <h4>Teléfono</h4>
                        <p>+34 000 00 00 0 </p>
                    </div>
                    <div className="bloque-informacion">
                        <h4>Email</h4>
                        <p>rafita@rafi.com</p>
                    </div>
                    <div className="bloque-informacion">
                        <h4>Fecha de Registro</h4>
                        <p>12/01/2025</p>
                    </div>
                </div>
            </div>
            <div className="area3">
                <div className="seccion-mascotas-perfil">

                    <div className="encabezado-seccion-mascotas">
                        <h3>Mascotas Registradas</h3>
                        <button>Editar Mascotas</button>
                    </div>

                    <div className="lista-mascotas">
                        <div className="carta-mascota">
                            <img className="foto-mascota"
                                 src="https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U"
                                 alt="mascota"/>
                            <div className="detalles-mascota">
                                <p className="nombre-mascota">Perrito Plox</p>
                                <p className="informacion-mascota">Perro - 3 años - Vacunado</p>
                            </div>
                        </div>
                    </div>

                    <div className="formulario-agregar-mascota">
                        <h4>Agregar Mascota</h4>
                        <form>
                            <input type="text" placeholder="Nombre"/>
                            <input type="text" placeholder="Especie"/>
                            <input type="text" placeholder="Edad"/>
                            <input type="text" placeholder="Vacunas"/>
                            <button>Agregar</button>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}