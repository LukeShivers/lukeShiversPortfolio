let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

// Preloader
const preloaderContainer = document.querySelector('.preloader__container');

// Vertical Nav 
const scrollLineLight = document.querySelector('.scroll__line__light');
const scrollLineDark = document.querySelector('.scroll__line__dark');
const contactLine = document.querySelector('.contact__line');

// Navbar
const button = document.querySelector('.button');
const arrow = document.querySelector('.button__arrow');
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
const navbarContainer = document.querySelector('.navbar__container');
const symbolSvg = document.querySelector('.nav__logoSymbol');
const symbolPath = symbolSvg.querySelectorAll('path');
const writingSvg = document.querySelector('.nav__logoWriting');
const writingPath = writingSvg.querySelector('path');
const navbarLinksText = document.querySelectorAll('.navbar__links__text');

// Hero
const cards = document.querySelectorAll(".grid__div");
const hoverHereText = document.querySelector('.hover__here__text');
const hoverHereDiv = document.querySelector('.grid__div:nth-child(7)');
const bullet = document.querySelectorAll('.bullet');
const sections = document.querySelectorAll('.section');
const sectionsArray = Array.from(sections);
const bulletArray = Array.from(bullet);
const scrollText = document.querySelector('.hero__scroll__text')
const d2Text = document.getElementById('d__2');
const d3Text = document.getElementById('d__3');
const e3Text = document.getElementById('e__3');
const v11Text = document.getElementById('v__11');
const e12Text = document.getElementById('e__12');
const l13Text = document.getElementById('l__13');
const o20Text = document.getElementById('o__20');
const p20Text = document.getElementById('p__20');
const e21Text = document.getElementById('e__21');
const r22Text = document.getElementById('r__22');

// About
const styleSheet = document.styleSheets[0];
const aboutLeftColumn = document.querySelector('.leftCol__wrapper');
const aboutSocialMedia = document.querySelector('.about__social__media__container');
const selfPortrait = document.querySelector('.self__portrait');
const aboutHeadingText = document.querySelector('.about__text');

// Work
const workHeadingContainer = document.querySelector('.work__text__container');
const workHeadingText = document.querySelector('.work__text');
const workNullObject = document.querySelector('.work__null__object');
const workHand = document.querySelector('.claw__svg');
const workCards = document.querySelectorAll('.work__card');
const workCardsArray = Array.from(workCards);

// Certifications
const certificationsBlock = document.querySelector('.cert__block');
const certificationsHeadingContainer = document.querySelector('.certifications__text__container');
const certificationsHeadingText = document.querySelector('.certifications__text');
const certSelectionArea = document.querySelector('.cert__selection__area');
const menuClick = document.querySelectorAll('.cert__box');
const arrayMenuClick = Array.from(menuClick);

// Contact
const contactDiv = document.querySelector('.contact__div');
const contactHeading = document.querySelector('.contact__heading');
const contactSubheading = document.querySelector('.contact__subheading');
const contactButton = document.querySelector('.contact__button');

function createSetUpAndKeyframeAnimation (animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName) {
    // Set-up: Takes the element you want to animate and reduces opacity to zero, then either moves it horizontal or vertical
    let translationDirection = '';
    let translationSign = ''


    if (animationOrientation == 'horizontal') {
        translationDirection = 'translateX';
        // Determine if we should push the animated element left or right
        if (animationDirection == 'right') {
            translationSign = '-';
        } else if (animationDirection == 'left') {
            translationSign = '';
        } else {
            throw new Error("invalid animationDirection parameter");
        }
        animatedElement.style.transform = `translateX(${translationSign}${animationDistance})`;
        animatedElement.style.opacity = '0';


    } else if (animationOrientation == 'vertical') {
        translationDirection = 'translateY';
        animatedElement.style.transform = `translateY(${animationDistance})`;
        animatedElement.style.opacity = '0';


    } else {
        throw new Error("invalid animationOrientation parameter");
    }

    // Creates the keyframe animation with the animation name and injects it into the CSS Stylesheet
    const keyframeAnimation = `
        @keyframes ${cssAnimationName} {
            0% {transform: ${translationDirection}(${translationSign}${animationDistance});}
            33% {opacity: ${opacity};}
            100% {transform: ${translationDirection}(0); opacity: ${opacity};}
        }
    `;
    styleSheet.insertRule(keyframeAnimation, 
    styleSheet.cssRules.length);
};
function chooseObserverElement (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue) {
    // Injects an animation call into the target elements CSS, marrying the two, when the desired
    // amount of the object is showing
    const targetObjectObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= thresholdValue) {
                    animatedElement.style.animation = `${cssAnimationName} ${animationTime} ease-out forwards`;
                    targetObjectObserver.unobserve(entry.target);
                    };
            })
        },
        {
            threshold: thresholdValue,
        }
    );

    // A call that selects what element (target element) to observe
    targetObjectObserver.observe(observedElement);
};


