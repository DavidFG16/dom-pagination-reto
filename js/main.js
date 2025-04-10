const cardsContainer = document.getElementById("cards-container");
const pagination = document.getElementById("pagination");
const charactersPerPage = 4;
let characters = [];
let currentPage = 1; 

async function getCharacters() {
  try {
    const response = await fetch("https://dattebayo-api.onrender.com/characters");
    const json = await response.json();
    characters = json.characters;
    showPage(currentPage);
  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
}

function showPage(pageNumber) {
  if (pageNumber < 1 || pageNumber > 5) return;

  currentPage = pageNumber; 

  const startIndex = (pageNumber - 1) * charactersPerPage;
  const endIndex = startIndex + charactersPerPage;
  const currentCharacters = characters.slice(startIndex, endIndex);

  cardsContainer.innerHTML = "";

  currentCharacters.forEach((char) => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img class="card-image" src="${char.images[0]}" alt="${char.name}">
      <div class="card-content">
          <h2 class="card-title">${char.name}</h2>
          <p class="card-head">${char.debut?.manga || "Sin dato"}</p>
          <p class="card-description">${char.personal?.clan || "Clan desconocido"}</p>
      </div>
    `;
    cardsContainer.appendChild(card);
  });


}