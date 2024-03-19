import { rootFontSize, navbarButton, arrow, navbar, navbarContainer, symbolSvg, symbolPath, writingSvg, writingPath, navbarLinksText, cards, hoverHereText, hoverHereDiv, bullet, sections, scrollText, styleSheet, aboutLeftColumn, aboutSocialMedia, selfPortrait, skillsMenuSelection, skillsMenuOption, arrayskillsMenuOption, setupLoadAnimation, chooseObserverElement } from './index.js';


const preloaderContainer = document.querySelector('.preloaderContainer');
const planeContainer = document.querySelector('.planeContainer')


window.addEventListener("load", () => {
    setTimeout(() => {
        preloaderContainer.style.transform = "translate(500rem, 0)";
    }, 2000);
});


const preloaderPlane = bodymovin.loadAnimation({
    container: planeContainer,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'preloaderPlane.json'
})