/* 
--------------------------------------------------
Preloader - Loading Animation
--------------------------------------------------
*/


window.addEventListener("load", (event) => {
    setTimeout(() => {
        preloaderContainer.style.transform = "translate(500rem, 0)";
    }, 2000);
});

const preloaderPlane = bodymovin.loadAnimation({
    container: document.querySelector('.plane__container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'preloaderPlane.json'
})


/*
--------------------------------------------------
Vertical Navbar
--------------------------------------------------
*/


// Scroll Line initial page load
    setTimeout(() => {
        scrollLineLight.style.height = '36rem';
    }, 5000);

// About Heading Load on Scroll Position
    function aboutHeadingTextLoad (observedElement, animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName, animationTime, thresholdValue) {
        createSetUpAndKeyframeAnimation (animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName);
        chooseObserverElement (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue);
    }
    aboutHeadingTextLoad (aboutLeftColumn, 'horizontal', 'right', '1rem', aboutHeadingText, '50%', 'aboutHeadingTextLoad', '0.3s', 0.1);
    function aboutLeftColumnLoad (observedElement, animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName, animationTime, thresholdValue) {
        createSetUpAndKeyframeAnimation (animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName);
        chooseObserverElement (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue);
    };
    aboutLeftColumnLoad (aboutLeftColumn, 'vertical', null, '6rem', aboutLeftColumn, '100%', 'leftColLoad', '0.5s', 0.3);

// Scroll Line to Work Load on Scroll Position
    function toWorkCustomScrollLineLoading () {
        const targetObjectObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= 1) {
                        scrollLineLight.style.height = '117.875rem';
                        setTimeout(() => {
                            scrollLineDark.style.height = '16.45rem';
                        }, 300);
                        targetObjectObserver.unobserve(entry.target);
                        };
                })
            },
            {
                threshold: 1,
            }
        );
        targetObjectObserver.observe(workHeadingContainer);
    };
    toWorkCustomScrollLineLoading ();

// Work - Definfe Load Animation for Hand SVG & Cards, then call based on Scroll Position
    createSetUpAndKeyframeAnimation ('vertical', null, '6rem', workHand, '100%', 'workHandLoad');
    workCardsArray.forEach(card => {
        createSetUpAndKeyframeAnimation ('vertical', null, '6rem', card, '100%', 'workCardsLoad');
    });
    function workCustomIntersectionObserver (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue) {
        const targetObjectObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= thresholdValue) {
                        animatedElement.style.animation = `${cssAnimationName} ${animationTime} ease-out forwards`;
                        setTimeout(() => {
                            workHand.style.animation = 'workHandLoad 0.5s ease-out forwards';
                            workCardsArray.forEach(card => {
                                card.style.animation = 'workCardsLoad 0.5s ease-out forwards';
                            });
                        }, 250);
                        setTimeout(() => {
                            scrollLineDark.style.height = '95rem';
                        }, 500);
                        targetObjectObserver.unobserve(entry.target);
                        };
                })
            },
            {
                threshold: thresholdValue,
            }
        );
        targetObjectObserver.observe(observedElement);
    };
    function workHeadingTextLoad (observedElement, animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName, animationTime, thresholdValue) {
        createSetUpAndKeyframeAnimation (animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName);
        workCustomIntersectionObserver (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue);
    }
    workHeadingTextLoad (workHand, 'horizontal', 'right', '1rem', workHeadingText, '100%', 'workHeadingTextLoad', '0.3s', 0.15);

