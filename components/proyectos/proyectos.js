import { translate } from "../../main";
import "./proyectos.css";

const template = () => {
  const projectsData = translate("projects")
  return `
  <section class="proyectos" id="proyectos">
    <h2>${projectsData.name}</h2>
    <ul class="my-projects">
      ${projectsData.projectsDo
      .map(
        (project) => `
      <li class="list-projects">
        <img src=${project.preview} alt=${project.title}/>
        <h3>${project.title}</h3>
        <p>${project.description}</p>
      <a href=${project.link} target=":_blank">Conocer más</a>
    </li>
    `
      )
      .join("")}
    </ul>
  </section>
  `;
};


export { template as Proyectos };