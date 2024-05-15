export const Detail = (props) => {
  const { id, title, description, price, image } = props;
  const detailDiv = document.createElement("div");
  detailDiv.id = id;
  detailDiv.className = "detail card img";
  detailDiv.innerHTML = `
    <p>${title}</p>
    <img src=${image} alt="image detail"></img>
    <p>${description}</p>
    <span>${price}</span>
    `;
  return detailDiv;
};
