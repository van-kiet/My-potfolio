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

const submitButton = document.getElementById("submit-button");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  let data = {
    "entry.392401802": name,
    "entry.485617946": email,
    "entry.1304479412": subject,
    "entry.498936137": message,
  };
  if (name === "" || email === "" || subject === "" || message === "") {
    if (name === "") {
      document.getElementById("helpName").style.display = "block";
    }
    if (email === "") {
      document.getElementById("helpEmail").style.display = "block";
    }

    if (subject === "") {
      document.getElementById("helpSubject").style.display = "block";
    }
    if (message === "") {
      document.getElementById("helpMessage").style.display = "block";
    }
    alert("cc");
  } else {
    let queryString = new URLSearchParams(data);
    queryString = queryString.toString();
    let xhr = new XMLHttpRequest();
    xhr.open(
      "POST",
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdCNgz4KJe8A28Z7kH4FMAiEtzR6tb_TYd0rr8slONN3MLxEA/formResponse",
      true
    );
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(queryString);
    alert("submitted successfully");
    name = "";
    email = "";
    subject = "";
    message = "";
  }
});

const nameInput = document.getElementById("name");
nameInput.addEventListener("blur", validateName);

const emailInput = document.getElementById("email");
emailInput.addEventListener("blur", validateEmail);

const phoneInput = document.getElementById("subject");
phoneInput.addEventListener("blur", validateSubject);

const messageInput = document.getElementById("message");
messageInput.addEventListener("blur", validateMessage);

function validateName() {
  let name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("helpName").style.display = "block";
  } else {
    document.getElementById("helpName").style.display = "none";
  }
}

function validateEmail() {
  let email = document.getElementById("email").value;
  if (email === "") {
    document.getElementById("helpEmail").style.display = "block";
  } else {
    document.getElementById("helpEmail").style.display = "none";
  }
}

function validateSubject() {
  let subject = document.getElementById("subject").value;
  if (subject === "") {
    document.getElementById("helpSubject").style.display = "block";
  } else {
    document.getElementById("helpSubject").style.display = "none";
  }
}

function validateMessage() {
  let message = document.getElementById("message").value;
  if (message === "") {
    document.getElementById("helpMessage").style.display = "block";
  } else {
    document.getElementById("helpMessage").style.display = "none";
  }
}
