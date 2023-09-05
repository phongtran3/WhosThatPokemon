import { POKEMON, GENERATIONS } from "./pokemon.js";
const Records = {
  streak: [0, 0, 0, 0, 0, 0, 0, 0, 0],
};

let currentGen = 1; //Hold user current gen selection. Default is 1
let currentPokemonNumber = -1; //Hold the number of the Pokemon currently on screen. -1 if the user has reached the end of the list generated for them.
let currentPokemonImgUrl = null; //The url of the image of the Pokemon currently on screen.
let correctCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //Array of correct answer streaks, one entry for each generation.
let loadedImage; //The image loaded for the current Pokemon
let imageDirectory = "images/artwork/";
let record = Records; //hold user streak record
let pokemonArray; //Array which stores the IDs of the Pokemon to be shown to the user, based on their selected gen
let pokemonArrayIndex; //Index of the pokemonArray array which points to the Pokemon the user is currently guessing.

function onReady() {
  console.log("onReady");
  document.getElementById(`gen${1}`)?.classList.add("genSelected");

  //On click for generations
  function onGenClick(e) {
    e.preventDefault();
    setGen(parseInt(this.getAttribute("data-gen"), 10));
  }
  document.querySelectorAll(".genre").forEach((el) => el.addEventListener("click", onGenClick));
}

if (document.readyState !== "loading") {
  onReady();
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}

function getPokemonName(pokemonNum) {
  const pokemon = POKEMON.find((pokemon) => pokemon.number === number);
  return pokemon ? pokemon.names : null;
}

function getPokemonImageUrl(pokemonNum) {
  if (imageDirectory !== null) {
    return imageDirectory + pokemonNum + ".png";
  } else {
    return null;
  }
}

function setGen(genId) {
  /*
    Default gen will be 1. When a user selects a new gen, the page will reload and the gen and variables will be 
    updated to match that gen. If the user selects the same gen, it will reset the streak and array of pokemons
    */
  console.log("Set Gen: " + genId);
  if (genId !== currentGen) {
    document.getElementById(`gen${currentGen}`)?.classList.remove("genSelected");
    document.getElementById(`gen${genId}`)?.classList.add("genSelected");
  }
  currentGen = genId;

  correctCount[genId - 1] = 0;
  //generateNewNumbers(true);
  //newPokemon();
}
