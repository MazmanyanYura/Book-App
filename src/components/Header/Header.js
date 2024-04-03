import { DivComponent } from "../../common/div-component";
import "./Header.css";

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }
  render() {
    this.element.innerHTML = "";
    this.element.classList.add("header");
    this.element.innerHTML = ` 
    <div>
      <img src="/static/images/logo.svg" alt="Логотип" />
    </div>
    <ul class="menu">
      <li class="menu__item">
        <a class="menu__item-link" href="#">
          <img src="/static/images/search-icon.svg" alt="Поиск иконка" />
        Поиск книг
        </a>
      </li>
      <li class="menu__item">
        <a class="menu__item-link" href="#favorites">
          <img 
          src="/static/images/favorites-icon.svg" 
          alt="Избранное иконка" />
          Избранное
        </a>
      </li>
      <li class="menu__item">
          <p class="menu__counter">
            ${this.appState.favorites.length}
          </p>
      </li>
    </ul>
    `;
    return this.element;
  }
}
