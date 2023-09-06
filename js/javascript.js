//Some of the code have been taken from https://github.com/Menardi/whosthatpokemon/blob/master/src/index.ts
//and converted to javascript. Credit to the orginal owners/creators

import { POKEMON, GENERATIONS } from "./pokemon.js";
import range from "https://cdn.jsdelivr.net/npm/lodash-es/range.js";
import shuffle from "https://cdn.jsdelivr.net/npm/lodash-es/shuffle.js";

const RECORDS_LS_KEY = "wtp_records";
const Records = {
  streak: [0, 0, 0, 0, 0, 0, 0, 0, 0],
};

let currentGen = 1; //Hold user current gen selection. Default is 1
let currentPokemonNumber = -1; //Hold the number of the Pokemon currently on screen. -1 if the user has reached the end of the list generated for them.
let currentPokemonName = null;
let currentPokemonImgUrl = null; //The url of the image of the Pokemon currently on screen.
let correctCount = [0, 0, 0, 0, 0, 0, 0, 0, 0]; //Array of correct answer streaks, one entry for each generation.
let loadedImage; //The image loaded for the current Pokemon
let imageDirectory = "images/artwork/";
let record = Records; //hold user streak record
let pokemonArray = []; //Array which stores the IDs of the Pokemon to be shown to the user, based on their selected gen
let pokemonArrayIndex = 0; //Index of the pokemonArray array which points to the Pokemon the user is currently guessing.

function onReady() {
  console.log("onReady");
  document.getElementById(`gen${1}`)?.classList.add("genSelected");

  //On click for generations
  function onGenClick(e) {
    e.preventDefault();
    setGen(parseInt(this.getAttribute("data-gen"), 10));
  }
  document.querySelectorAll(".genre").forEach((el) => el.addEventListener("click", onGenClick));

  loadState();
  generateNewPokeNumbers();
  currentPokemonNumber = getNextPokemonNumber();

  console.log("onReady Done");
}

if (document.readyState !== "loading") {
  onReady();
} else {
  document.addEventListener("DOMContentLoaded", onReady);
}

/*
Default gen will be 1. When a user selects a new gen, the gen and variables will be updated to match that gen. 
If the user selects the same gen, it will reset the streak and array of pokemons
*/
function setGen(genId) {
  console.log("Set Gen: " + genId);
  if (genId !== currentGen) {
    document.getElementById(`gen${currentGen}`)?.classList.remove("genSelected");
    document.getElementById(`gen${genId}`)?.classList.add("genSelected");
  }
  currentGen = genId;

  correctCount[genId - 1] = 0;

  generateNewPokeNumbers();
  currentPokemonNumber = getNextPokemonNumber();
  displayPokemon();
}

//Re-generates the array of Pokémon numbers
function generateNewPokeNumbers() {
  console.log("generateNewPokeNumbers");
  pokemonArray = [];
  pokemonArrayIndex = 0;
  let start = GENERATIONS[currentGen].start;
  let end = GENERATIONS[currentGen].end;
  range(start, end + 1).forEach((pokeNum) => {
    pokemonArray.push(pokeNum);
  });
  //console.log(pokemonArray);
  pokemonArray = shuffle(pokemonArray);
  //console.log(pokemonArray);
}

//Display the new random Pokemon
function displayPokemon() {
  console.log("Display Pokemon");
  clearCanvas("shadowImage");

  updateStreak();
  //saveState();

  if (currentPokemonNumber === -1) {
    onGenFinished();
  } else {
    currentPokemonName = getPokemonName(currentPokemonNumber);
    console.log(currentPokemonName);
  }
}

// Wipes the canvas clean.
function clearCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function onGenFinished() {
  console.log("Gen Finished");
}

function updateStreak() {
  document.querySelector(".best-count-txt").innerHTML = record.streak[currentGen - 1].toString();
  document.querySelector(".current-count-txt").innerHTML = correctCount[currentGen - 1].toString();
}
function saveState() {
  if (record) localStorage.setItem(RECORDS_LS_KEY, JSON.stringify(record));
}

//Load users records
function loadState() {
  const lsRecords = localStorage.getItem(RECORDS_LS_KEY);
  if (lsRecords) {
    record = JSON.parse(lsRecords);
  } else {
    record = Records;
  }
}

function getPokemonName(pokemonNum) {
  const pokemon = POKEMON.find((pokemon) => pokemon.number === pokemonNum);
  return pokemon ? pokemon.names : null;
}

function getNextPokemonNumber() {
  console.log("getNextPokemonNumber");
  let number;
  if (pokemonArrayIndex >= pokemonArray.length || pokemonArray.length === 0) {
    number = -1;
  } else {
    number = pokemonArray[pokemonArrayIndex++];
  }
  return number;
}

function getPokemonImageUrl(pokemonNum) {
  if (imageDirectory !== null) {
    return imageDirectory + pokemonNum + ".png";
  } else {
    return null;
  }
}
