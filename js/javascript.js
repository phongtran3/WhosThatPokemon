//Some of the code have been taken from https://github.com/Menardi/whosthatpokemon/blob/master/src/index.ts
//and converted to javascript. Credit to the orginal owners/creators

import { POKEMON, GENERATIONS } from "./pokemon.js";
import range from "https://cdn.jsdelivr.net/npm/lodash-es/range.js";
import shuffle from "https://cdn.jsdelivr.net/npm/lodash-es/shuffle.js";

const RECORDS_LS_KEY = "wtp_records";
const Records = {
  streak: [0, 0, 0, 0, 0, 0, 0, 0, 0],
};
const optionContainer = document.querySelector(".options-container");

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
  const canvas = document.getElementById("shadowImage");
  canvas.willReadFrequently = true;

  document.getElementById("next").addEventListener("click", nextPokemon);
  document.getElementById("skip").addEventListener("click", skipPokemon);
  document.getElementById("next").style.display = "none";

  loadState();
  generateNewPokeNumbers();
  currentPokemonNumber = getNextPokemonNumber();
  displayPokemon();
  generateOptionsUI();

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
  generateOptionsUI();
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
  saveState();

  if (currentPokemonNumber === -1) {
    onGenFinished();
  } else {
    currentPokemonName = getPokemonName(currentPokemonNumber);
    //console.log(currentPokemonName);
    currentPokemonImgUrl = getPokemonImageUrl(currentPokemonNumber);
    //console.log(currentPokemonImgUrl);

    if (currentPokemonImgUrl !== null) {
      let shouldSilhouette = true;
      silhouette(currentPokemonImgUrl, "shadowImage", shouldSilhouette);
    }
  }
}

// Wipes the canvas clean.
function clearCanvas(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function silhouette(imageUrl, canvasId, doSilhouette) {
  if (imageUrl === null) return false;

  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  loadedImage = new Image();
  loadedImage.src = imageUrl;

  loadedImage.onload = function () {
    canvas.width = loadedImage.width;
    canvas.height = loadedImage.height;

    ctx.drawImage(loadedImage, 0, 0, canvas.width, canvas.height);
    if (doSilhouette) {
      let rawImage = ctx.getImageData(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < rawImage.data.length; i += 4) {
        if (rawImage.data[i + 3] >= 100) {
          rawImage.data[i] = 30;
          rawImage.data[i + 1] = 30;
          rawImage.data[i + 2] = 30;
          rawImage.data[i + 3] = 255;
        } else {
          rawImage.data[i + 3] = 0;
        }
      }

      ctx.putImageData(rawImage, 0, 0);
    }
  };
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
  return pokemon ? pokemon.names.en : null;
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

function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function populateOptions() {
  console.log("populateOption");
  let array = [];
  array.push(currentPokemonName);
  let optionCount = 1;
  while (optionCount < 4) {
    let randomValue = pokemonArray[Math.floor(Math.random() * pokemonArray.length)];
    let randomPokemonName = getPokemonName(randomValue);
    if (!array.includes(randomPokemonName)) {
      array.push(randomPokemonName);
      optionCount++;
    }
  }

  return array;
}
function checkPokemonAnswer(e) {
  let userSolution = e.target.innerText.toLowerCase();
  let options = document.querySelectorAll(".option");

  if (userSolution === currentPokemonName) {
    e.target.classList.add("correct");
    revealPokemon(true);
  } else {
    e.target.classList.add("incorrect");
    options.forEach((element) => {
      if (element.innerText.toLowerCase() == currentPokemonName) {
        element.classList.add("correct");
      }
    });
    revealPokemon(false);
  }
}

function generateOptionsUI() {
  console.log("generateOptionsUI");
  let options = fisherYatesShuffle(populateOptions());
  console.log(options);

  optionContainer.innerHTML = `
    <button class="option" >${capitalizeFirstLetter(options[0])}</button>
    <button class="option" >${capitalizeFirstLetter(options[1])}</button>
    <button class="option" >${capitalizeFirstLetter(options[2])}</button>
    <button class="option" >${capitalizeFirstLetter(options[3])}</button>
  `;

  optionContainer.querySelectorAll(".option").forEach((button) => {
    button.addEventListener("click", checkPokemonAnswer);
  });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

//Remove the silhouette of the Pokemon
function revealPokemon(isCorrectGuess) {
  console.log(isCorrectGuess);
  silhouette(currentPokemonImgUrl, "shadowImage", false);

  document.getElementById("skip").style.display = "none";
  document.getElementById("next").style.display = "";

  if (isCorrectGuess) {
    correctCount[currentGen - 1]++;
    //Increase best count if beaten
    if (correctCount[currentGen - 1] > record.streak[currentGen - 1]) {
      record.streak[currentGen - 1] = correctCount[currentGen - 1];
      console.log(record.streak[currentGen - 1]);
    }
  } else {
    //Reset count if incorrect
    correctCount[currentGen - 1] = 0;
  }

  updateStreak();
}

function nextPokemon() {
  console.log("nextPokemon");
  currentPokemonNumber = getNextPokemonNumber();
  displayPokemon();
  generateOptionsUI();
  document.getElementById("next").style.display = "none";
  document.getElementById("skip").style.display = "";
}

function skipPokemon() {
  console.log("skipPokemon");
  correctCount[currentGen - 1] = 0;
  nextPokemon();
}
