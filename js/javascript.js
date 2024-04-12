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
let imageDirectory = "https://phongtran3.github.io/WhosThatPokemon/images/artwork/";
let record = Records; //hold user streak record
let pokemonArray = []; //Array which stores the IDs of the Pokemon to be shown to the user, based on their selected gen
let pokemonArrayIndex = 0; //Index of the pokemonArray array which points to the Pokemon the user is currently guessing.

function onReady() {
  document.getElementById(`gen${1}`)?.classList.add("genSelected");
  document.getElementById("game-content").classList.remove("hidden");
  document.getElementById("loader").classList.add("hidden");

  //On click for generations
  function onGenClick(e) {
    e.preventDefault();
    setGen(parseInt(this.getAttribute("data-gen"), 10));
  }
  document.querySelectorAll(".genre").forEach((el) => el.addEventListener("click", onGenClick));

  function onSelectGenClick(e) {
    let overlay = document.querySelector(".sel-gen-overlay");
    overlay.style.display = overlay.style.display === "none" ? "block" : "none";
    document.getElementById("gen-container").classList.add("showOverlay");
  }

  document.getElementById("genSelect-mobile").addEventListener("click", onSelectGenClick);

  function onGenOverlayClick(e) {
    document.querySelector(".sel-gen-overlay").style.display = "none";
    document.getElementById("gen-container").classList.remove("showOverlay");
  }
  document.getElementById("gen-overlay").addEventListener("click", onGenOverlayClick);
  document.getElementById("close-btn").addEventListener("click", onGenOverlayClick);

  const canvas = document.getElementById("shadowImage");
  canvas.willReadFrequently = true;

  document.getElementById("next").addEventListener("click", nextPokemon);
  document.getElementById("giveUp").addEventListener("click", giveUp);
  document.getElementById("next").style.display = "none";
  document.getElementById("gen-finished").style.display = "none";

  loadState();
  generateNewPokeNumbers();
  currentPokemonNumber = getNextPokemonNumber();
  displayPokemon();
  generateOptionsUI();
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
  if (genId !== currentGen) {
    document.getElementById(`gen${currentGen}`)?.classList.remove("genSelected");
    document.getElementById("giveUp").style.display = "";
    document.getElementById("next").style.display = "none";
    document.getElementById(`gen${genId}`)?.classList.add("genSelected");
  }
  currentGen = genId;
  correctCount[genId - 1] = 0;

  let overlay = document.querySelector(".sel-gen-overlay");
  overlay.style.display = overlay.style.display === "none" ? "block" : "none";
  document.getElementById("gen-container").classList.remove("showOverlay");

  let onGenFinished = document.getElementById("gen-finished");
  onGenFinished.style.display = onGenFinished.style.display === "flex" ? "none" : onGenFinished.style.display;

  let gameContent = document.getElementById("game-content");
  if (gameContent.classList.contains("hidden")) gameContent.classList.remove("hidden");

  generateNewPokeNumbers();
  currentPokemonNumber = getNextPokemonNumber();
  displayPokemon();
  generateOptionsUI();
}

//Re-generates the array of Pokémon numbers
function generateNewPokeNumbers() {
  pokemonArray = [];
  pokemonArrayIndex = 0;
  let start = GENERATIONS[currentGen].start;
  let end = GENERATIONS[currentGen].end;
  range(start, end + 1).forEach((pokeNum) => {
    pokemonArray.push(pokeNum);
  });
  pokemonArray = shuffle(pokemonArray);
}

//Display the new random Pokemon
function displayPokemon() {
  clearCanvas("shadowImage");
  updateStreak();
  saveState();
  if (currentPokemonNumber === -1) {
    onGenFinished();
  } else {
    currentPokemonName = getPokemonName(currentPokemonNumber);
    currentPokemonImgUrl = getPokemonImageUrl(currentPokemonNumber);
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
  loadedImage.crossOrigin = "anonymous";

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
  let onGenFinished = document.getElementById("gen-finished");
  let gameContent = document.getElementById("game-content");
  onGenFinished.style.display = onGenFinished.style.display === "none" ? "flex" : "none";
  gameContent.classList.add("hidden");
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
  let optionsArray = Array.from(options);

  if (userSolution === currentPokemonName) {
    e.target.classList.add("correct");
    revealPokemon(true);
    this.removeEventListener("click", checkPokemonAnswer);
  } else {
    e.target.classList.add("incorrect");
    revealPokemon(false);
  }

  optionsArray.forEach((element) => {
    if (element.innerText.toLowerCase() == currentPokemonName) {
      element.classList.add("correct");
    }
    element.removeEventListener("click", checkPokemonAnswer);
  });

  document.getElementById("giveUp").style.display = "none";
}

function generateOptionsUI() {
  let options = fisherYatesShuffle(populateOptions());
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
  if (string.length === 0) return string.charAt(0).toUpperCase() + string.slice(1);
  else {
    let words = string.toLowerCase().split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].substring(1);
    }
    return words.join(" ");
  }
}

//Remove the silhouette of the Pokemon
function revealPokemon(isCorrectGuess) {
  silhouette(currentPokemonImgUrl, "shadowImage", false);

  document.getElementById("next").style.display = "";

  if (isCorrectGuess) {
    correctCount[currentGen - 1]++;
    //Increase best count if beaten
    if (correctCount[currentGen - 1] > record.streak[currentGen - 1]) {
      record.streak[currentGen - 1] = correctCount[currentGen - 1];
    }
  } else {
    //Reset count if incorrect
    correctCount[currentGen - 1] = 0;
  }

  updateStreak();
}

function nextPokemon() {
  currentPokemonNumber = getNextPokemonNumber();
  displayPokemon();
  generateOptionsUI();
  document.getElementById("next").style.display = "none";
  document.getElementById("giveUp").style.display = "";
}

function giveUp() {
  revealPokemon(false);
  document.getElementById("giveUp").style.display = "none";
  document.getElementById("next").style.display = "";

  let options = document.querySelectorAll(".option");
  let optionsArray = Array.from(options);
  optionsArray.forEach((element) => {
    if (element.innerText.toLowerCase() == currentPokemonName) {
      element.classList.add("correct");
    }

    element.removeEventListener("click", checkPokemonAnswer);
  });
}
