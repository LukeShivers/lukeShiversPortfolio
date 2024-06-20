import {
  rootFontSize,
  navbarButton,
  arrow,
  navbar,
  navbarContainer,
  writingSvg,
  writingPath,
  navbarMenu,
  navbarLinksText,
  cards,
  hoverHereText,
  hoverHereDiv,
  bullet,
  sections,
  scrollText,
  styleSheet,
  aboutLeftColumn,
  aboutSocialMedia,
  selfPortrait,
  skillsMenuSelection,
  skillsMenuOption,
  arrayskillsMenuOption,
  setupLoadAnimation,
  chooseObserverElement,
} from "./index.js";

const preloaderContainer = document.querySelector(".preloaderContainer");
const planeContainer = document.querySelector(".planeContainer");

window.addEventListener("load", () => {
  setTimeout(() => {
    if (window.innerWidth <= 600) {
      preloaderContainer.style.transform = "translate(400rem, 0)";
    } else {
      preloaderContainer.style.transform = "translate(500rem, 0)";
    }
  }, 2000);
});

const preloaderPlane = bodymovin.loadAnimation({
  container: planeContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "preloaderPlane.json",
});
