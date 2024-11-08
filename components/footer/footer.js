import { currentLanguage, translate } from "../../main";
import "./footer.css";

const template = () => {
  const pdfRuta = currentLanguage === "es" ? "/public/CV_JoseLuisMaza.pdf" : "/public/CV_JoseLuisMaza_eng.pdf";
  const descargaText = currentLanguage === "es" ? "Descárgalo en PDF" : "Download in PDF";
  return `
  <footer>
    <p>©️ ${translate("createdBy")}</p>
    <a href="${pdfRuta}" target="_blank">${descargaText} <i class="fa-solid fa-file-pdf"></i></a>
  </footer>
  `;
};

const Footer = () => {
  return template();
};

export default Footer;