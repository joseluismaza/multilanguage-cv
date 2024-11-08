import { translate } from "../../main";
import "./header.css";

const template = (currentLanguage) => {
  return `
    <header>
      <h1>${translate("name")}</h1>
      <h3>${translate("profession")}</h3>
      <div id="language-switch">
        <img class="flag-img" id="flag-img" src="${currentLanguage === "es" ? "/reino-unido.png" : "/espana.png"}" alt="language flag">
      </div>
    </header>
  `;
};

const Header = (currentLanguage) => template(currentLanguage);

export default Header;
