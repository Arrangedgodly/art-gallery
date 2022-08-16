import { initialCards } from "./initialCards.js";
import { Card } from "./Card.js";

const numberOfItems = initialCards.length;
const numberPerPage = 150;
const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
const cards = document.querySelector(".cards");

function buildPage(currPage) {
  let trimStart;
  if (currPage === 1) {
    trimStart = 0;
  } else {
    trimStart = (currPage - 1) * numberPerPage;
  }
  
  const trimEnd = trimStart + numberPerPage;
  const cardArray = initialCards.slice(trimStart, trimEnd);
  console.log(cardArray);
  return cardArray;
}

for (let i = 1; i < numberOfPages; i++) {
  const pageTemplate = document
    .querySelector("#page")
    .content.querySelector(".page")
    .cloneNode(true);
  pageTemplate.classList.add(`page-${i}`);

  const cardArray = buildPage(i);
  pageTemplate.innerHTML = cardArray.forEach((data) => {
    const card = new Card(data, "#card");
    const cardElement = card.generateCard();
    return cardElement;
  });

  cards.append(pageTemplate);
}
