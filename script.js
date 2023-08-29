const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  menu.classList.toggle("active");

  menu.querySelectorAll(".item").forEach((item) => {
    item.addEventListener("click", function () {
      hamburger.classList.remove("active");
      menu.classList.remove("active");
    });
  });
});

const tabsContainer = document.querySelector(".tabs-container");
const tabsList = tabsContainer.querySelector("ul");
const tabButtons = tabsList.querySelectorAll("a");
const tabButtonContainer = tabsList.querySelectorAll("li");
const tabPanels = tabsContainer.querySelectorAll(".tabs_panels > div");

tabButtons.forEach((tab, index) => {
  if (index === 0) {
    tab.classList.toggle("active");
  } else {
    tabPanels[index].setAttribute("hidden", "");
  }
});

tabsContainer.addEventListener("click", (e) => {
  const clickedTab = e.target.closest("a");
  if (!clickedTab) return;
  e.preventDefault();

  const activePanelId = clickedTab.getAttribute("href");
  const activePanel = tabsContainer.querySelector(activePanelId);

  tabButtons.forEach((button) => {
    button.classList.remove("active");
  });

  tabPanels.forEach((panel) => {
    panel.setAttribute("hidden", true);
  });
  activePanel.removeAttribute("hidden");

  clickedTab.classList.toggle("active");
});

const accordion = document.getElementsByClassName("contentBx");

for (i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

const pictures = ["image-1", "image-2", "image-3", "image-4"];

const imgButtons = document.querySelectorAll(".btn");
const imgDiv = document.querySelector(".img-container");

let counter = 0;

imgButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    if (button.classList.contains("btn-left")) {
      counter--;
      if (counter < 0) {
        counter = pictures.length - 1;
      }
      imgDiv.style.background = `url("images/${pictures[counter]}.jpg") center/cover no-repeat`;
    }

    if (button.classList.contains("btn-right")) {
      counter++;
      if (counter > pictures.length - 1) {
        counter = 0;
      }
      imgDiv.style.background = `url("images/${pictures[counter]}.jpg") center/cover no-repeat`;
    }
  });
});
