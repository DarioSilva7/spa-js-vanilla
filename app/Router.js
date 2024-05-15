import { ContainerCards } from "./components/ContainerCard/ContainerCards.js";
import { Detail } from "./components/Detail/Detail.js";
import { getProductById, getProducts } from "./helpers/getProducts.js";

export const Router = async () => {
  const { href } = window.location;
  const isDetail = href.includes("detail");
  const isCart = href.includes("cart");
  let route = "/",
    id;
  if (isDetail) {
    [route, id] = href.split("detail/");
    route = "detail";
  } else if (isCart) {
    route = "cart";
  }
  switch (route) {
    case "#":
    case "/":
      const products = await getProducts();
      renderHome(products);
      break;
    case "detail":
      const product = await getProductById(id);
      product == null
        ? renderNotFound(`Product with id ${id}`)
        : renderDetail(product);
      break;
    case "cart":
      renderCart();
      break;
    default:
      renderNotFound();
      break;
  }
};

const renderHome = (products) => {
  const section = document.querySelector("#section");
  section.innerHTML = "";
  section.appendChild(ContainerCards(products));
};

const renderDetail = (product) => {
  const section = document.querySelector("#section");
  section.innerHTML = "";
  section.appendChild(Detail(product));
};

const renderCart = () => {
  const section = document.querySelector("#section");
  section.innerHTML = `<h1 style="text-align: center;">Sorry, cart in progress</h1>`;
};

const renderNotFound = (arg = "") => {
  document.querySelector(
    "#section"
  ).innerHTML = `<h1 style="text-align: center;">${arg} - Not Found</h1>`;
};
