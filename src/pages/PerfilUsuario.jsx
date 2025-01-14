import React, {useState} from "react";
import "../css/perfilesusuario.css";

function BloqueInformacionUsuario({title, content, isEditing, onChange, fieldName}) {
    return (
        <div className="bloque-informacion">
            <h4>{title}</h4>
            {isEditing ? (
                <input
                    type="text"
                    value={content}
                    onChange={(e) => onChange(e, fieldName)}
                    className="input-editar"
                />
            ) : (
                <p>{content}</p>
            )}
        </div>
    );
}

function CartaMascota({petImage, petName, petInfo, isEditing, onChange}) {
    return (
        <div className="carta-mascota">
            <img className="foto-mascota" src={petImage} alt="mascota"/>
            <div className="detalles-mascota">
                {isEditing ? (
                    <>
                        <input
                            type="text"
                            value={petName}
                            onChange={(e) => onChange(e, "petName")}
                            className="input-editar"
                        />
                        <input
                            type="text"
                            value={petInfo}
                            onChange={(e) => onChange(e, "petInfo")}
                            className="input-editar"
                        />
                    </>
                ) : (
                    <>
                        <p className="nombre-mascota">{petName}</p>
                        <p className="informacion-mascota">{petInfo}</p>
                    </>
                )}
            </div>
        </div>
    );
}

export default function PerfilUsuario() {
    // Estado de edición
    const [editandoPerfil, setEditandoPerfil] = useState(false);
    const [editandoMascota, setEditandoMascota] = useState(false);

    // Estado del perfil
    const [profile, setProfile] = useState({
        description: "Lalalalalallallalaalalala",
        location: "Ciudad, País",
        phone: "+34 000 00 00 0",
        email: "rafita@rafi.com",
        registrationDate: "12/01/2025",
    });

    // Estado de las mascotas
    const [pets, setPets] = useState([
        {
            name: "Perrito Plox",
            info: "Perro - 3 años - Vacunado",
            image: "https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U",
        },
    ]);

    // Estado para agregar una nueva mascota
    const [newPet, setNewPet] = useState({
        name: "",
        info: "",
        image: "",
    });

    // Función para manejar cambios en el perfil
    const handleProfileChange = (e, field) => {
        setProfile({...profile, [field]: e.target.value});
    };

    // Función para manejar cambios en las mascotas
    const handlePetChange = (e, field) => {
        const updatedPets = [...pets];
        updatedPets[0][field] = e.target.value; // Asumimos que solo hay una mascota
        setPets(updatedPets);
    };

    // Función para manejar cambios en el formulario de nueva mascota
    const handleNewPetChange = (e) => {
        setNewPet({...newPet, [e.target.name]: e.target.value});
    };

    // Función para agregar una nueva mascota
    const handleAddPet = () => {
        if (newPet.name && newPet.info && newPet.image) {
            setPets([...pets, newPet]);
            setNewPet({name: "", info: "", image: ""}); // Resetear el formulario
        } else {
            alert("Por favor completa todos los campos de la mascota.");
        }
    };

    return (
        <>
            <div className="area1">
                <div className="encabezado-perfil">
                    <img
                        className="foto-perfil"
                        src="https://mighty.tools/mockmind-api/content/human/122.jpg"
                        alt="profile"
                    />
                    <div className="nombre-perfil">Rafita</div>
                    <div className="rol-perfil">Admin</div>
                    <button
                        className="boton-editar-usuario-perfil"
                        onClick={() => setEditandoPerfil(!editandoPerfil)}
                    >
                        {editandoPerfil ? "Guardar Perfil" : "Editar Perfil"}
                    </button>
                </div>
            </div>

            <div className="area2">
                <div className="informacion-perfil-usuario">
                    <BloqueInformacionUsuario
                        title="Descripción"
                        content={profile.description}
                        isEditing={editandoPerfil}
                        onChange={handleProfileChange}
                        fieldName="description"
                    />
                    <BloqueInformacionUsuario
                        title="Ubicación"
                        content={profile.location}
                        isEditing={editandoPerfil}
                        onChange={handleProfileChange}
                        fieldName="location"
                    />
                    <BloqueInformacionUsuario
                        title="Teléfono"
                        content={profile.phone}
                        isEditing={editandoPerfil}
                        onChange={handleProfileChange}
                        fieldName="phone"
                    />
                    <BloqueInformacionUsuario
                        title="Email"
                        content={profile.email}
                        isEditing={editandoPerfil}
                        onChange={handleProfileChange}
                        fieldName="email"
                    />
                    <BloqueInformacionUsuario
                        title="Fecha de Registro"
                        content={profile.registrationDate}
                        isEditing={editandoPerfil}
                        onChange={handleProfileChange}
                        fieldName="registrationDate"
                    />
                </div>
            </div>
            
            <div className="area3">
                <div className="seccion-mascotas-perfil">

                    <div className="encabezado-seccion-mascotas">
                        <h3>Mascotas Registradas</h3>
                        <button
                            onClick={() => setEditandoMascota(!editandoMascota)}
                        >
                            {editandoMascota ? "Guardar Mascotas" : "Editar Mascotas"}
                        </button>
                    </div>

                    <div className="lista-mascotas">
                        {pets.map((pet, index) => (
                            <CartaMascota
                                key={index}
                                petImage={pet.image}
                                petName={pet.name}
                                petInfo={pet.info}
                                isEditing={editandoMascota}
                                onChange={handlePetChange}
                            />
                        ))}
                    </div>

                    {/* Formulario para agregar una nueva mascota */}
                    <div className="formulario-agregar-mascota">
                        <h4>Agregar Nueva Mascota</h4>
                        <input
                            type="text"
                            name="name"
                            value={newPet.name}
                            onChange={handleNewPetChange}
                            placeholder="Nombre de la mascota"
                        />
                        <input
                            type="text"
                            name="info"
                            value={newPet.info}
                            onChange={handleNewPetChange}
                            placeholder="Información de la mascota"
                        />
                        <input
                            type="text"
                            name="image"
                            value={newPet.image}
                            onChange={handleNewPetChange}
                            placeholder="URL de la imagen"
                        />
                        <button onClick={handleAddPet}>Agregar Mascota</button>
                    </div>

                </div>
            </div>
        </>
    );
}
