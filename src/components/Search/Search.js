import { DivComponent } from "../../common/div-component";
import "./Search.css";

export class Search extends DivComponent {
  constructor(state) {
    super();
    this.state = state;
  }
  search() {
    const value = this.element.querySelector("input").value;
    this.state.searchQuery = value;
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
    this.element
      .querySelector("button")
      .addEventListener("click", this.search.bind(this));
    this.element.querySelector("input").addEventListener("keydown", (event) => {
      if (event.code === "Enter") {
        this.search();
      }
    });
    return this.element;
  }
}
