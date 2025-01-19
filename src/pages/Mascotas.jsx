import "../css/mascotas.css";
import {useState} from "react";
import {Link, useLoaderData} from "react-router-dom";

export default function Mascotas() {

    const animales = useLoaderData().data

    const [filtros, setFiltros] = useState({
        especie: '',
        raza: '',
        estadoSalud: '',
    });

    const [paginaActual, setPaginaActual] = useState(1);
    const mascotasPorPagina = 9;

    const animalesFiltrados = animales.filter((animal) => {
        const {especie, raza, estadoSalud} = filtros;

        return (
            (especie === '' || animal.especie.toLowerCase().includes(especie.toLowerCase())) &&
            (raza === '' || animal.raza.toLowerCase().includes(raza.toLowerCase())) &&
            (estadoSalud === '' || animal.estadoSalud.toLowerCase() === estadoSalud.toLowerCase())
        );
    });

    const inicioIndice = (paginaActual - 1) * mascotasPorPagina;
    const mascotasSeleccionadas = animalesFiltrados.slice(inicioIndice, inicioIndice + mascotasPorPagina);
    const totalPaginas = Math.ceil(animalesFiltrados.length / mascotasPorPagina);

    const handlePageChange = (pageNumber) => {
        setPaginaActual(pageNumber);
    };

    const handleFilterChange = (e) => {
        const {name, value} = e.target;
        setFiltros((prevFiltros) => ({
            ...prevFiltros,
            [name]: value,
        }));
    };

    return (
        <>
            <div className="area1">
                <h1>Lista de Mascotas</h1>
            </div>
            <div className="area2">
                <div className="contenedor-filtro-mascotas">
                    <div className="filtros-mascotas">
                        <input
                            type="text"
                            name="especie"
                            placeholder="Buscar por especie"
                            value={filtros.especie}
                            onChange={handleFilterChange}
                        />
                        <input
                            type="text"
                            name="raza"
                            placeholder="Buscar por raza"
                            value={filtros.raza}
                            onChange={handleFilterChange}
                        />
                        <select
                            name="estadoSalud"
                            value={filtros.estadoSalud}
                            onChange={handleFilterChange}
                        >
                            <option value="">Estado de Salud</option>
                            <option value="Bueno">Bueno</option>
                            <option value="Regular">Regular</option>
                        </select>
                    </div>
                    <div className="lista-mascotas">
                        {mascotasSeleccionadas.map((animal, index) => (
                            <Link className="carta-mascotas" key={index} to={`/mascota/${animal._id}`}>
                                <h2>{animal.nombre}</h2>
                                <p><strong>Especie:</strong> {animal.especie}</p>
                                <p><strong>Raza:</strong> {animal.raza}</p>
                                <p><strong>Edad:</strong> {animal.edad} años</p>
                                <p><strong>Estado de Salud:</strong> {animal.estadoSalud}</p>
                                <p><strong>Dueño:</strong> {animal.duenio}</p>
                                <p><strong>Registrado el:</strong> {animal.fechaRegistro}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <div className="area3">
                <div className="pagination">
                    {Array.from({length: totalPaginas}, (_, index) => (
                        <button
                            key={index}
                            className={`boton-paginacion ${paginaActual === index + 1 ? 'active' : ''}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}

