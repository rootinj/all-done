const headerElement = document.querySelector("#header");
const productsElement = document.querySelector(".container");

fetch("header.html")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.text();
  })
  .then((headerHTML) => {
    headerElement.innerHTML = headerHTML;
  })
  .catch((error) => {
    console.error("Error loading header:", error);
  });

fetch("products.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((products) => {
    products.forEach((product) => {
      const productElement = document.createElement("div");
      productElement.classList.add("product");

      const imageElement = document.createElement("img");
      imageElement.src = product.image;
      imageElement.alt = product.name;
      productElement.appendChild(imageElement);

      const nameElement = document.createElement("h2");
      nameElement.classList.add("name");
      nameElement.textContent = product.name;
      productElement.appendChild(nameElement);

      const descriptionElement = document.createElement("p");
      descriptionElement.classList.add("description");
      descriptionElement.textContent = product.description;
      productElement.appendChild(descriptionElement);

      const linkElement = document.createElement("a");
      linkElement.classList.add("link");
      linkElement.href = product.ecommerce_url;
      linkElement.textContent = "Buy on e-commerce site";
      productElement.appendChild(linkElement);

      productsElement.appendChild(productElement);
    });
  })
  .catch((error) => {
    console.error("Error loading products:", error);
  });