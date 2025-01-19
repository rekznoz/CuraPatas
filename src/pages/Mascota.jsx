import {useLoaderData, useNavigate, useParams} from "react-router-dom";
import "../css/mascota.css";
import {useEffect, useState} from "react";

export default function Mascota() {

    const [animal, setAnimal] = useState(null);
    const navigate = useNavigate();
    const cargaDeDatos = useLoaderData();

    useEffect(() => {
        if (cargaDeDatos) {
            setAnimal(cargaDeDatos);
        }
    }, [cargaDeDatos]);

    if (animal === null) {
        return (
            <>
                <div className="area1">
                    <div className="no-encontrado">
                        <h2>Mascota no encontrada</h2>
                        <button onClick={() => navigate('/mascotas')}>Volver a la lista</button>
                    </div>
                </div>
                <div className="area2"></div>
                <div className="area3"></div>
            </>

        );
    }

    return (
        <>
            <div className="area1">
                <h1>Detalles de {animal.nombre}</h1>
            </div>
            <div className="area2">
                <div className="detalles-mascota">
                    <p><strong>Especie:</strong> {animal.especie}</p>
                    <p><strong>Raza:</strong> {animal.raza}</p>
                    <p><strong>Edad:</strong> {animal.edad} años</p>
                    <p><strong>Estado de Salud:</strong> {animal.estadoSalud}</p>
                    <p><strong>Dueño:</strong> {animal.duenio}</p>
                    <p><strong>Registrado el:</strong> {animal.fechaRegistro}</p>
                </div>
            </div>
            <div className="area3">
            </div>
        </>
    );
}