import { Card } from "../Card/Card.js";

export const ContainerCards = (props) => {
  let div = document.createElement("div");
  div.id = "containercards";
  div.className = "container";
  props.map((product) => {
    return div.append(Card(product));
  });
  return div;
};
