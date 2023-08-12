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
  var header = document.getElementById("nav");
  var prevScrollpos = window.scrollY;
  let isCheckScroll = false;
  window.onscroll = function () {
    var currentScrollPos = window.scrollY;
    if (currentScrollPos === 0) {
      isCheckScroll = false;
      header.style.padding = " 5px 20px";
      header.style.boxShadow = " none";
      document.getElementById("nav").classList.toggle("bg__nav");
      document.getElementById("nav").style.backgroundColor = "#fff0";
      document.getElementById("header").style.boxShadow =
        " 0px 2px 4px rgba(0, 0, 0, 0.5)";
      document.getElementById("hover-text").style.display = "block";
    } else if (!isCheckScroll) {
      isCheckScroll = true;
      document.getElementById("nav").style.backgroundColor = "";
      // Nếu đang cuộn xuống, giảm chiều cao của header
      header.style.padding = "0 20px";
      document.getElementById("nav").classList.toggle("bg__nav");
      document.getElementById("header").style.boxShadow = "none";
      document.getElementById("hover-text").style.display = "none";
    }
    prevScrollpos = currentScrollPos;
  };
};
handleHeader();
window.addEventListener("load", () => {
  var currentScrollPos = window.scrollY;
  if (currentScrollPos !== 0) {
    document.getElementById("nav").style.backgroundColor = "black";
    document.getElementById("nav").style.padding = "0 20px ";
  }
});
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
    alert("Please fill out the form !");
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
    alert("Submitted successfully");
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
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
let isCheckShow = false;
function showText() {
  if (isCheckShow === false) {
    document.getElementById("message__text").style.display = "block";
    document.getElementById("button-show").innerHTML = "Show less";
    isCheckShow = true;
  } else if (isCheckShow === true) {
    document.getElementById("message__text").style.display = "none";
    document.getElementById("button-show").innerHTML = "See more";
    isCheckShow = false;
  }
}

const skillItems = document.querySelectorAll(".skill__all");
let activeItem = null;

skillItems.forEach((item) => {
  console.log(item);
  item.addEventListener("click", () => {
    if (window.innerWidth < 992) {
      if (activeItem !== item) {
        // Đóng phần tử đang mở (nếu có)
        if (activeItem) {
          activeItem.classList.remove("active");
          const activeChildren = activeItem.querySelectorAll(".skill__child");
          activeChildren.forEach((child) => {
            child.classList.remove("active");
          });
        }

        // Mở phần tử mới
        item.classList.add("active");
        const children = item.querySelectorAll(".skill__child");
        children.forEach((child) => {
          child.classList.add("active");
        });
        // if (window.innerWidth < 992) {
        //   document.getElementById("ccc").style.height = "50%";
        // }
        // Cập nhật phần tử đang mở
        activeItem = item;
      } else {
        // Đóng phần tử hiện tại nếu được nhấp lại
        item.classList.remove("active");
        const children = item.querySelectorAll(".skill__child");
        children.forEach((child) => {
          child.classList.remove("active");
        });
        // if (window.innerWidth < 992) {
        //   document.getElementById("ccc").style.height = "100%";
        // }
        // Cập nhật phần tử đang mở
        activeItem = null;
      }
    }
  });
});
window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");
  if (window.pageYOffset > 100) {
    backToTopButton.style.display = "flex";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.getElementById("back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Lấy tất cả các thẻ <a> trong danh sách menu
var menuItems = document.querySelectorAll(".navbar-nav a");

// Lặp qua từng mục trong danh sách menu và thêm sự kiện click
menuItems.forEach(function (item) {
  console.log(item);
  item.addEventListener("click", function () {
    // Xóa lớp active khỏi tất cả các mục menu
    menuItems.forEach(function (menuItem) {
      menuItem.classList.remove("active");
    });

    // Thêm lớp active vào mục menu được nhấp vào
    this.classList.add("active");
  });
});
