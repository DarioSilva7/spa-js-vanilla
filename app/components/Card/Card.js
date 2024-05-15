export const Card = (product) => {
  const { image, title, price, id } = product;
  let div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
  <img src=${image} alt="Product Image">
  <div class="card-body">
    <h3>${title}</h3>
    <span class="price">$${price}</span>
    <div>
      <span class="pd-card-btn" data-product-id=${id}>
      <button style="font-size: 20px"> 🛒</button>
      <button style="font-size: 20px" id="btnDetail" onclick="showProductDetail(${id})" >Detail</button>
    </span>
    </div>    
  </div>
    `;

  const buttonDetail = div.querySelector("#btnDetail");

  buttonDetail.addEventListener("click", () => {
    redirectToDetail(id);
  });

  const redirectToDetail = (productId) => {
    window.location.href = `#/detail/${productId}`;
  };

  return div;
};
