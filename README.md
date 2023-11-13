# Rimac Frontend Challenge

Proyecto creado con Vite.
Se han utilizado las siguientes librerías o paquetes:

- Axios
- React Query
- React Router
- React Slick
- Slick Carousel
- SASS (Metodología BEM para estructurar)
- PropTypes (Tipado)

## Figma
[UI](https://www.figma.com/file/KGftIKxhcVm41kTKMsfTh2/Frontend-Challenge-2023)

## APIS
[User](https://rimac-front-end-challenge.netlify.app/api/user.json)
[Planes](https://rimac-front-end-challenge.netlify.app/api/plans.json)

## Estructura interna

```
├── docs - # Carpeta del build
└── src  - # Lógica de componentes de la aplicación
    ├── assets            -# Archivos estáticos
    │   ├── images        -# Imágenes
    │   │   ├── icons     -# Íconos
    │   └── scss          -# Archivos de estilos
    │   │   ├── elements  -# Estilos para elementos jsx
    │   │   ├── globals   -# Estilos globales
    │   │   ├── libs      -# Estilos de librerías o paquetes
    │   │   ├── pages     -# Estilos para páginas jsx
    │   │   └── templates -# Estilos para templates jsx
    ├── components        -# Archivos jsx
    │   ├── elements      -# Elementos jsx
    │   ├── pages         -# Páginas jsx
    │   └── templates     -# Templates jsx
    ├── config            -# Archivos de configuración
    ├── context           -# Contexts
    ├── hooks             -# Custom Hooks
    └── utils             -# Funciones útiles
```

## Rutinas

Instalación
```bash
npm install
```

Ejecución
```bash
npm run dev
```