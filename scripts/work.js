import { rootFontSize, navbarButton, arrow, navbar, navbarContainer, symbolSvg, symbolPath, writingSvg, writingPath, navbarLinksText, cards, hoverHereText, hoverHereDiv, bullet, sections, scrollText, styleSheet, aboutLeftColumn, aboutSocialMedia, selfPortrait, skillsMenuSelection, skillsMenuOption, arrayskillsMenuOption, setupLoadAnimation, chooseObserverElement } from './index.js';

const snakeImg = document.querySelector('.snakeXRay');
const colorPalet = document.querySelector('.workColorPalet')

const monochromePalet = ['#042530', '#14303F', '#214859', '#31697C', '#5891A0', '#EBECF0']
const snakePalet = ['#4C5E4D', '#3F4235', '#5C614A', '#8D9572', '#AFB792', '#C7CFA7']


snakeImg.addEventListener("mouseover", () => {
    for(let i = 1; i <= snakePalet.length; i++) {
        colorPalet.querySelector(`:nth-child(${i})`).style.backgroundColor = snakePalet[i - 1]
    }
    colorPalet.querySelector(':nth-child(6)').style.border = 'none';
});

snakeImg.addEventListener("mouseout", () => {
    for(let i = 1; i <= monochromePalet.length; i++) {
        colorPalet.querySelector(`:nth-child(${i})`).style.backgroundColor = monochromePalet[i - 1]
    }
    colorPalet.querySelector(':nth-child(6)').style.border = '0.1rem solid #14303F';
});