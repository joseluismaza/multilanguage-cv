import "./experiencia.css";
import { translate } from "../../main";

const template = () => {
  const experienciaData = translate("workExperience")
  return `
  <section class="experiencia" id="experiencia">
    <h2>${experienciaData.name}</h2>
    <ul>
      ${experienciaData.experiences
      .map((item) => `
        <li>
          <h3>${item.position}</h3>
          <h4>${item.company}</h4>
          <h5>${item.startDate} - ${item.endDate}</h5>
          <p>${item.description}</p>
        </li>
      `).join("")}
    </ul>
  </section>`;
};

export { template as Experiencia };