// Scroll Line to Certifications Load on Scroll Position
    function toCertificationsCustomScrollLineLoading () {
        const targetObjectObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= 1) {
                        scrollLineDark.style.height = '171.74rem';
                        targetObjectObserver.unobserve(entry.target);
                        };
                })
            },
            {
                threshold: 1,
            }
        );
        targetObjectObserver.observe(certificationsHeadingContainer);
    };
    toCertificationsCustomScrollLineLoading ();

// Certifications
    createSetUpAndKeyframeAnimation ('horizontal', 'left', '6rem', certificationsBlock, '100%', 'certificationsSectionLoad');
    function certificationsCustomIntersectionObserver (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue) {
        const targetObjectObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= thresholdValue) {
                        animatedElement.style.animation = `${cssAnimationName} ${animationTime} ease-out forwards`;
                        setTimeout(() => {
                            certificationsBlock.style.animation = 'certificationsSectionLoad 0.5s ease-out forwards';
                        }, 250);
                        setTimeout(() => {
                            scrollLineDark.style.height = '277rem';
                        }, 500);
                        setTimeout(() => {
                            contactLine.style.width = '24.9rem';
                        }, 750);
                        targetObjectObserver.unobserve(entry.target);
                        };
                })
            },
            {
                threshold: thresholdValue,
            }
        );
        targetObjectObserver.observe(observedElement);
    };
    function certificationsHeadingTextLoad (observedElement, animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName, animationTime, thresholdValue) {
        createSetUpAndKeyframeAnimation (animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName);
        certificationsCustomIntersectionObserver (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue);
    }
    certificationsHeadingTextLoad (certificationsBlock, 'horizontal', 'right', '1rem', certificationsHeadingText, '100%', 'certificationsHeadingTextLoad', '0.3s', 0.15);

// Contact
    createSetUpAndKeyframeAnimation ('vertical', null, '6rem', contactHeading, '100%', 'contactHeadingLoad');
    function contactCustomIntersectionObserver (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue) {
        const targetObjectObserver = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.intersectionRatio >= thresholdValue) {
                        animatedElement.style.animation = `${cssAnimationName} ${animationTime} ease-out forwards`;
                        setTimeout(() => {
                            contactSubheading.style.transform = 'translateY(0rem)';
                            contactSubheading.style.opacity = '100%';
                            contactSubheading.style.transition = 'all 0.3s ease-out';
                        }, 200);
                        setTimeout(() => {
                            contactButton.style.transform = 'translateY(0rem)';
                            contactButton.style.opacity = '100%';
                            contactButton.style.transition = 'all 0.3s ease-out';
                        }, 400);
                        targetObjectObserver.unobserve(entry.target);
                        };
                })
            },
            {
                threshold: thresholdValue,
            }
        );
        targetObjectObserver.observe(observedElement);
    };
    contactCustomIntersectionObserver (contactDiv, contactHeading, 'contactHeadingLoad', '0.3s', 0.6);



/*
--------------------------------------------------
Navbar - Button Hover Effect
--------------------------------------------------
*/


button.addEventListener("mouseenter", () => {
    arrow.style.right = '2.55rem';
});

button.addEventListener("mouseleave", () => {
    arrow.style.right = '8rem';
});


/*
--------------------------------------------------
Navbar - Whole Navbar
--------------------------------------------------
*/


window.addEventListener("scroll", () => {
    const currentScrollTop = ((window.pageYOffset || document.documentElement.scrollTop) / rootFontSize);

    if (currentScrollTop > lastScrollTop) {
        navbar.style.top = '-50rem';
    } else if (currentScrollTop < lastScrollTop) {
        navbar.style.top = '0';
    };

    lastScrollTop = currentScrollTop;

    if (currentScrollTop > (740 / rootFontSize) && currentScrollTop < (1811 / rootFontSize)) {
        navbarContainer.classList.add('navbar__container__dark');
        writingPath.setAttribute('fill', '#EBECF0');
        symbolPath.forEach(path => {
            path.setAttribute('stroke', '#EBECF0');
            path.setAttribute('stroke-width', '2');
        });
        navbarLinksText.forEach(link => {
            link.classList.add('navbar__links__text__dark');
        });
        button.classList.add('button__dark');
        
    } else {
        navbarContainer.classList.remove('navbar__container__dark');
        writingPath.setAttribute('fill', '#14303F');
        symbolPath.forEach(path => {
            path.setAttribute('stroke', '#14303F');
            path.setAttribute('stroke-width', '3');
        });
        navbarLinksText.forEach(link => {
            link.classList.remove('navbar__links__text__dark');
        });
        button.classList.remove('button__dark');
    }
});


