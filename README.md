Este repositorio contiene la solución a la **Prueba Técnica Frontend** solicitada por Passer para la práctica profesional supervisada.  
La prueba consistió en desarrollar una interfaz moderna y responsiva usando Angular, alineada con los diseños proporcionados y buenas prácticas de desarrollo frontend.

---

## 🛠 Tecnologías Utilizadas

- Angular 17+
- TypeScript
- SCSS (estilos personalizados)
- Angular Material
- Git

---

## 📦 Instalación

1. Clonar el repositorio:
   git clone https://github.com/AnthonyVargas-Passer-Practica-Frontend.git
   cd AnthonyVargas-Passer-Practica-Frontend

Dependencias:
bash
Copy
Edit
npm install

Estructura del Proyecto
src/
├── app/
│   ├── components/              # Componentes compartidos
│   ├── pages/                   # Páginas principales (Ocupaciones, Países, Identificaciones)
│   ├── services/                # Servicios para la comunicación HTTP
│   ├── app-routing.module.ts   # Definición de rutas
│   └── app.module.ts           # Módulo principal
├── assets/                     # Archivos estáticos (i18n, imágenes, etc.)
└── styles.scss                 # Estilos globales

🌐 Internacionalización
Se implementó soporte para múltiples idiomas utilizando archivos JSON ubicados en assets/i18n.
El proyecto está listo para escalar a más idiomas de ser necesario.

✨ Funcionalidades
Visualización de catálogos de riesgo:
Ocupaciones
Países
Tipos de identificación
Filtro dinámico y búsqueda por nombre
UI consistente con Angular Material
Adaptación visual fiel al diseño de Adobe XD

Anthony Vargas Alvarado
Ingeniería en Sistemas – Universidad Nacional de Costa Rica
thonyalope@gmail.com