//auto typing
const typingText = document.getElementById("typingText");
const items = document.querySelectorAll(".item");
let currentItem = 0;
let currentText = "";
let isDeleting = false;

function type() {
  const item = items[currentItem];

  const text = item.textContent;
  if (!isDeleting) {
    currentText = text.substring(0, currentText.length + 1);
    typingText.textContent = currentText;
  } else {
    currentText = text.substring(0, currentText.length - 1);
    typingText.textContent = currentText;
  }

  const delta = isDeleting ? 50 : 100;

  const timeBeforeTyping = currentText === text ? 1000 : delta;

  if (currentText === text && !isDeleting) {
    isDeleting = true;
  } else if (currentText === "" && isDeleting) {
    isDeleting = false;
    currentItem = (currentItem + 1) % items.length;
  }

  setTimeout(type, currentText === "" ? 500 : timeBeforeTyping);
}
//button download
type();
const myButton = document.getElementById("myButton__download");

myButton.addEventListener("click", () => {
  setTimeout(() => {
    myButton.blur();
  }, 1000);
});

//button
const mainButton = document.getElementById("main-button");
const buttonContainer = document.getElementById("button-container");
mainButton.addEventListener("click", function () {
  buttonContainer.classList.toggle("show");
});

//handleButtonOpen
const handleButtonOpen = () => {
  let isCheck = false;
  const clickBtn = document.getElementById("main-button");

  clickBtn.addEventListener("click", function () {
    if (isCheck) {
      isCheck = false;
    } else {
      isCheck = true;
    }
  });

  window.onload = function () {
    clickBtn.click();
  };
  const handleButton = () => {};
  window.addEventListener("scroll", function () {
    if (window.scrollY === 0 && !isCheck) {
      clickBtn.click();
    } else if (isCheck) {
      clickBtn.click();
    }
  });
};
handleButtonOpen();

const handleHeader = () => {
  var header = document.getElementById("header");
  var prevScrollpos = window.scrollY;
  let isCheckScroll = false;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos === 0) {
      isCheckScroll = false;
      header.style.paddingTop = " 10px";
      header.style.boxShadow = " none";
      document.getElementById("nav").classList.toggle("bg__nav");
      header.style.boxShadow = " 0px 2px 4px rgba(0, 0, 0, 0.5)";
    } else if (!isCheckScroll) {
      isCheckScroll = true;
      // Nếu đang cuộn xuống, giảm chiều cao của header
      header.style.padding = "0";
      document.getElementById("nav").classList.toggle("bg__nav");
      header.style.boxShadow = " none";
    }
    prevScrollpos = currentScrollPos;
  };
};
handleHeader();
let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Create YouTube player(s) after the API code downloads.
let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player-1");
}