/*
--------------------------------------------------
Hero - Geometric Grid Mouse Move Effect
--------------------------------------------------
    Glitch comes from card moving out of the mousemove event liseter
*/


cards.forEach(card => {
    card.addEventListener("mouseenter", cardMouseEnter);
    card.addEventListener("mousemove", cardMouseMove);
    card.addEventListener("mouseleave", cardMouseLeave);
});

function cardMouseEnter(e) {
    setTransition(e);
}

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
    setTransition(e);
}

function setTransition(e) {
    const card = e.currentTarget;
    clearTimeout(card.transitionTimoutId);
    card.style.transition = "transform 0.4s cubic-bezier(.03,.98,.52,.99)";
    card.transitionTimoutId = setTimeout(() => {
        card.style.transition = "";
    }, 500);

}


/*
--------------------------------------------------
Hero - Random Twinkling
--------------------------------------------------
*/


setTimeout(() => {
    setInterval(() => {

        const randomIndexFirst = Math.floor(Math.random() * cards.length);
        const selectedDivFirst = cards[randomIndexFirst];
        const randomIndexSecond = Math.floor(Math.random() * cards.length);
        const selectedDivSecond = cards[randomIndexSecond];

        function twinkle(selectedDiv) {
            function twinkle(xR, yR, timeout) {
                setTimeout(() => {
                    selectedDiv.style.transform = `perspective(1000px) rotateX(${xR}deg) rotateY(${yR}deg)`;
                }, timeout);
            }

            setTimeout(() => {
                selectedDiv.style.transition = "all 0.33s ease"
            }, 0);

            twinkle(0, -15, 0);
            twinkle(10.61, -10.61, 167)
            twinkle(15, 0, 333);
            twinkle(10.61, 10.61, 500)
            twinkle(0, 15, 666);
            twinkle(-10.61, 10.61, 834)
            twinkle(-15, 0, 999);
            twinkle(-10.61, -10.61, 1167)
            twinkle(0, 0, 1333);

            setTimeout(() => {
                selectedDiv.style.transition = '';
            }, 1500);
        }

        if (selectedDivFirst == selectedDivSecond) {
            twinkle(selectedDivFirst);
        } else {
            twinkle(selectedDivFirst);
            setTimeout(() => {
                twinkle(selectedDivSecond);
            }, 666);
        };
    }, 2000);
}, 2000);


/* 
--------------------------------------------------
Hero - "Hover Here" Text
--------------------------------------------------
*/


hoverHereDiv.addEventListener("mouseenter", () => {
    hoverHereText.style.opacity = 0;
    setTimeout(() => {
        hoverHereText.style.opacity = 0.75;
        hoverHereText.textContent = "Now the Next One!";
    }, 300);
});
hoverHereDiv.addEventListener("mouseleave", () => {
    hoverHereText.style.opacity = 0;
    setTimeout(() => {
        hoverHereText.style.opacity = 0.75;
        hoverHereText.textContent = "* Hover Here *";
    }, 300);
});


/* 
--------------------------------------------------
Hero - Bullet Page Counter
--------------------------------------------------
*/


window.addEventListener('scroll', () => {
    // Gets the rem units the DESIGN is scrolled adjusted for screen size
    let scrollPosition = (window.scrollY / rootFontSize) - 23;
    sectionsArray.forEach(section => {
        // The rem units the section is from the top of its container adjusted for screen size
        if (scrollPosition >= (section.offsetTop / rootFontSize)) {
            bulletArray.forEach(bullet => {
                bullet.classList.add('non-act__bullet');
                bullet.classList.remove('active__bullet');
                if ("#" + section.getAttribute('id') === bullet.getAttribute('href')) {
                    bullet.classList.add('active__bullet');
                    bullet.classList.remove('non-act__bullet');
                }
            });
        }
    });
});


