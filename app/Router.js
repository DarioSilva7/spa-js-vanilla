import { ContainerCards } from "./components/ContainerCard/ContainerCards.js";
import { Detail } from "./components/Detail/Detail.js";
import { getProductById, getProducts } from "./helpers/getProducts.js";

export const Router = async () => {
  const { hash } = window.location;
  const isDetail = hash.includes("detail");
  const isCart = hash.includes("cart");
  let route, id;
  if (isDetail) {
    [route, id] = hash.split("detail/").filter(Boolean);
    route = "detail";
  } else if (isCart) {
    route = "cart";
  } else {
    [route] = hash.split("/").filter(Boolean);
  }

  switch (route) {
    case "":
    case "#":
    case "#/":
    case "home":
      const products = await getProducts();
      renderHome(products);
      break;
    case "detail":
      const product = await getProductById(id);
      renderDetail(product);
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
  section.innerHTML = `<h1>Cart in progress</h1>`;
};

const renderNotFound = () => {
  document.querySelector("#section").innerHTML = `<h1>404 Not Found</h1>`;
};
