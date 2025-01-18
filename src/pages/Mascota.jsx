import {useNavigate, useParams} from "react-router-dom";
import "../css/mascota.css";

export default function Mascota() {

    const {id} = useParams();
    const navigate = useNavigate();

    const animales = [
        {
            id: 1,
            nombre: 'Max',
            especie: 'Perro',
            raza: 'Labrador',
            edad: 3,
            estadoSalud: 'Bueno',
            duenio: 'Juan Pérez',
            fechaRegistro: '01/15/2025'
        },
        {
            id: 2,
            nombre: 'Luna',
            especie: 'Gato',
            raza: 'Siamés',
            edad: 2,
            estadoSalud: 'Bueno',
            duenio: 'Ana López',
            fechaRegistro: '01/10/2025'
        },
        {
            id: 3,
            nombre: 'Rocky',
            especie: 'Perro',
            raza: 'Bulldog',
            edad: 5,
            estadoSalud: 'Regular',
            duenio: 'Carlos Gómez',
            fechaRegistro: '01/05/2025'
        },
    ];

    const animal = animales.find((animal) => animal.id === parseInt(id));

    if (!animal) {
        return (
            <>
                <div className="area1">
                    <div className="not-found">
                        <h2>Mascota no encontrada</h2>
                        <button onClick={() => navigate('/')}>Volver a la lista</button>
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
                <div className="animal-detail">
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