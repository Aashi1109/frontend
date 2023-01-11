const popupContent = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__close");
popupContent.addEventListener("click", (e) => {
  console.dir(popupClose);
  popupClose.click();
});

const nameInput = document.querySelector('input[id="name"]');
const showInfoPopup = document.querySelector(".info__popup--open");
const showInfoPopupContent = document.querySelector("#info__popup");
const showInfoPopupClose = document.querySelector(".info__popup--close");
showInfoPopupContent.addEventListener("click", () => {
  showInfoPopupClose.click();
});

nameInput.addEventListener("focus", () => {
  if (localStorage.getItem("info_popup") != "shown") {
    showInfoPopup.click();
    localStorage.setItem("info_popup", "shown");
  }
});

const navigationLinks = document.querySelectorAll(".navigation__link");
const navToggleCheckBox = document.querySelector(".navigation__checkbox");

for (let link of navigationLinks) {
  link.addEventListener("click", () => {
    navToggleCheckBox.click();
  });
}
