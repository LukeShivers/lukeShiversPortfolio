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

const desktopAboutDescription = document.getElementById("desktopDescription");
const mobileAboutDescription = document.getElementById("mobileDescription");
const greetingMask = document.querySelector(".greetingMask");
const highlightSoftware = document.querySelector(".highlightSoftwareEngineer");
const highlightUiUx = document.querySelector(".highlightUiuxDesigner");
const highlightUc = document.querySelector(".highlightUc");
const newParentDiv = document.createElement("div");

let aboutTextLineCounter = 1;
let breakCounter = 1;
let newInnerDiv;
let innerDivMask;

function handleHighlights(i) {
  if (i == 3) {
    highlightSoftware.style.opacity = "1";
    highlightUiUx.style.opacity = "1";
  } else if (i == 7) {
    highlightUc.style.opacity = "1";
  }
  return;
}

function createMaskTextContainer() {
  newInnerDiv = document.createElement("div");
  newInnerDiv.classList.add("splitTextLine");
  newParentDiv.appendChild(newInnerDiv);
}

function createSplitP(line) {
  const newInnerP = document.createElement("p");
  newInnerP.classList.add("splitP");
  newInnerP.textContent = line.trim();
  newInnerDiv.appendChild(newInnerP);
}

function createSplitMask() {
  innerDivMask = document.createElement("div");
  innerDivMask.classList.add("innerDivMask");
  innerDivMask.id = `aboutLineMask${aboutTextLineCounter}`;
  newInnerDiv.appendChild(innerDivMask);
}

function divideParagraph() {
  let textContent;
  newParentDiv.classList.add("splitTextContainer");
  if (window.innerWidth <= 600) {
    textContent = mobileAboutDescription.textContent;
  } else {
    textContent = desktopAboutDescription.textContent;
  }
  const aboutLines = textContent.split("\n");

  aboutLines.forEach((line) => {
    if (line.trim() !== "") {
      createMaskTextContainer();
      createSplitP(line);
      createSplitMask();
      if (window.innerWidth <= 600) {
        if (breakCounter == 6) {
          const lineBreak = document.createElement("br");
          newParentDiv.appendChild(lineBreak);
          breakCounter = 1;
        }
        breakCounter++;
      } else {
        if (aboutTextLineCounter % 4 === 0) {
          const lineBreak = document.createElement("br");
          newParentDiv.appendChild(lineBreak);
        }
      }
      aboutTextLineCounter++;
    }
  });
  if (window.innerWidth <= 600) {
    mobileAboutDescription.parentNode.replaceChild(
      newParentDiv,
      mobileAboutDescription
    );
  } else {
    desktopAboutDescription.parentNode.replaceChild(
      newParentDiv,
      desktopAboutDescription
    );
  }
}
divideParagraph();

async function typeParagraph() {
  const targetObjectObserver = new IntersectionObserver(
    async (entries) => {
      for (const entry of entries) {
        if (entry.intersectionRatio >= 0.5) {
          greetingMask.style.width = "0";
          let numberOfLines;
          window.innerWidth <= 600
            ? (numberOfLines = 15)
            : (numberOfLines = 11);
          for (let i = 1; i <= numberOfLines; i++) {
            await new Promise((resolve) => setTimeout(resolve, 500));
            const lineInFocus = document.getElementById(`aboutLineMask${i}`);
            lineInFocus.style.width = "0";
            handleHighlights(i);
          }
          await new Promise((resolve) => setTimeout(resolve, 500));
          targetObjectObserver.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.5 }
  );
  targetObjectObserver.observe(aboutLeftColumn);
}
typeParagraph();

const aboutLeftColumnLoad = {
  animationOrientation: "vertical",
  animationDirection: null,
  animationDistance: "6rem",
  animatedElement: aboutLeftColumn,
  opacity: "100%",
  cssAnimationName: "leftColLoad",
  observedElement: aboutLeftColumn,
  animationTime: "0.5s",
  thresholdValue: 0.3,
};
setupLoadAnimation(aboutLeftColumnLoad);
chooseObserverElement(aboutLeftColumnLoad);

const aboutSocialsLoad = {
  animationOrientation: "vertical",
  animationDirection: null,
  animationDistance: "1rem",
  animatedElement: aboutSocialMedia,
  opacity: "100%",
  cssAnimationName: "socialMediaLoad",
  observedElement: null,
  animationTime: null,
  thresholdValue: null,
};
setupLoadAnimation(aboutSocialsLoad);
function animateAboutSocials() {
  setTimeout(() => {
    aboutSocialMedia.style.animation = "socialMediaLoad 0.5s ease-out forwards";
  }, 500);
}

const selfPortraitLoad = {
  animationOrientation: "horizontal",
  animationDirection: "left",
  animationDistance: "6rem",
  animatedElement: selfPortrait,
  opacity: "100%",
  cssAnimationName: "selfPortraitLoad",
  observedElement: selfPortrait,
  animationTime: "0.5s",
  thresholdValue: 0.9,
};
setupLoadAnimation(selfPortraitLoad);

function animateSelfPortrait(obj) {
  const targetObjectObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= obj.thresholdValue) {
          obj.animatedElement.style.animation = `${obj.cssAnimationName} ${obj.animationTime} ease-out forwards`;
          animateAboutSocials();
          targetObjectObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: obj.thresholdValue,
    }
  );
  targetObjectObserver.observe(obj.observedElement);
}
animateSelfPortrait(selfPortraitLoad);
