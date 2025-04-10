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
  } catch (error) {
    console.error("Error al obtener personajes:", error);
  }
}

