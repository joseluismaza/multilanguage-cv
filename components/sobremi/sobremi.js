
import data from "../../data/data_es";
import { translate } from "../../main";
import "./sobremi.css";

const template = () => {
  return `
  <section class="sobremi" id="sobremi">
    <img class="avatar" src=${translate("avatar")} alt=${translate("name")}/>
    <ul>
    ${translate("skills").map((skill) =>
    `
    <li class="skills-list">
      <img class="skills-img"src="${skill.Image}"></i>
    </li>
    `).join("")}
  </ul>
    <p>${translate("aboutMe")}</p>
    <p>${translate("address")}</p>
    <a class="contact" href=${`mailto:${data.email}`}><i class="fa-regular fa-envelope"></i></a>
  </section>
  `;
};




export { template as SobreMi };