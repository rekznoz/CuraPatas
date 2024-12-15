
## 🐾 **CuraPatas: Una plataforma para el cuidado de tus mascotas**

### 📝 **Descripción de la funcionalidad principal**

**Registro y Perfiles de Usuarios**

- 👤 **Usuarios**:
    - 🐕 Dueños de mascotas
    - 🩺 Veterinarios
    - ❤️ Voluntarios

- Cada perfil contiene:  
  📋 Mascotas registradas  
  🛠️ Servicios ofrecidos  
  📌 Necesidades específicas

---  

### 🎯 **Justificación de la idea y audiencia objetivo**

💡 **La idea**: Centralizar servicios y recursos para el cuidado de mascotas en una única plataforma.

👥 **Audiencia objetivo**:

- Dueños de mascotas que buscan orientación y servicios.
- Veterinarios interesados en ofrecer sus conocimientos y servicios.
- Voluntarios que deseen ayudar en el bienestar animal.

✨ Lo que hace única a **CuraPatas**:

1. 🌍 **Enfoque global**: Accesible a todos, no limitado a una comunidad específica.
2. 🐾 **Servicios adicionales**: Consultorías, guías personalizadas, y productos específicos.
3. 💖 **Impacto positivo**: Mejorar la calidad de vida de las mascotas y educar a sus dueños.

---  

### 📊 **Análisis de mercado**

🔍 **Referente**: [DataPest](https://www.siacyl.org/public/datapetshelp.aspx).

**Diferencias principales**:

- 🌐 DataPest es limitado geográficamente; CuraPatas tiene alcance global.
- 🔧 Funcionalidades extendidas, como consultorías y marketplace.
- 📚 Información relevante y accesible sobre cuidado, salud y bienestar animal.

---  

### 🌟 **Funcionalidades clave**

#### 🐕 **Gestión de Mascotas**

- 📷 **Registro de mascotas**: Foto, nombre, edad y raza.
- 🩺 **Historial médico**: Accesible para dueños y veterinarios autorizados.
- ⏰ **Recordatorios**: Vacunas y citas médicas.
- 🔍 **Filtros**: Por mascota registrada.
- 🆘 **Mascotas perdidas**: Registro para ayudar en su recuperación.
- 🏡 **Adopción y hogar temporal**: Mascotas buscando familia o refugio temporal.
- 💞 **Parejas para mascotas**: Encuentra compañeros para tus animales.

#### ⚙️ Posibles Endpoints

- `GET /animales`: Retorna todas las mascotas registradas.
- `POST /animales`: Registra una nueva mascota.
- `GET /animales/:id`: Retorna la información de una mascota específica.
- `PUT /animales/:id`: Actualiza la información de una mascota.
- `DELETE /animales/:id`: Elimina una mascota del registro.
- `GET /animales/perdidas`: Retorna las mascotas perdidas registradas.
- `GET /animales/adopcion`: Retorna las mascotas en adopción.
- `GET /animales/parejas`: Retorna las parejas de mascotas registradas.

---  

#### 🛒 **Marketplace de Servicios**

- 💼 Servicios:
    - 🩺 Consultas veterinarias
    - ✂️ Peluqueria
    - 🚶 Paseadores
    - 🚨 Servicios de emergencia
- 🌍 Filtros: Ubicación, precio, calificación, etc.
- 📅 **Reserva de servicios**.
- ⭐ **Calificaciones y comentarios**.

#### ⚙️ Posibles Endpoints

- `GET /consultas`: Retorna todos los servicios disponibles.
- `POST /consultas`: Registra un nuevo servicio.
- `GET /consultas/:id`: Retorna la información de un servicio específico.
- `PUT /consultas/:id`: Actualiza la información de un servicio.
- `DELETE /consultas/:id`: Elimina un servicio del registro.
- `GET /consultas/veterinarios`: Retorna los servicios de veterinarios.
- `GET /consultas/peluqueria`: Retorna los servicios de peluquería.
- `GET /consultas/paseadores`: Retorna los servicios de paseadores.
- `GET /consultas/emergencia`: Retorna los servicios de emergencia.

### 🛠️ Acciones Necesarias (Administrador)

- ✅ **Un Administrador debe aprobar los servicios registrados**
- ❌ **Un Administrador debe eliminar los servicios no aprobados**
- 💳 **Un Administrador debe aprobar la compra de servicios**

---  

#### 🐾 **Adopción Responsable**

- 🔍 Filtros: Por ubicación, tamaño, raza, etc.
- 📝 Formulario para proceso de adopción.

#### ⚙️ Posibles Endpoints

- `GET /adopciones`: Retorna todas las mascotas en adopción.
- `POST /adopciones`: Registra una nueva mascota en adopción.
- `GET /adopciones/:id`: Retorna la información de una mascota en adopción.
- `PUT /adopciones/:id`: Actualiza la información de una mascota en adopción.
- `DELETE /adopciones/:id`: Elimina una mascota del registro de adopciones.
- `GET /adopciones/filtros`: Retorna las mascotas en adopción según filtros.

### 🛠️ Acciones Necesarias (Administrador)

- ✅ **Un Administrador debe aprobar las solicitudes de adopción**
- 📝 **Un Administrador debe registrar las mascotas en adopción**
- ❌ **Un Administrador debe eliminar las mascotas adoptadas del registro**  

---  

#### 📖 **Blog Educativo**

- 📚 Artículos: Cuidado, entrenamiento, alimentación y salud.
- 💬 Interacción: Comentarios y preguntas.
- 🎯 Filtros: Por categorías específicas.
- ✏️ **Contribuciones**: Publicaciones por veterinarios.
- ⭐ **Calificación de artículos**.

#### ⚙️ Posibles Endpoints

- `GET /blog`: Retorna todos los artículos del blog.
- `POST /blog`: Registra un nuevo artículo.
- `GET /blog/:id`: Retorna la información de un artículo específico.
- `PUT /blog/:id`: Actualiza la información de un artículo.
- `DELETE /blog/:id`: Elimina un artículo del blog.

---

#### 🌐 Usuarios

- 📝 Registro de usuarios
- 🔑 Inicio de sesión
- 👤 Perfil de usuario
- ✏️ Actualización de perfil
- 🛠️ Roles de usuario

#### ⚙️ Posibles Endpoints

- `POST /usuarios`: Registra un nuevo usuario.
- `POST /usuarios/login`: Inicia sesión de un usuario.
- `GET /usuarios/:id`: Retorna la información de un usuario específico.
- `PUT /usuarios/:id`: Actualiza la información de un usuario.
- `DELETE /usuarios/:id`: Elimina un usuario del registro.
- `GET /usuarios/roles`: Retorna los roles de usuario disponibles.

---