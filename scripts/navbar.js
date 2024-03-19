import { rootFontSize, navbarButton, arrow, navbar, navbarContainer, symbolSvg, symbolPath, writingSvg, writingPath, navbarLinksText, cards, hoverHereText, hoverHereDiv, bullet, sections, scrollText, styleSheet, aboutLeftColumn, aboutSocialMedia, selfPortrait, skillsMenuSelection, skillsMenuOption, arrayskillsMenuOption, setupLoadAnimation, chooseObserverElement } from './index.js';


let lastScrollTop = 0;


navbarButton.addEventListener("mouseenter", () => {
    arrow.style.right = '2.55rem';
});


navbarButton.addEventListener("mouseleave", () => {
    arrow.style.right = '8rem';
});


function handleNavbarVisibility(currentScrollTop) {
    if (currentScrollTop > lastScrollTop) {
        navbar.style.top = '-50rem';
    } else if (currentScrollTop < lastScrollTop) {
        navbar.style.top = '0';
    };
    lastScrollTop = currentScrollTop;
}


function enableDarkNavbar() {
    navbarContainer.classList.add('navbarContainerDark');
        writingPath.setAttribute('fill', '#EBECF0');
        symbolPath.forEach(path => {
            path.setAttribute('stroke', '#EBECF0');
            path.setAttribute('stroke-width', '2');
        });
        navbarLinksText.forEach(link => {
            link.classList.add('navbarLinksTextDark');
        });
        navbarButton.classList.add('navButtonDark');
}


function enableLightNavbar() {
    navbarContainer.classList.remove('navbarContainerDark');
        writingPath.setAttribute('fill', '#14303F');
        symbolPath.forEach(path => {
            path.setAttribute('stroke', '#14303F');
            path.setAttribute('stroke-width', '3');
        });
        navbarLinksText.forEach(link => {
            link.classList.remove('navbarLinksTextDark');
        });
        navbarButton.classList.remove('navButtonDark');
}


window.addEventListener("scroll", () => {
    const currentScrollTop = ((window.pageYOffset || document.documentElement.scrollTop) / rootFontSize);
    handleNavbarVisibility(currentScrollTop);
    if (currentScrollTop > (740 / rootFontSize) && currentScrollTop < (1811 / rootFontSize)) {
        enableDarkNavbar();
    } else {
        enableLightNavbar();
    }
});