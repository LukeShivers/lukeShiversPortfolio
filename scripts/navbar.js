import { rootFontSize, navbarButton, arrow, navbar, navbarContainer, symbolSvg, symbolPath, writingSvg, writingPath, navbarLinksText, cards, hoverHereText, hoverHereDiv, bullet, sections, scrollText, styleSheet, aboutLeftColumn, aboutSocialMedia, selfPortrait, skillsMenuSelection, skillsMenuOption, arrayskillsMenuOption, setupLoadAnimation, chooseObserverElement } from './index.js';


const mobileMenu = document.getElementById('mobileMenu');
const mobileMenuBar = document.querySelectorAll('.bar')
const navbarMenu = document.querySelector('.navbarMenu');
const navItem = document.querySelectorAll('.navbarItem');


let lastScrollTop = 0;


mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('is-active');
    navbarMenu.classList.toggle('active');
});


navItem.forEach(item => {
    if (window.innerWidth <= 600) {
        item.addEventListener('click', () => {
            navbar.style.top = '-1000px';
            mobileMenu.classList.remove('is-active');
            navbarMenu.classList.remove('active');
        })     
    }
})


navbarButton.addEventListener("mouseenter", () => {
    if (window.innerWidth >= 600) {
        arrow.style.right = '2.55rem';
    }
});


navbarButton.addEventListener("mouseleave", () => {
    arrow.style.right = '8rem';
});


function handleNavbarVisibility(currentScrollTop) {
    if (currentScrollTop > lastScrollTop) {
        navbar.style.top = '-1000px';
        mobileMenu.classList.remove('is-active');
        navbarMenu.classList.remove('active');
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
        mobileMenuBar.forEach(bar => {
            bar.style.backgroundColor = '#EBECF0';
        })
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
        mobileMenuBar.forEach(bar => {
            bar.style.backgroundColor = '#14303F';
        })
}



window.addEventListener("scroll", () => {
    const currentScrollTop = (window.scrollY / rootFontSize);
    handleNavbarVisibility(currentScrollTop);
    if (window.innerWidth <= 600) {
        if (currentScrollTop > (78.5) && currentScrollTop < (220)) {
            enableDarkNavbar();
        } else {
            enableLightNavbar();
        }
    } else {
        if (currentScrollTop > (74) && currentScrollTop < (181.1)) {
            enableDarkNavbar();
        } else {
            enableLightNavbar();
        }
    }
});