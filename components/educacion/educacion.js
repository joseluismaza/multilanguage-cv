import { translate } from "../../main";
import "./educacion.css";

const template = () => {
  const educationData = translate("education");
  return `
    <section class="section" id="educacion">
      <h2>${educationData.name}</h2>
      <div class="educacion">
          <h3>${educationData.degree}</h3>
          <h4>${educationData.university}</h4>
          <p>${educationData.graduationYear}</p>
          <ul id="relevantcourses">
          ${educationData.relevantCourses2?.map((course) => `
          <li>
            <p>${course}</p>
          </li>
          `).join("")}
          </ul>
          </br>
          <h3>${educationData.degree2}</h3>
          <h4>${educationData.university2}</h4>
          <p>${educationData.graduationYear2}</p>
          <ul id="relevantcourses">
          ${educationData.relevantCourses2?.map((course) => `
          <li>
            <p>${course}</p>
          </li>
          `).join("")}
          </ul>
          </br>
          <h3>${educationData.degree3}</h3>
          <h4>${educationData.university3}</h4>
          <p>${educationData.graduationYear3}</p>
        </div>
      </section > `;
};
export { template as Educacion };
