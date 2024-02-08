Pasos para instalar y probar la aplicación:
1.- Descargar el proyecto completo.
2.- Solicitar archivo .env 
3.- Desde consola entrar a la ubicación de la raíz del proyecto.
4.- Instalar dependencias: "npm install"
5.- Construir el proyecto: "npm rnu build"
6.- Correr el proyecto: "npm run start"
7.- Cuando el proyecto este corriendo en el entorno local podremos acceder al front desde la url http://localhost:3000
------------------------------ FUNCIONAMIENTO ----------------------------------
Se busca tener un contador que me permita saber cuantas guias de envio se han generado en una sesion, 
para lo cual agregamos el contador tal cual junto con un boton en la parte inferior que nos permite 
crear guias de envio con datos ficticios mediante el uso de sockets, cuando se crea la guia de envio 
entonces igualmente por medio de sockets emitimos el resultado de la creacion, tanto si es positivo como 
negativo. 
Se agrega la funcionalidad de soporte a distintas ventanas o distintas conexiones por socket, este soporte
nos permite integrarnos al contador general de las guias creadas porque actualiza el contador con su valor actual
con cada nueva conexion de sockets que se recibe.
Tambien agregamos una arquitectura completa y robusta que nos permitiria ampliar las funcionalidades de la aplicacion
si se desea, ademas de una capa de seguridad al implementar el uso de variables de entorno.
