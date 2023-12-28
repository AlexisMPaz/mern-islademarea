# Frontend - Proyecto Final para CoderHouse

Comisión: 39685
Alumno: Alexis Paz

Antes de iniciar la aplicacion se debe instalar las dependencias con:

- npm i

**Las variables de entorno necesarias se encuentran en la entrega por la plataforma de Coder**

Para iniciar el servidor (script):

**Development**

* (puerto 3000, entorno desarrollo): npm run dev


**Production**

* Compilar la version de produccion con: npm run build
* (puerto 3000, entorno produccion): npm run start

**Render**

La aplicacion esta hosteada en Render con la siguiente url: **app-isla-de-marea.onrender.com**
Si no se ha cargado recientemente, tarda bastante, hay que tener paciencia con los hosting gratuitos.
Ademas Render no permite el transito de Cookies entre Servicios Web. Asi que todas las rutas del back que pidan la Cookie de jwt, devolveran el mensaje de no hay usuario logeado.

**Local**

Localmente funciona tanto en development como en production, recordar compilar la aplicacion antes de iniciar el entorno de produccion.

Caracteristicas Generales de la aplicacion:

- Version de node usada: 18.16.0

- Desarrollado con Next 13 usando el nuevo directorio experimental App. Es mas sencillo y veloz. No encontre ningun problema al usarlo estos meses por lo que parece ser estable y el futuro de Next por su simplicidad y por su rapidez.

- En la carpeta app se encuentran las rutas de las paginas. Si existe una carpeta dentro de app que contenga un archivo page.jsx, el nombre de la carpeta se convierte en la ruta para renderizar esa page.
    Ejemplo: "src/app/products/details/page.jsx" => "localhost:3000/products/details"

- Por separado en la Carpeta de src/components se encuentran los componentes usados por las pages.

- En la carpeta context cree un contexto de usuario que toma los datos del back al logearse o deslogearse para guardarlos en el local Storage, esto solo sirve para cosas como el mensaje de bienvenida ya que la sesion es trabajada con la token guardada en Cookies.

Fue un desafio meterme en un entorno nuevo para hacer el front, pero lo aproveche para intentar salir de mi zona de confort. Puede que el codigo no este muy limpio y se necesite modular mas pero por el momento estoy comforme. Si bien el proyecto es de backend me encantaria recibir una devolucion del front para saber en que mejorar.