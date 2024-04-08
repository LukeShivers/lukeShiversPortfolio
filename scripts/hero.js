import { rootFontSize, navbarButton, arrow, navbar, navbarContainer, symbolSvg, symbolPath, writingSvg, writingPath, navbarLinksText, cards, hoverHereText, hoverHereDiv, bullet, sections, scrollText, styleSheet, aboutLeftColumn, aboutSocialMedia, selfPortrait, skillsMenuSelection, skillsMenuOption, arrayskillsMenuOption, setupLoadAnimation, chooseObserverElement } from './index.js';

const d2Text = document.getElementById('d2');
const d3Text = document.getElementById('d3');
const e3Text = document.getElementById('e3');
const v11Text = document.getElementById('v11');
const e12Text = document.getElementById('e12');
const l13Text = document.getElementById('l13');
const o20Text = document.getElementById('o20');
const p20Text = document.getElementById('p20');
const e21Text = document.getElementById('e21');
const e21Copy = document.getElementById('e21Copy')
const r22Text = document.getElementById('r22');


const sectionsArray = Array.from(sections);
const bulletArray = Array.from(bullet);


cards.forEach(card => {
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);
});


function cardMouseMove(e) {
    const card = e.currentTarget;
    const cardWidth = card.offsetWidth;
    const cardHeight = card.offsetHeight;
    const centerX = card.offsetLeft + cardWidth/2;
    const centerY = (card.offsetTop + 110) + cardHeight/2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateXUnres = (+1) * 40 * mouseY/(cardHeight/2);
    const rotateYUnres = (-1) * 40 * mouseX/(cardWidth/2);
    const rotateX = rotateXUnres < -40 ? -40 : rotateXUnres;
    const rotateY = rotateYUnres < -40 ? -40 : rotateYUnres;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) 
                            rotateY(${rotateY}deg)`;
}


function cardMouseLeave(e) {
    e.currentTarget.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
}


function getRandomCard() {
    const randomIndex = Math.floor(Math.random() * cards.length);
    return cards[randomIndex];
}


function spinMotion(selectedDiv, xRotation, yRotation, timeout) {
    setTimeout(() => {
        selectedDiv.style.transform = `perspective(1000px) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
    }, timeout);
}


function twinkle(div) {
    div.style.transition = "all 0.33s ease"
    spinMotion(div, 0, -15, 0);
    spinMotion(div, 10.61, -10.61, 167)
    spinMotion(div, 15, 0, 333);
    spinMotion(div, 10.61, 10.61, 500)
    spinMotion(div, 0, 15, 666);
    spinMotion(div, -10.61, 10.61, 834)
    spinMotion(div, -15, 0, 999);
    spinMotion(div, -10.61, -10.61, 1167)
    spinMotion(div, 0, 0, 1333);
    setTimeout(() => {
        div.style.transition = '';
    }, 1500);
}

// Handle auto twinkle
window.addEventListener("load", () => {
    setTimeout(() => {
        setInterval(() => {
            const selectedDivFirst = getRandomCard();
            const selectedDivSecond = getRandomCard();

            if (selectedDivFirst == selectedDivSecond) {
                twinkle(selectedDivFirst);
            } else {
                twinkle(selectedDivFirst);
                setTimeout(() => {
                    twinkle(selectedDivSecond);
                }, 666);
            };
        }, 2000)
    }, 2500);
})


// Handle "hover here" microinteration 
hoverHereDiv.addEventListener("mouseenter", () => {
    hoverHereText.textContent = "Now the Next One!";
});
hoverHereDiv.addEventListener("mouseleave", () => {
    hoverHereText.textContent = "* Hover Here *";
});


// Handle bullets microinteration
window.addEventListener('scroll', () => {
    let scrollPosition = (window.scrollY / rootFontSize) - 23;
    sectionsArray.forEach(section => {
        if (scrollPosition >= (section.offsetTop / rootFontSize)) {
            bulletArray.forEach(bullet => {
                bullet.classList.add('non-actBullet');
                bullet.classList.remove('activeBullet');
                if ("#" + section.getAttribute('id') === bullet.getAttribute('href')) {
                    bullet.classList.add('activeBullet');
                    bullet.classList.remove('non-actBullet');
                }
            });
        }
    });
});


// Handle "Scroll text" bobbing
setTimeout(() => {
    scrollText.style.animation = 'scrollBobbing 1.5s ease-in-out infinite';
}, 4700);


// Handle the load in sequence of the "DEVELOPER" texts
function heroContentLoadAnimation (targetElement, animationName, delay) {
    const getStyle = window.getComputedStyle(targetElement).getPropertyValue('bottom');
    const styleInRems = parseFloat(getStyle) / rootFontSize;
    targetElement.style.bottom = `calc(${styleInRems}rem - 3rem)`;
    targetElement.style.opacity = '0';
    targetElement.style.animation = `${animationName} 0.5s ease-out ${delay} forwards`;

    const keyframeAnimation = `
        @keyframes ${animationName} {
            0% {transform: translateY(0);}
            33% {opacity: 100;}
            100% {transform: translateY(-3rem); opacity: 100;}
        }
    `;
    styleSheet.insertRule(keyframeAnimation, 
    styleSheet.cssRules.length);
};


heroContentLoadAnimation (d2Text, 'd2LoadAnimation', '3.85s');
heroContentLoadAnimation (d3Text, 'd3LoadAnimation', '3.91s');
heroContentLoadAnimation (e3Text, 'e3LoadAnimation', '3.97s');
heroContentLoadAnimation (v11Text, 'v11LoadAnimation', '4.05s');
heroContentLoadAnimation (e12Text, 'e12LoadAnimation', '4.15s');
heroContentLoadAnimation (l13Text, 'l13LoadAnimation', '4.25s');
heroContentLoadAnimation (o20Text, 'o20LoadAnimation', '4.31s');
heroContentLoadAnimation (p20Text, 'p20LoadAnimation', '4.37s');
heroContentLoadAnimation (e21Text, 'e21LoadAnimation', '4.45s');
heroContentLoadAnimation (e21Copy, 'e21CopyLoadAnimation', '4.45s');
heroContentLoadAnimation (r22Text, 'r22LoadAnimation', '4.55s');