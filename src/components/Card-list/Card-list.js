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

    const cardFlex = document.createElement("div");
    cardFlex.classList.add("card-flex");
    this.element.append(cardFlex);
    for (const card of this.parentState.list) {
      cardFlex.append(new Card(this.appState, card).render());
    }
    return this.element;
  }
}
