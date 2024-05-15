export const NavBar = () => {
  let nav;
  nav = document.getElementById("navbar");
  if (!nav) {
    nav = document.createElement("nav");
    nav.id = "navbar";
    nav.className = "navbar";
    nav.innerHTML = `
    <a href="#/">🏠Home</a>
    <a href="#/cart">🛒Cart</a>
    `;
  }
  return nav;
};
