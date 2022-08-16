import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { fishImages } from "./fishImages.js";

console.log(initialCards.length);
console.log(fishImages.length);

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

shuffle(initialCards);

const leftHeaderImage = document.querySelector(".img-head-left");
const rightHeaderImage = document.querySelector(".img-head-right");

function changeHeaderImages() {
  shuffle(fishImages);
  leftHeaderImage.src = fishImages[5].link;
  rightHeaderImage.src = fishImages[10].link;
}

setInterval(changeHeaderImages, 1000);

const cards = document.querySelector(".cards");

let projectCount = 0;
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const index = Math.ceil(initialCards.length / 150);

function checkArrows(num) {
  if (num === 0) {
    leftArrow.setAttribute("style", "opacity: 0;");
    leftArrow.setAttribute("disabled", "");
  } else if (num > 0) {
    leftArrow.setAttribute("style", "opacity: 1;");
    leftArrow.removeAttribute("disabled");
  };
  if ((num + 1) >= (index)) {
    rightArrow.setAttribute("style", "opacity: 0;");
    rightArrow.setAttribute("disabled", "");
  } else if ((num + 1 ) < (index)) {
    rightArrow.setAttribute("style", "opacity: 1;");
    rightArrow.removeAttribute("disabled");
  }
}

checkArrows(projectCount);

const createCards = (num, array) => {
  cards.innerHTML = "";
  let cardCount = 0;
  if (num > 0) {
    cardCount = num * 150;
  }
  let tracker = cardCount + 150;
  let newCards = array.slice(cardCount, tracker);

  newCards.forEach((data) => {
    const card = new Card(data, "#card");
    const cardElement = card.generateCard();
    cards.append(cardElement);
  })
}

createCards(projectCount, initialCards);

function clickRightArrow() {
  projectCount++;
  checkArrows(projectCount);
  createCards(projectCount, initialCards);
}

function clickLeftArrow() {
  projectCount--;
  checkArrows(projectCount);
  createCards(projectCount, initialCards);
}

leftArrow.addEventListener("click", clickLeftArrow);
rightArrow.addEventListener("click", clickRightArrow);

const refreshButton = document.querySelector(".refresh");

function handleRefreshButton() {
  cards.innerHTML = "";
  projectCount = 0;
  sortCounter = 0;
  checkArrows(projectCount);
  shuffle(initialCards);
  createCards(projectCount, initialCards);
}

refreshButton.addEventListener("click", handleRefreshButton);

let sortCounter = 0;
const sortButton = document.querySelector(".sort");

function handleSortButton() {
  cards.innerHTML = "";
  projectCount = 0;
  checkArrows(projectCount);
  if (sortCounter === 1) {
    initialCards.reverse();
    sortCounter--;
  }
  else if (sortCounter === 0) {
    initialCards.sort(function (a, b) {
      if (a.prompt < b.prompt) {
        return -1;
      }
      if (a.prompt > b.prompt) {
        return 1;
      }
      return 0;
    });
    sortCounter++;
    }
  createCards(projectCount, initialCards);
}

sortButton.addEventListener("click", handleSortButton);

const searchForm = document.querySelector(".search-form");
const search = searchForm.querySelector(".search");

const searchCards = (data) => {
  const prompt = data.prompt.toLowerCase();
  const value = search.value.toLowerCase();
  if (prompt.includes(value)) {
    return true;
  }
  else {
    return false;
  }
}

search.addEventListener("keyup", () => {
  cards.innerHTML = "";
  projectCount = 0;
  const filteredCards = initialCards.filter(searchCards);
  console.log(filteredCards);
  checkArrows(projectCount);
  createCards(projectCount, filteredCards);
});

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
})