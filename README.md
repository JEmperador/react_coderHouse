# Atlas Tech

## Demo


## _Continuacion del proyecto creado en el curso de Coder House "Desarrollo Web"_
Para ver en mas detalle los motivos y razon que llevaron a crear nuestro proyecto puede leer en [este](https://github.com/JEmperador/coderHouse_desarrolloWeb) perositorio de github, junto con la primera version del mismo (creador puramente a partir de HTML y CSS)

## Tecnologias
-   [React](https://reactjs.org/) - Libreria de JavaScript para trabajar con el FrontEnd del proyecto.
-   [Yarn](https://yarnpkg.com/) - Gestor de Dependencias enfocado en la velocidad y seguridad.
-   [React Router](https://reactrouter.com/docs/en/v6) - Librería para crear las distintas rutas en la aplicación realizada en ReactJS.
-   [React Bootstrap](https://react-bootstrap.github.io/) - Librería de componentes y estilos CSS.

## Instalación
-   Es necesario contar on un editor de codigo en su PC, se recomienda [Visual Studio Code](https://code.visualstudio.com/).
-   Debe contar tambien con una termina, se recomienda [GitBash](https://git-scm.com/)
-   Abrir GitBash en la carpeta donde clonara el repositorio.
-   Ingrese a este [link](https://github.com/JEmperador/react_coderHouse.git) para obtener repositorio con el protocolo HTTPS.
-   En la termina GitBash utilice siguiente línea de comando:
    ```bash
    $ git clone <repositorio HTTPS>
    ```
-   Sobre la carpeta del repositorio clonado hacer click derecho y seleccionar la opción __Abrir con code__.
-   Instalar [node.js](https://nodejs.org/en/) en su PC.
-   Desde la terminal de __Visual Studio Code__ instalar yarn con las siguientes líneas de comando:
    ```bash
    $ npm install --global yarn
    $ yarn
    ```

## Rutas
| Ruta                    | Componente          | Comentario           |
|-------------------------|---------------------|----------------------|
| '/'                     | ItemListContainer   | Pantalla Principal   |
| '/category/:categoryId' | ItemListContainer   | Filtro por Categoria |
| '/detail/:detailId'     | ItemDetailContainer | Detalle del Producto |
| '*'                     | Page404             | Ruta erronea         |