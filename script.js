/* Choosing Language */
document.addEventListener("DOMContentLoaded", function () {
    const toggleCheckbox = document.getElementById("toggle-checkbox");
    const englishTexts = document.querySelectorAll(".eng");
    const portugueseTexts = document.querySelectorAll(".port");
    const preferredLanguage = localStorage.getItem("preferredLanguage");
    if (preferredLanguage === "english") {
        toggleCheckbox.checked = true;
    } else { toggleCheckbox + false; }
    function toggleLanguage() {
        const isEnglishSelected = toggleCheckbox.checked;
        localStorage.setItem("preferredLanguage", isEnglishSelected ? "english" : "portuguese");
        englishTexts.forEach((element) => {
            element.style.display = isEnglishSelected ? "block" : "none";
        });
        portugueseTexts.forEach((element) => {
            element.style.display = isEnglishSelected ? "none" : "block";
        })
    } toggleLanguage();
    toggleCheckbox.addEventListener("change", toggleLanguage)
})

/* Responsive Menu */
const sidebar = document.querySelector(".sidebar");
function showSidebar() {
    sidebar.style.display = "flex";
}
function hideSidebar() {
    sidebar.style.display = "none"
}

/* Knowledge page */
const treasure = document.getElementById("changeImg");
const ballOne = document.getElementById("ball-1");
const ballTwo = document.getElementById("ball-2");
const ballThree = document.getElementById("ball-3");
const ballFour = document.getElementById("ball-4");
const ballFive = document.getElementById("ball-5");
const ballSix = document.getElementById("ball-6");
const ballSeven = document.getElementById("ball-7");
const ballEight = document.getElementById("ball-8");

function openBox() {
    treasure.src = "./images/opened-treasure-bg.png";
    document.getElementById("btn-box").style.visibility = "hidden";
    setTimeout(() => {
        ballOne.classList.add("ball-1");
        ballTwo.classList.add("ball-2");
        ballThree.classList.add("ball-3");
        ballFour.classList.add("ball-4");
        ballFive.classList.add("ball-5");
        ballSix.classList.add("ball-6");
        ballSeven.classList.add("ball-7");
        ballEight.classList.add("ball-8");
    }, 500);
    showTitle1();
    showTitle2();
    showTitle3();
    showTitle4();
    showTitle5();
    showTitle6();
    showTitle7();
    showTitle8();
}

function showTitle1() {
    ballOne.addEventListener("animationend", function () {
        setTimeout(() => {
            ballOne.classList.add("finished");
        }, 1500)
    })
}

function showTitle2() {
    ballTwo.addEventListener("animationend", function () {
        setTimeout(() => {
            ballTwo.classList.add("finished");
        }, 1300)
    })
}

function showTitle3() {
    ballThree.addEventListener("animationend", function () {
        setTimeout(() => {
            ballThree.classList.add("finished");
        }, 1100)
    })
}

function showTitle4() {
    ballFour.addEventListener("animationend", function () {
        setTimeout(() => {
            ballFour.classList.add("finished");
        }, 900)
    })
}

function showTitle5() {
    ballFive.addEventListener("animationend", function () {
        setTimeout(() => {
            ballFive.classList.add("finished");
        }, 700)
    })
}

function showTitle6() {
    ballSix.addEventListener("animationend", function () {
        setTimeout(() => {
            ballSix.classList.add("finished");
        }, 500)
    })
}

function showTitle7() {
    ballSeven.addEventListener("animationend", function () {
        setTimeout(() => {
            ballSeven.classList.add("finished");
        }, 300)
    })
}

function showTitle8() {
    ballEight.addEventListener("animationend", function () {
        setTimeout(() => {
            ballEight.classList.add("finished");
        }, 100)
    })
}

/* Project Page */
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let backButton = document.querySelectorAll(".back");
let seeMoreButtons = document.querySelectorAll(".seeMore");
let carousel = document.querySelector(".carousel");
let listHTML = document.querySelector(".carousel .list");

nextButton.onclick = function () {
    showSlider("next");
}
prevButton.onclick = function () {
    showSlider("prev")
}
let unAcceptClick;
const showSlider = (type) => {
    nextButton.style.pointerEvents = "none";
    prevButton.style.pointerEvents = "none";
    carousel.classList.remove("prev", "next");
    let items = document.querySelectorAll(".carousel .list .item");
    if (type === "next") {
        listHTML.appendChild(items[0]);
        carousel.classList.add("next")
    } else {
        let positionLast = items.length - 1;
        listHTML.prepend(items[positionLast]);
        carousel.classList.add("prev");
    }
    clearTimeout(unAcceptClick);
    unAcceptClick = setTimeout(() => {
        nextButton.style.pointerEvents = "auto";
        prevButton.style.pointerEvents = "auto";
    }, 2500);
};
seeMoreButtons.forEach((button) => {
    button.onclick = function () {
        carousel.classList.add("showDetail");
    }
});
backButton.forEach((button) => {
    button.onclick = function () {
        carousel.classList.remove("showDetail");
    }
})







