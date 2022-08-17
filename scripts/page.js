import { initialCards } from "./initialCards.js";
import { Card } from "./Card.js";
import { shuffle } from "./index.js";

const numberOfItems = initialCards.length;
const numberPerPage = 90;
const numberOfPages = Math.ceil(numberOfItems / numberPerPage);
const cards = document.querySelector(".cards");

shuffle(initialCards);

function retrievePageArray(currPage, array) {
  let trimStart;
  if (currPage === 1) {
    trimStart = 0;
  } else {
    trimStart = (currPage - 1) * numberPerPage;
  }
  
  const trimEnd = trimStart + numberPerPage;
  const cardArray = array.slice(trimStart, trimEnd);
  return cardArray;
}

const buildPages = (array) => {
for (let i = 1; i < numberOfPages + 1; i++) {
  const pageTemplate = document
    .querySelector("#page")
    .content.querySelector(".page")
    .cloneNode(true);
  pageTemplate.classList.add(`page-${i}`);
  if (i !== 1) {
    pageTemplate.classList.add("page-hidden");
  }

  const cardArray = retrievePageArray(i, array);
  cardArray.forEach((data) => {
    const card = new Card(data, "#card");
    const cardElement = card.generateCard();
    pageTemplate.append(cardElement);
  });

  cards.append(pageTemplate);
}
}

buildPages(initialCards);

let projectCount = 0;
const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");

function checkArrows(num) {
  if (num === 0) {
    leftArrow.setAttribute("style", "opacity: 0;");
    leftArrow.setAttribute("disabled", "true");
  } else if (num > 0) {
    leftArrow.setAttribute("style", "opacity: 1;");
    leftArrow.removeAttribute("disabled");
  };
  if ((num + 1) >= (numberOfPages)) {
    rightArrow.setAttribute("style", "opacity: 0;");
    rightArrow.setAttribute("disabled", "true");
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
    if (nextPage === null) {
      activePage.classList.remove("page-hidden");6
      return;
    }
    nextPage.classList.remove("page-hidden");
    projectCount++;
  }
  if (num === -1) {
    if (previousPage === null) {
      activePage.classList.remove("page-hidden");
      return;
    }
    previousPage.classList.remove("page-hidden");
    projectCount--;
  }

  checkArrows(projectCount);
}

rightArrow.addEventListener("click", () => changePages(1));
leftArrow.addEventListener("click", () => changePages(-1));

const refreshButton = document.querySelector(".refresh");

const handleRefreshButton = () => {
  shuffle(initialCards);
  cards.innerHTML = "";
  buildPages(initialCards);
  projectCount = 0;
  checkArrows(projectCount);
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
  buildPages(initialCards);
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
  checkArrows(projectCount);
  const searchedArray = [];
  initialCards.forEach(element => {
    if (searchCards(element) === true) {
      searchedArray.push(element);
    }
  });
  buildPages(searchedArray);
});

searchForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
})