# Actividad6Usuarios

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 20.3.37.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Proceso de desarrollo

### 1. Creación del proyecto

He creado el proyecto de Angular con rutas, archivos CSS y una estructura
basada en módulos. Después he ejecutado `ng.cmd serve --open` y he
comprobado que la aplicación compilaba correctamente.

He revisado la configuración de Git y he comprobado que la carpeta
node_modules estaba excluida del control de versiones.

Primer commit: `98af51e - Creacion inicial del proyecto Angular`.

### 2. Incorporación de Bootstrap

He instalado Bootstrap con el comando:

`npm.cmd install bootstrap@5.3.8`

Después he añadido su hoja de estilos a la configuración de angular.json,
manteniendo también el archivo src/styles.css para los estilos propios.

He ejecutado `ng.cmd build` para comprobar que el proyecto compilaba
con la nueva configuración.


### 3. Componentes y rutas

He creado los componentes Home, UserDetail, UserForm y Navbar.

Después he configurado las rutas principales de la aplicación:

- /home
- /user/:id
- /newuser
- /updateuser/:id

Para la creación y actualización de usuarios se reutiliza el componente
UserForm.

También he añadido una redirección para que la ruta inicial cargue Home
y una ruta comodín para redirigir al listado si la dirección no existe.

He comprobado las rutas desde el navegador antes de continuar con la
conexión a la API.

### 4. Interfaces y servicio de usuarios

He creado una interfaz IUser con los datos principales de cada usuario y
otra interfaz IUserResponse para representar la respuesta paginada del API.

También he creado UsersService, donde he centralizado las peticiones HTTP
necesarias para consultar, crear, actualizar y eliminar usuarios.

Los métodos creados son:

- getAll()
- getById()
- create()
- update()
- delete()

Por último he añadido HttpClientModule en AppModule para poder realizar
las peticiones al API.

### 5. Listado de usuarios

He conectado el componente Home con el servicio de usuarios para cargar los
datos desde la API.

La API devuelve el listado paginado, por lo que he ido acumulando los
resultados de todas las páginas hasta completar el listado.

Durante las pruebas comprobé que la respuesta real utilizaba la propiedad
results para devolver los usuarios, así que adapté la interfaz y el componente
Home a esa estructura.

Los usuarios se muestran en tarjetas con Bootstrap y con los botones de
detalle, actualizar y borrar.


### 6. Detalle y eliminación de usuarios

He desarrollado la vista de detalle para consultar los datos de un usuario
a partir del identificador recibido en la ruta.

Durante las pruebas comprobé que para consultar y eliminar un usuario la API
utiliza el campo _id, aunque en el listado también devuelve un id numérico.
He adaptado el servicio para trabajar con esta respuesta manteniendo las rutas
de la aplicación con el id numérico.

También he añadido la eliminación de usuarios tanto desde la vista de detalle
como desde el listado. Antes de realizar la petición se muestra una confirmación
al usuario.

Como la API utilizada en la práctica es de pruebas, al crear un usuario devuelve
una respuesta correcta, pero el nuevo registro no se guarda de forma
permanente y por tanto no aparece después en el listado.


### 7. Formulario de creación y actualización

He utilizado el mismo componente UserForm para crear y actualizar usuarios.

El formulario utiliza Reactive Forms y comprueba que todos los campos sean
obligatorios. También valida el formato del email, evita valores formados solo
por espacios y comprueba que la URL de la imagen empiece por http:// o https://.

Cuando se accede desde /newuser el formulario aparece vacío y permite crear un
usuario. Cuando se accede desde /updateuser/:id se cargan primero los datos del
usuario y el mismo formulario se utiliza para modificarlos.

Durante las pruebas también he adaptado la búsqueda de usuarios para recorrer
las diferentes páginas de resultados de la API.

### 8. Pruebas finales

Antes de finalizar la práctica he realizado varias pruebas de funcionamiento:

- Carga completa del listado de usuarios.
- Consulta del detalle de usuarios de diferentes páginas.
- Creación de un nuevo usuario.
- Validación de campos obligatorios, email y URL de imagen.
- Actualización de usuarios utilizando el mismo formulario de registro.
- Eliminación desde el listado y desde el detalle con confirmación previa.
- Comprobación de usuarios inexistentes.
- Redirección de rutas no existentes al Home.
- Comprobación básica del diseño responsive.

Finalmente he vuelto a compilar el proyecto para comprobar que no existían
errores antes de preparar la entrega.