const API_URL = "https://www.course-api.com/javascript-store-products";

export function fetchProductsThen() {
  fetch(API_URL)
    .then((response) => response.json())
    .then((products) => {
      products.forEach((product) => {
        console.log(product.fields.name);
      });
    })
    .catch((error) => {
      console.log("Fetch error:", error);
    });
}

export async function fetchProductsAsync() {
  try {
    const response = await fetch(API_URL);
    const products = await response.json();
    displayProducts(products);
  } catch (error) {
    handleError(error);
  }
}

export function displayProducts(products) {
  const container = document.getElementById("product-container");

  products.slice(0, 5).forEach((product) => {
    const { name, price, image } = product.fields;

    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${image[0].url}" alt="${name}" />
      <h3>${name}</h3>
      <p>$${(price / 100).toFixed(2)}</p>
    `;

    container.appendChild(card);
  });
}

export function handleError(error) {
  console.log(`An error occurred: ${error.message}`);
}

fetchProductsThen();
fetchProductsAsync();