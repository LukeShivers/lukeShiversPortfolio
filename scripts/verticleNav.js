import { rootFontSize, navbarButton, arrow, navbar, navbarContainer, symbolSvg, symbolPath, writingSvg, writingPath, navbarLinksText, cards, hoverHereText, hoverHereDiv, bullet, sections, scrollText, styleSheet, aboutLeftColumn, aboutSocialMedia, selfPortrait, skillsMenuSelection, skillsMenuOption, arrayskillsMenuOption, setupLoadAnimation, chooseObserverElement } from './index.js';
import { animateContactSubheading, animateContactBtn, animateMichaelangeloHand } from './contact.js';


const scrollLineLight = document.querySelector('.scrollLineLight');
const scrollLineDark = document.querySelector('.scrollLineDark');
const contactLine = document.querySelector('.contactLine');
const aboutHeadingText = document.querySelector('.aboutText');
const snakeImg = document.querySelector('.snakeImgBkg');
const workOverview = document.querySelector('.snakeOverview');
const workHeadingContainer = document.querySelector('.workTextContainer');
const workHeadingText = document.querySelector('.workText');
const skillsDiv = document.querySelector('.skillsDiv');
const skillsHeadingContainer = document.querySelector('.skillsTextContainer');
const skillsHeadingText = document.querySelector('.skillsText');
const contactContainer = document.querySelector('.contactContainer');
const contactHeading = document.querySelector('.contactHeading');


const options = {
    threshold: 1
}


window.addEventListener("load", () => {
    setTimeout(() => {
        scrollLineLight.style.height = '36rem';
    }, 5000);
});


const aboutHeadingTextLoad = {
    animationOrientation: 'horizontal',
    animationDirection: 'right',
    animationDistance: '1rem',
    animatedElement: aboutHeadingText,
    opacity: '50%',
    cssAnimationName: 'aboutHeadingTextLoad',
    observedElement: aboutLeftColumn,
    animationTime: '0.3s',
    thresholdValue: 0.1
}
setupLoadAnimation (aboutHeadingTextLoad);
chooseObserverElement (aboutHeadingTextLoad);


// Scroll Line to Work Load
const toWorkLineLoad = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            scrollLineLight.style.height = '117.875rem';
            setTimeout(() => {
                scrollLineDark.style.height = '16.45rem';
            }, 300);
            toWorkLineLoad.unobserve(entry.target);
        };
    })
}, options);
toWorkLineLoad.observe(workHeadingContainer);



const workHeadingTextLoad = {
    animationOrientation: 'horizontal',
    animationDirection: 'right',
    animationDistance: '1rem',
    animatedElement: workHeadingText,
    opacity: '100%',
    cssAnimationName: 'workHeadingTextLoad',
    observedElement: snakeImg,
    animationTime: '0.3s',
    thresholdValue: 0.3
}
function workCustomIntersectionObserver (obj) {
    const targetObjectObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= obj.thresholdValue) {
                    obj.animatedElement.style.animation = `${obj.cssAnimationName} ${obj.animationTime} ease-out forwards`;
                    setTimeout(() => {
                        snakeImg.style.animation = 'snakeImgLoad 0.5s ease-out forwards';
                    }, 250);
                    setTimeout(() => {
                        scrollLineDark.style.height = '95rem';
                    }, 500);
                    targetObjectObserver.unobserve(entry.target);
                    };
            })
        },
        {
            threshold: obj.thresholdValue,
        }
    );
    targetObjectObserver.observe(obj.observedElement);
};
setupLoadAnimation (workHeadingTextLoad);
workCustomIntersectionObserver (workHeadingTextLoad);


const snakeImgLoad = {
    animationOrientation: 'horizontal',
    animationDirection: 'left',
    animationDistance: '6rem',
    animatedElement: snakeImg,
    opacity: '100%',
    cssAnimationName: 'snakeImgLoad'
}
setupLoadAnimation (snakeImgLoad);


const workOverviewLoad = {
    animationOrientation: 'vertical',
    animationDirection: null,
    animationDistance: '3rem',
    animatedElement: workOverview,
    opacity: '100%',
    cssAnimationName: 'workOverviewLoad',
    observedElement: workOverview,
    animationTime: '0.5s',
    thresholdValue: 1
}
setupLoadAnimation (workOverviewLoad);
chooseObserverElement(workOverviewLoad);


const toSkillsLineLoad = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.intersectionRatio >= 1) {
            scrollLineDark.style.height = '171.74rem';
            toSkillsLineLoad.unobserve(entry.target);
        };
    })
}, options);
toSkillsLineLoad.observe(skillsHeadingContainer);


const skillsHeading = {
    animationOrientation: 'horizontal',
    animationDirection: 'right',
    animationDistance: '1rem',
    animatedElement: skillsHeadingText,
    opacity: '100%',
    cssAnimationName: 'skillsHeadingTextLoad',
    observedElement: skillsDiv,
    animationTime: '0.3s',
    thresholdValue: 0.15
}
function skillsCustomIntersectionObserver (obj) {
    const targetObjectObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= obj.thresholdValue) {
                obj.animatedElement.style.animation = `${obj.cssAnimationName} ${obj.animationTime} ease-out forwards`;
                setTimeout(() => {
                    skillsDiv.style.animation = 'skillsSectionLoad 0.5s ease-out forwards';
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
        threshold: obj.thresholdValue,
    });
    targetObjectObserver.observe(obj.observedElement);
};
setupLoadAnimation (skillsHeading);
skillsCustomIntersectionObserver (skillsHeading);


const skillsContentLoad = {
    animationOrientation: 'horizontal',
    animationDirection: 'left',
    animationDistance: '6rem',
    animatedElement: skillsDiv,
    opacity: '100%',
    cssAnimationName: 'skillsSectionLoad',
}
setupLoadAnimation (skillsContentLoad);



// Contact heading & subheading load
const contactHeadingsLoad = {
    animationOrientation: 'vertical',
    animationDirection: null,
    animationDistance: '6rem',
    animatedElement: contactHeading,
    opacity: '100%',
    cssAnimationName: 'contactHeadingLoad',
    observedElement: contactContainer,
    animationTime: '0.3s',
    thresholdValue: 0.6
}
function contactCustomIntersectionObserver (obj) {
    const targetObjectObserver = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= obj.thresholdValue) {
                    obj.animatedElement.style.animation = `${obj.cssAnimationName} ${obj.animationTime} ease-out forwards`;
                    animateContactSubheading();
                    animateContactBtn();
                    animateMichaelangeloHand();
                    targetObjectObserver.unobserve(entry.target);
                    };
            })
        },
        {
            threshold: obj.thresholdValue,
        }
    );
    targetObjectObserver.observe(obj.observedElement);
};
setupLoadAnimation (contactHeadingsLoad);
contactCustomIntersectionObserver (contactHeadingsLoad);