Proyecto de Portafolio Multilingüe

Este proyecto es una aplicación web de portafolio personal que permite a los usuarios ver la información sobre tu educación, experiencia y detalles adicionales. La aplicación cuenta con funcionalidad para cambiar entre los idiomas español e inglés, y permite alternar dinámicamente entre las secciones de educación y experiencia.

Características

* Cambio de idioma: Los usuarios pueden alternar entre los idiomas español e inglés usando un botón en el encabezado.
* Navegación entre secciones: Un botón permite alternar entre la sección de "Educación" y "Experiencia" sin recargar la página.
* Persistencia de configuración: Mantiene la selección de idioma y la última sección vista al cambiar entre idiomas o al recargar la página.
  
Tecnologías utilizadas

* HTML5 y CSS3 para el diseño y el estilo.
* JavaScript (ES6) para la lógica de interacción.
* Vite para la configuración del entorno de desarrollo y el empaquetado.
* Módulos ES6 para organizar componentes.

Uso

Cambiar entre idiomas
Haz clic en el icono de bandera en el encabezado para cambiar entre español e inglés. La selección se guarda en localStorage para mantener el idioma seleccionado en las siguientes visitas.

Cambiar entre educación y experiencia
Haz clic en el botón que muestra "Muestra Educación" o "Muestra Experiencia" (o "Show Education"/"Show Experience" si el idioma está en inglés) para alternar entre estas dos secciones. Al cambiar el idioma, se mantendrá la última sección vista.

Archivos clave

* /components/header/header.js: Contiene la lógica para el cambio de idioma.
* /components/main/main.js: Controla la visualización de las secciones de educación y experiencia, y mantiene el estado al cambiar el idioma.
* /data/data_es.js y /data/data_en.js: Contienen los datos en español e inglés, respectivamente, para las diferentes secciones del sitio.

==========================================================================================================================================================================================================================================================================================================================================

Multilingual Portfolio Project

This project is a personal portfolio web application that allows users to view information about your education, experience and additional details. The application has functionality to switch between Spanish and English languages, and allows to dynamically switch between the education and experience sections.

Features

* Language switching: Users can switch between Spanish and English languages using a button in the header.
* Navigation between sections: A button allows toggling between the “Education” and “Experience” section without reloading the page.
* Configuration persistence: Keeps the language selection and the last section viewed when switching between languages or reloading the page.
  
Technologies used.

* HTML5 and CSS3 for design and styling.
* JavaScript (ES6) for interaction logic.
* Vite for development environment configuration and packaging.
* ES6 modules to organize components.

Use

Switch between languages
Click on the flag icon in the header to switch between English and Spanish. The selection is saved in localStorage to keep the selected language on subsequent visits.

Switch between education and experience
Click on the button showing “Show Education” or “Show Experience” (or “Show Education”/“Show Experience” if the language is in English) to switch between these two sections. Switching the language will keep the last section viewed.

Key files

* /components/header/header.js: Contains the logic for language switching.
* /components/main/main.js: Controls the display of the education and experience sections, and maintains the state when changing the language.
* /data/data_es.js and /data/data_en.js: Contains the data in Spanish and English, respectively, for the different sections of the site.
