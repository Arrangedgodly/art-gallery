import { Card } from "./Card.js";
import { initialCards } from "./initialCards.js";
import { fishImages } from "./fishImages.js";

console.log(initialCards.length);
console.log(fishImages.length);

export function shuffle(array) {
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

const header = document.querySelector(".header");
const headerHeight = header.offsetHeight;

const cards = document.querySelector(".cards");
cards.setAttribute("style", `height:calc(100vh - ${headerHeight}px)`);