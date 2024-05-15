import { NavBar } from "./components/Navbar/Navbar.js";
import { Main } from "./components/Main/Main.js";
import { Router } from "./Router.js";

export const App = async () => {
  let divRoot = document.querySelector("#root");
  divRoot.append(NavBar());
  divRoot.append(Main());
  Router();
};
