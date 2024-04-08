export let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);

export const navbarButton = document.querySelector('.navbarButton');
export const arrow = document.querySelector('.buttonArrow');
export const navbar = document.querySelector('.navbar');
export const navbarContainer = document.querySelector('.navbarContainer');
export const symbolSvg = document.querySelector('.navLogoSymbol');
export const symbolPath = symbolSvg.querySelectorAll('path');
export const writingSvg = document.querySelector('.navLogoWriting');
export const writingPath = writingSvg.querySelector('path');
export const navbarLinksText = document.querySelectorAll('.navbarLinksText');
export const cards = document.querySelectorAll(".gridDiv");
export const hoverHereText = document.querySelector('.hoverHereText');
export const hoverHereDiv = document.querySelector('.gridDiv:nth-child(7)');
export const bullet = document.querySelectorAll('.bullet');
export const sections = document.querySelectorAll('.section');
export const scrollText = document.querySelector('.heroScrollText')
export const styleSheet = document.styleSheets[0];
export const aboutLeftColumn = document.querySelector('.leftColWrapper');
export const aboutSocialMedia = document.querySelector('.aboutSocialMediaContainer');
export const selfPortrait = document.querySelector('.selfPortrait');
export const skillsMenuSelection = document.querySelector('.skillsMenuSelection');
export const skillsMenuOption = document.querySelectorAll('.skillsMenuOption');
export const arrayskillsMenuOption = Array.from(skillsMenuOption);


let translationDirection = '';
let translationSign = ''


function handleHorizontal(obj) {
    translationDirection = 'translateX';
    try {
        if (obj.animationDirection == 'right') {
            translationSign = '-';
        } else if (obj.animationDirection == 'left') {
            translationSign = '';
        }
    }
    catch(error) {
        console.error("ERROR: Invalid animationDirection parameter");
    }
    obj.animatedElement.style.transform = `translateX(${translationSign}${obj.animationDistance})`;
}

function handleVertical(obj) {
    translationDirection = 'translateY';
    obj.animatedElement.style.transform = `translateY(${obj.animationDistance})`;
}

function createKeyframe(obj) {
    const keyframeAnimation = `
        @keyframes ${obj.cssAnimationName} {
            0% {transform: ${translationDirection}(${translationSign}${obj.animationDistance});}
            33% {opacity: ${obj.opacity};}
            100% {transform: ${translationDirection}(0); opacity: ${obj.opacity};}
        }
    `;
    styleSheet.insertRule(keyframeAnimation, styleSheet.cssRules.length);
}

/*
    Takes the following paramenters and sets everything up for loading animation.(Reduces opacity to zero and moves it to start position).
    You do not have to touch the css at all in order to make load-in animations.
        - animationOrientation ('horizontal' or 'verticle' for where the animation should come from)
        - animationDirection ('left' or 'right' for if the animated element should come in from the left side or the right side)
        - animationDistance (number of rem units you want the animated element to travel)
        - animatedElement (the DOM selector for the element you want to animate)
        - opacity (the final opacity you want the animated element to have)
        - cssAnimationName (the name for animation that gets created in the css)
*/
export function setupLoadAnimation (obj) {
    obj.animatedElement.style.opacity = '0';
    try {
        if (obj.animationOrientation == 'horizontal') {
            handleHorizontal(obj);
        } else if (obj.animationOrientation == 'vertical') {
            handleVertical(obj);
        }
        createKeyframe(obj);
    }
    catch (error) {
        console.error("ERROR: invalid animationOrientation parameter")
    }
};


/*
    When the desired amount (thresholdValue) of the target element (observedElement) is showing, a css animation 
    (cssAnimationName) is called in the stylesheet the animatedElement is animated with the animation lasting
    the animatedTime amount of time.
*/
export function chooseObserverElement (obj) {
    const targetObjectObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.intersectionRatio >= obj.thresholdValue) {
                    obj.animatedElement.style.animation = `${obj.cssAnimationName} ${obj.animationTime} ease-out forwards`;
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