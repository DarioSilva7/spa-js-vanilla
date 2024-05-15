export const getProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return retryAfterTimeout(3000);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const retryAfterTimeout = async (seconds) => {
  console.log(`Retrying after ${seconds / 1000} seconds...`);
  await new Promise((resolve) => setTimeout(resolve, seconds)); // Esperar 5 segundos
  return getProducts(); // Intentar la solicitud nuevamente
};
