import "./styles/index.css";
import { initialCards } from "../scripts/initialCards.js";
import { fishImages } from "../scripts/fishImages.js";

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