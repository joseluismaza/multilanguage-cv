import { Educacion } from "../educacion/educacion";
import { SobreMi } from "../sobremi/sobremi";
import { Experiencia } from "../experiencia/experiencia";
import { translate } from "../../main";
import "./main.css";
import { Proyectos } from "../proyectos/proyectos";

let show = "Educación"; // Inicializamos el texto del botón

// `showContent` ahora es un parámetro de `template`
const template = (showContent) => {
  return `
    <main>
      ${SobreMi()}
      <div class="change-container">
        <button id="change">Muestra ${show}</button>
      </div>
      <div id="content">
        ${showContent === "Educacion" ? Educacion() : Experiencia()}
      </div>
      ${Proyectos()}
    </main>
  `;
};

// Recibe `showContent` como argumento en lugar de importarlo
export const Main = (showContent) => {
  return template(showContent);
};

export const addMainListeners = () => {
  const changeButton = document.querySelector("#change");
  const content = document.querySelector("#content");

  changeButton.addEventListener("click", () => {
    if (show === "Experiencia") {
      content.innerHTML = Experiencia();
      show = "Educación";
      localStorage.setItem("showContent", "Experiencia");
    } else {
      content.innerHTML = Educacion();
      show = "Experiencia";
      localStorage.setItem("showContent", "Educacion");
    }

    changeButton.textContent = `Muestra ${show}`;
    translate(); // Aplica traducción al nuevo contenido si es necesario
  });
};






