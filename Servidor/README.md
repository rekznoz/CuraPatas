|<img width="150" src="../assets/logo.webp"/>  | [Inicio](../README.md)   |  [FrontEnd](../FrontEnd/README.md) |
|---|---|---|

# Documentación Api CuraPata

Esta Api tendrá varios endpoints fundamentales

- [Animales](#animales)
- [Post](#post)
- [consultas](#consultas)
- [tienda](#tienda)
- [usuarios](#usuarios)

## Animales

En este endpoint tendrá información relevante acerca de los animales asi como nombre, estado de salud, consultas realizadas, etc...

## Post

La plicación tendrá un apartado de Blog donde usuarios con ese privilegio puedan publicar sus publicaciones acerca del cuidado de los animales o datos relevantes que aporten valor a los usuarios.

## Consultas

Este endpoint contendrá datos sobre las consultas que se les hace a los perros de manera online, son consultas muy básicas con un formulario en la parte del frontend 

## tienda

Aquí se recogeran los productos y el stock de estos a medida que se vayan subiendo y comprando, los productos solo podrán subirlos usuarios privilegiados

## Usuarios

Aquí se obtendrá todos los usuarios con su rol, etc.

## Funcionalidades clave

`Todas las funcionalidades de la parte del backend son sugerencias que deberán ser aprobadas`

1. autenticación con jwt enviandole al frontend el web token para recoger y guardar el inicio de sesión este tendrá 1 hora de duración antes de ser reseteado por inactividad, para garantizar la seguridad de los usuarios.

2. posibilidad de iniciar sesión através de un qr dando acceso mediante un ping de google autenticator

3. validación de posts y de productos de venta.

4. posible panel de administración para manejar esas peticiones de forma cómoda para los administradores ya que probablemente aunque hayan publicaciones que se aprueben solas, habrá publicaciones que deberan ser aprobadas a mano, además los administradores tendran la posibilidad de retirar ciertas publicaciones.

5. pequeño chatbot a modo de demo para la interacción en tiempo real con un "veterinario" real.
