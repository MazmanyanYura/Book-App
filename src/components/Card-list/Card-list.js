import { DivComponent } from "../../common/div-component";
import { Card } from "../Card/Card.js";
import "./Card-list.css";

export class CardList extends DivComponent {
  constructor(appState, parentState) {
    super();
    this.appState = appState;
    this.parentState = parentState;
  }
  render() {
    if (this.parentState.loading) {
      this.element.innerHTML = `
      <div class="card-list__loader">
        Загрузка ...
      </div>`;
      return this.element;
    }
    this.element.classList.add("card-list");
    this.element.innerHTML = `
    <h1 class="card-list__title">
      Найдено книг - ${this.parentState.numFound}
    </h1>
    `;
    for (const card of this.parentState.list) {
      console.log(card);
      this.element.append(new Card(this.appState, card).render());
    }
    return this.element;
  }
}
