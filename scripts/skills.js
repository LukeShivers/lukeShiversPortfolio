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

const skillHeading = document.querySelector(".skillHeadingText");
const knowledgeLolli = document.querySelectorAll(".knowledgeLine");
const skillsIcon = document.querySelectorAll(".skillsIcon");
const techText = document.querySelectorAll(".techText");
const techGroup = document.querySelectorAll(".techGroup");
const lolli = document.querySelectorAll(".lolli");

arrayskillsMenuOption.forEach((box) => {
  box.addEventListener("click", (e) => {
    const currentCert = e.currentTarget;
    skillsMenuSelection.style.transition = "all 0.2s ease-out";

    if (window.innerWidth <= 600) {
      const mobileSkillOffset = currentCert.offsetLeft;
      const mobileSelectedOffset = skillsMenuSelection.offsetLeft;
      const mobileDifference =
        (mobileSkillOffset - mobileSelectedOffset) / rootFontSize;
      skillsMenuSelection.style.transform = `translateX(${mobileDifference}rem)`;
    } else {
      const currentCertPosition = currentCert.offsetTop;
      const skillsMenuSelectionPosition = skillsMenuSelection.offsetTop;
      const desktopDifference =
        (currentCertPosition - skillsMenuSelectionPosition) / rootFontSize;
      skillsMenuSelection.style.transform = `translateY(${desktopDifference}rem)`;
    }
  });
});

/*
    New: 0 - 77.17
    Familiar: 7.917 - 17.134
    Average: 17.334 - 26.551
    Advanced: 26.751 - 35.968
    Expert: 36.168 - 45.385
*/

const headingArray = [
  "Language",
  "Server Side",
  "Client Side",
  "Database",
  "Miscellaneous",
];

const languageIcons = [
  "assets/cSharpIcon.svg",
  "assets/htmlIcon.svg",
  "assets/cssIcon.svg",
  "assets/javascriptIcon.svg",
  "assets/sqlIcon.svg",
  "assets/pythonIcon.svg",
];
const languageText = ["C#", "HTML", "CSS", "JavaScript", "SQL", "Python"];
const languageLollis = [26.2, 40.7, 39.5, 32, 24.4, 21.8];

const serverIcons = [
  "assets/dotNetIcon.svg",
  "assets/efIcon.svg",
  "assets/nodeIcon.svg",
  "assets/expressIcon.svg",
  "assets/pandasIcon.svg",
  "assets/numpyIcon.svg",
];
const serverText = [
  ".NET",
  "Entity Fr.",
  "Node.js",
  "Express.js",
  "Pandas",
  "NumPy",
];
const serverLollis = [26.2, 25, 31, 33, 25, 24];

const clientIcons = [
  "assets/dotNetCoreIcon.svg",
  "assets/reactIcon.svg",
  "assets/jqueryIcon.svg",
  "assets/typescriptIcon.svg",
  "assets/bootstrapIcon.svg",
  "assets/tailwindIcon.svg",
];
const clientText = [
  ".NET Core",
  "React",
  "jQuery",
  "TypeScript",
  "Bootstrap",
  "Tailwind",
];
const clientLollis = [38, 34, 30, 22, 37, 40];

const dbIcons = ["assets/mySqlIcon.svg", "assets/sqlServerIcon.svg"];
const dbText = ["MySQL", "SQL Server"];
const dbLollis = [30, 21, 0, 0, 0, 0];

const miscIcons = [
  "assets/gitIcon.svg",
  "assets/githubSkillsIcon.svg",
  "assets/azureIcon.svg",
  "assets/vsIcon.svg",
  "assets/adobeIcon.svg",
  "assets/npmIcon.svg",
];
const miscText = ["Git", "GitHub", "Azure", "VS", "Adobe CC", "NPM"];
const miscLollis = [38, 38, 25, 39, 33, 28];

skillsIcon.forEach((skill) => {
  const width = skill.width;
  const height = skill.height;
  if (width > height) {
    skill.style.width = "2rem";
  } else {
    skill.style.height = "2rem";
  }
});

function handleIcons(array) {
  for (let i = 0; i < skillsIcon.length; i++) {
    skillsIcon[i].src = array[i];
    const width = skillsIcon[i].width;
    const height = skillsIcon[i].height;
    if (width > height) {
      skillsIcon[i].style.width = "2rem";
    } else {
      skillsIcon[i].style.height = "2rem";
    }
    techGroup[i].style.display = "flex";
  }
}

function handleText(array) {
  for (let i = 0; i < techText.length; i++) {
    techText[i].textContent = array[i];
  }
}

function handleLolli(array) {
  for (let i = 0; i < knowledgeLolli.length; i++) {
    let lolliLength;
    window.innerWidth <= 600
      ? (lolliLength = array[i] * (237 / 432))
      : (lolliLength = array[i]);
    knowledgeLolli[i].style.width = `${lolliLength}rem`;
    lolli[i].style.display = "flex";
  }
}
handleLolli(languageLollis);

arrayskillsMenuOption.forEach((box) => {
  box.addEventListener("click", async () => {
    switch (box.id) {
      case "language":
        skillHeading.textContent = headingArray[0];
        handleIcons(languageIcons);
        handleText(languageText);
        handleLolli(languageLollis);
        break;
      case "serverSide":
        skillHeading.textContent = headingArray[1];
        handleIcons(serverIcons);
        handleText(serverText);
        handleLolli(serverLollis);
        break;
      case "clientSide":
        skillHeading.textContent = headingArray[2];
        handleIcons(clientIcons);
        handleText(clientText);
        handleLolli(clientLollis);
        break;
      case "database":
        skillHeading.textContent = headingArray[3];
        handleIcons(dbIcons);
        handleText(dbText);
        handleLolli(dbLollis);
        for (let i = 2; i < 6; i++) {
          techGroup[i].style.display = "none";
          lolli[i].style.display = "none";
        }
        break;
      case "misc":
        skillHeading.textContent = headingArray[4];
        handleIcons(miscIcons);
        handleText(miscText);
        handleLolli(miscLollis);
        break;
    }
  });
});

techGroup.forEach((tech) => {
  if (window.innerWidth <= 600) {
    tech.addEventListener("click", (e) => {
      const selectedTech = e.currentTarget.children[1];
      const selectedText = selectedTech.children[0];
      selectedTech.style.width = "fit-content";
      selectedTech.style.padding = "0 1.5rem";
      setTimeout(() => {
        selectedText.style.opacity = "1";
      }, 100);
      setTimeout(() => {
        const selectedText = selectedTech.children[0];
        selectedText.style.opacity = "0";
      }, 2000);
      setTimeout(() => {
        selectedTech.style.width = "0";
        selectedTech.style.padding = "0";
      }, 2100);
    });
  }
});