/* 
--------------------------------------------------
Hero - "Scroll" Text Scale
--------------------------------------------------
*/


setTimeout(() => {
    scrollText.style.animation = 'scrollBobbing 1.5s ease-in-out infinite';
}, 4700);


/*
--------------------------------------------------
Hero - Loading Animation
--------------------------------------------------
*/


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

heroContentLoadAnimation (d2Text, 'd2LoadAnimation', '3s');
heroContentLoadAnimation (d3Text, 'd3LoadAnimation', '3.06s');
heroContentLoadAnimation (e3Text, 'e3LoadAnimation', '3.12s');
heroContentLoadAnimation (v11Text, 'v11LoadAnimation', '3.2s');
heroContentLoadAnimation (e12Text, 'e12LoadAnimation', '3.3s');
heroContentLoadAnimation (l13Text, 'l13LoadAnimation', '3.4s');
heroContentLoadAnimation (o20Text, 'o20LoadAnimation', '3.46s');
heroContentLoadAnimation (p20Text, 'p20LoadAnimation', '3.52s');
heroContentLoadAnimation (e21Text, 'e21LoadAnimation', '3.6s');
heroContentLoadAnimation (r22Text, 'r22LoadAnimation', '3.7s');


/*
--------------------------------------------------
Hero - Paper Airplane Lottie
--------------------------------------------------
*/


// const paper__airplane = bodymovin.loadAnimation({
//     container: document.getElementById('airplane__container'),
//     renderer: 'svg',
//     loop: true,
//     autoplay: true,
//     path: 'paper__airplane.json'
// })


/*
--------------------------------------------------
About - Loading Animation
--------------------------------------------------
*/


function aboutCustomIntersectionObserver (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue) {
    const targetObjectObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= thresholdValue) {
                    animatedElement.style.animation = `${cssAnimationName} ${animationTime} ease-out forwards`;
                    setTimeout(() => {
                        aboutSocialMedia.style.animation = 'socialMediaLoad 0.5s ease-out forwards';
                    }, 500);
                    targetObjectObserver.unobserve(entry.target);
                    };
            })
        },
        {
            threshold: thresholdValue,
        }
    );
    targetObjectObserver.observe(observedElement);
};
function aboutPortraitLoad (observedElement, animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName, animationTime, thresholdValue) {
    createSetUpAndKeyframeAnimation (animationOrientation, animationDirection, animationDistance, animatedElement, opacity, cssAnimationName);
    aboutCustomIntersectionObserver (observedElement, animatedElement, cssAnimationName, animationTime, thresholdValue);
};
aboutPortraitLoad (aboutLeftColumn, 'horizontal', 'left', '6rem', selfPortrait, '100%', 'selfPortraitLoad', '0.5s', 0.9);


/*
--------------------------------------------------
About - Text highlight on scroll (Set-Up)
--------------------------------------------------
*/


// Get the .left__col__text and the content of that text.
const aboutLeftColumnText = document.querySelector('.left__col__text');
const aboutLeftColumnTextContent = aboutLeftColumnText.textContent;

// Split the content based on line breaks. Create the parent div and style it.
const aboutLines = aboutLeftColumnTextContent.split('\n');
const newParentDiv = document.createElement('div');
newParentDiv.classList.add('split__text__container');
const splitTextContainerStyles = `
    .split__text__container {
        position: absolute;
        width: 45.4rem;
        top: 20.5rem;
        left: 3.1rem;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 150%;
        z-index: 2;
        color: var(--off-white);
    }
`;
styleSheet.insertRule(splitTextContainerStyles, 
styleSheet.cssRules.length);
    
