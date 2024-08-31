// creando un div

const card = document.createElement("div");
card.classList.add("card");

// crear la imagen

const cardImg = document.createElement("img");
cardImg.src =
  "https://elmisionero.com.ar/wp-content/uploads/2024/08/franco-colapinto-a-la-formula-1-1861664.jpg";
cardImg.classList.add("card-img");

// creamos un titulo
const cardTitle = document.createElement("h2");
cardTitle.textContent = "Franco Colapinto sale a la pista en Monza";
cardTitle.classList.add("card-title");

// creamos un body

const cardBody = document.createElement("div");
cardBody.classList.add("card-body");

const cardBodyText = document.createElement("p");
cardBodyText.innerText =
  "Este viernes comenzará la primera tanda de pruebas libres para el argentino. El domingo será la carrera.";
cardBody.appendChild(cardBodyText);

// crear un boton

const cardButton = document.createElement("button");
cardButton.innerText = "Ver mas";

// anexamos los elementos

card.appendChild(cardImg);
card.appendChild(cardTitle);
card.appendChild(cardBody);
card.appendChild(cardButton);

// crear un container

const cardContainer = document.createElement("div");
cardContainer.classList.add("card-container");
cardContainer.appendChild(card);

// ultimo paso

const main = document.querySelector("main");
main.appendChild(card);
