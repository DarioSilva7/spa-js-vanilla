export const Main = () => {
  let main = document.getElementById("section");
  if (!main) {
    main = document.createElement("main");
    main.id = "section";
  }
  return main;
};