// Variables for later. Create the .split__text__line, .split__p, .innerDiv__mask.
// & add textContent into the .split__p tag. Also, every 4th line add a line break.
let aboutTextLineCounter = 1;
let newInnerDiv;
let innerDivMask;
aboutLines.forEach((line) => {
    if (line.trim() !== '') {
    // .split__text__line 
      newInnerDiv = document.createElement('div');
      newInnerDiv.classList.add('split__text__line');
      newParentDiv.appendChild(newInnerDiv);
    
    // .split__p
      const newInnerP = document.createElement('p');
      newInnerP.classList.add('split__p');
      newInnerP.textContent = line.trim();
      newInnerDiv.appendChild(newInnerP);
    
    // .innerDiv__mask.
      innerDivMask = document.createElement('div');
      innerDivMask.classList.add('innerDiv__mask');
      innerDivMask.id = `aboutLineMask${aboutTextLineCounter}`;
      newInnerDiv.appendChild(innerDivMask);
    
    // Add a line break every 4th line.
      if (aboutTextLineCounter % 4 === 0) {
        const lineBreak = document.createElement('br');
        newParentDiv.appendChild(lineBreak);
      };
      aboutTextLineCounter++;
    }
});

// Style all the new HTML elements. Replace the old .left__col__text <p> tag, with 
// all the new HTML elements.
const splitTextLineStyles = `
    .split__text__line {
        position: relative;
        overflow: hidden;
    }
`;
styleSheet.insertRule(splitTextLineStyles, 
styleSheet.cssRules.length);

const innerDivMaskStyles = `
    .innerDiv__mask {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--light-blue);
        opacity: 0.7;
        width: 100%;
        height: 100%;
        z-index: 3;
    }
`;
styleSheet.insertRule(innerDivMaskStyles, 
styleSheet.cssRules.length);
aboutLeftColumnText.parentNode.replaceChild(newParentDiv, aboutLeftColumnText);


/*
--------------------------------------------------
About - Text highlight on scroll (Functionality)

    Have a null object, loop through all of the masks and when each mask enters the null, 
    start reducing the width, proporetional to the scroll pixels, making the width of the mask zero
    when each mask leaves the null object.
--------------------------------------------------
*/


// Get the null object, the getBoundingClientRect().top, and an array of all the .split__text__line instances.
const aboutNullObject = document.querySelector('.about__null__object');
const nullObjectTop = aboutNullObject.getBoundingClientRect().top;
const allSplitTextLineDivs = document.querySelectorAll('.split__text__line');
const arrayAllSplitTextLineDivs = Array.from(allSplitTextLineDivs);


// Everytime the page is scrolled, get the .getBoundingClientRect().top for each .split__text__line element.
// Then, if one of those tops & the top of the null object are within 10 pixels of eachother. Reduce the mask width for
// the corresponding mask & delete the current top from the array.
function roughlyEqual(value1, value2) {
    return (value1 - value2) <= 10;
};
let incriment = 1;
arrayAllSplitTextLineDivs.forEach((div) => {
    window.addEventListener('scroll', () => {
        const targetDivTop = div.getBoundingClientRect().top;
        // console.log(targetDivTop, nullObjectTop);
        if (roughlyEqual(targetDivTop, nullObjectTop)) {
            const newInnerDivMaskStyles = `
                #aboutLineMask${incriment} {
                    width: 0%;
                }
            `;
            styleSheet.insertRule(newInnerDivMaskStyles, 
            styleSheet.cssRules.length);
            incriment ++;
            arrayAllSplitTextLineDivs.shift();
            // console.log(arrayAllSplitTextLineDivs);
            // console.log("fire!");
        };
    });
});


// .innerDiv__mask:nth-child(${incriment}) {
//     position: absolute;
//     top: 0;
//     right: 0;
//     background-color: var(--light-blue);
//     opacity: 0.1;
//     width: 100%;
//     height: 100%;
//     z-index: 3;
//     border: 2px solid red;
// }


/*
--------------------------------------------------
Certifications - Menu
--------------------------------------------------
*/


arrayMenuClick.forEach(box => {
    box.addEventListener("click", (e) => {
        const currentCert = e.currentTarget;
        const currentCertPosition = currentCert.offsetTop;
        const certSelectionAreaPosition = certSelectionArea.offsetTop;
        const difference = ((currentCertPosition - certSelectionAreaPosition) / rootFontSize)
        certSelectionArea.style.transition = 'all 0.2s ease-out';
        certSelectionArea.style.transform = `translateY(${difference}rem)`;
    });
});