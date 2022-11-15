const lightMoideBtn = document.querySelector(".light-mode-btn");
const darkModeBtn = document.querySelector(".dark-mode-btn");

lightMoideBtn.addEventListener("click", setDarkMode);
darkModeBtn.addEventListener("click", setLightMode);

function setDarkMode() {
    __setUserTheme("dark");
}

function setLightMode() {
    __setUserTheme("light");
}

