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

for (let i = 1; i < numberOfPages + 1; i++) {
  const pageTemplate = document
    .querySelector("#page")
    .content.querySelector(".page")
    .cloneNode(true);
  pageTemplate.classList.add(`page-${i}`);
  if (i !== 1) {
    pageTemplate.classList.add("page-hidden");
  }

  const cardArray = buildPage(i);
  cardArray.forEach((data) => {
    const card = new Card(data, "#card");
    const cardElement = card.generateCard();
    pageTemplate.append(cardElement);
  });

  cards.append(pageTemplate);
}

let projectCount = 0;
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");

function checkArrows(num) {
  if (num === 0) {
    leftArrow.setAttribute("style", "opacity: 0;");
    leftArrow.setAttribute("disabled", "");
  } else if (num > 0) {
    leftArrow.setAttribute("style", "opacity: 1;");
    leftArrow.removeAttribute("disabled");
  };
  if ((num + 1) >= (numberOfPages)) {
    rightArrow.setAttribute("style", "opacity: 0;");
    rightArrow.setAttribute("disabled", "");
  } else if ((num + 1 ) < (numberOfPages)) {
    rightArrow.setAttribute("style", "opacity: 1;");
    rightArrow.removeAttribute("disabled");
  }
}

checkArrows(projectCount);

function changePages(num) {
  const activePage = document.querySelector(`.page-${projectCount + 1}`);
  const nextPage = document.querySelector(`.page-${projectCount + 2}`);
  const previousPage = document.querySelector(`.page-${projectCount}`);

  activePage.classList.add("page-hidden");
  if (num === 1) {
    nextPage.classList.remove("page-hidden");
    projectCount++;
  }
  if (num === -1) {
    previousPage.classList.remove("page-hidden");
    projectCount--;
  }

  checkArrows(projectCount);
}

rightArrow.addEventListener("click", () => changePages(1));
leftArrow.addEventListener("click", () => changePages(-1));