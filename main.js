import "./style.css";
import data_es from "./data/data_es";
import data_en from "./data/data_en";
import Header from "./components/header/header";
import { Main, addMainListeners } from "./components/main/main";
import Footer from "./components/footer/footer";

export let currentLanguage = localStorage.getItem("language") || "es";

// Definimos `showContent` y lo obtenemos de `localStorage` o le asignamos "Educacion" por defecto
let showContent = localStorage.getItem("showContent") || "Educacion";

export const setLanguage = (lang) => {
  currentLanguage = lang;
  localStorage.setItem("language", lang);

  render(); // Renderizamos con el idioma actualizado
};

export const translate = (key) =>
  (currentLanguage === "es" ? data_es : data_en)[key];

const render = () => {
  document.querySelector("#app").innerHTML = `
    ${Header(currentLanguage)}
    ${Main(showContent)}
    ${Footer()}
  `;

  addMainListeners(); // Agregamos listeners para el botón de cambio de contenido

  // Listener para cambiar de idioma y mantener el contenido actual
  document.getElementById("language-switch").addEventListener("click", () => {
    setLanguage(currentLanguage === "es" ? "en" : "es");
  });
};

// Llamada inicial al renderizado
render();
