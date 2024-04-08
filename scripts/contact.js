import { rootFontSize, navbarButton, arrow, navbar, navbarContainer, symbolSvg, symbolPath, writingSvg, writingPath, navbarLinksText, cards, hoverHereText, hoverHereDiv, bullet, sections, scrollText, styleSheet, aboutLeftColumn, aboutSocialMedia, selfPortrait, skillsMenuSelection, skillsMenuOption, arrayskillsMenuOption, setupLoadAnimation, chooseObserverElement } from './index.js';

const contactBtn = document.querySelector('.contactBtn');
const contactBtnOutline = document.querySelector('.contactBtnOutline');
const contactSubheading = document.querySelector('.contactSubheading');
const contactButton = document.querySelector('.contactBtn');
const michaelangeloHand = document.querySelector('.michaelangeloHand');


contactBtn.addEventListener('mouseover', () => {
    if (window.innerWidth >= 600) {
        contactBtnOutline.style.transform = 'scaleY(1.4) scaleX(1.1)';
        contactBtnOutline.style.opacity = '1';
    }
})


contactBtn.addEventListener('mouseout', () => {
    if (window.innerWidth >= 600) {
        contactBtnOutline.style.transform = 'scaleY(1) scaleX(1)';
        contactBtnOutline.style.opacity = '0';
    }
})


const contactSubheadingLoad = {
    animationOrientation: 'vertical',
    animationDirection: null,
    animationDistance: '3rem',
    animatedElement: contactSubheading,
    opacity: '100%',
    cssAnimationName: 'contactSubheadingLoad',
    observedElement: null,
    animationTime: null,
    thresholdValue: null
}
setupLoadAnimation (contactSubheadingLoad);
export function animateContactSubheading() {
    setTimeout(() => {
        contactSubheading.style.animation = 'contactSubheadingLoad 0.3s ease-out forwards';
    }, 200);
}


const contactBtnLoad = {
    animationOrientation: 'vertical',
    animationDirection: null,
    animationDistance: '3rem',
    animatedElement: contactButton,
    opacity: '100%',
    cssAnimationName: 'contactButtonLoad',
    observedElement: null,
    animationTime: null,
    thresholdValue: null
}
setupLoadAnimation (contactBtnLoad);
export function animateContactBtn() {
    setTimeout(() => {
        contactButton.style.animation = 'contactButtonLoad 0.3s ease-out forwards';
    }, 400);
}


const michaelangeloHandLoad = {
    animationOrientation: 'horizontal',
    animationDirection: 'left',
    animationDistance: '10rem',
    animatedElement: michaelangeloHand,
    opacity: '100%',
    cssAnimationName: 'michaelangeloHandLoad',
    observedElement: null,
    animationTime: null,
    thresholdValue: null
}
setupLoadAnimation (michaelangeloHandLoad);
export function animateMichaelangeloHand() {
    setTimeout(() => {
        michaelangeloHand.style.animation = 'michaelangeloHandLoad 0.6s ease-out forwards';
    }, 600);
}