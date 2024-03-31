import { DivComponent } from "../../common/div-component";
import "./Search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }
  render() {
    this.element.classList.add("search");
    this.element.innerHTML = ` 
    <div class="search__wrapper">
      <input
        class="search__input" type="text" 
        placeholder="Найти книгу или автора ..." 
        value="${this.state.searchQuery ? this.state.searchQuery : ""}"
        />
        <img src="/static/images/search-icon.svg" alt="Иконка поиска книг" />
    </div>
    <button class="search__button" aria-label="Искать">
      <img src="/static//images/search-white.svg" alt="Иконка поиска" />
    </button>
    `;
    return this.element;
  }
}
