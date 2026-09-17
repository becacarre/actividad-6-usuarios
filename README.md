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