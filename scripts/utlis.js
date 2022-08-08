const modal = document.querySelector(".modal");

function escapeKeyHandler(evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove("modal_opened");
  }
}

document.addEventListener("keydown", escapeKeyHandler);

document.addEventListener("mouseup", (e) => {
  let openedModal = document.querySelector(".modal_opened");
  if (openedModal === null) {return;}
  else if (e.target === openedModal) {
    openedModal.classList.remove("modal_opened");
  };
});