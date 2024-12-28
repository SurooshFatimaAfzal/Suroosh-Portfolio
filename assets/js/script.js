'use strict';

/**
 * element toggle function
 */

const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 10) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});



/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {

  elemToggleFunc(navToggleBtn);
  elemToggleFunc(navbar);
  elemToggleFunc(document.body);

});



/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
  toggleBtns[i].addEventListener("click", function () {

    elemToggleFunc(toggleBtnBox);
    for (let i = 0; i < toggleBtns.length; i++) { elemToggleFunc(toggleBtns[i]); }
    elemToggleFunc(skillsBox);

  });
}



/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {

  elemToggleFunc(themeToggleBtn);

  if (themeToggleBtn.classList.contains("active")) {
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");

    localStorage.setItem("theme", "light_theme");
  } else {
    document.body.classList.add("dark_theme");
    document.body.classList.remove("light_theme");

    localStorage.setItem("theme", "dark_theme");
  }

});

/**
 * check & apply last time selected theme from localStorage
 */

const playButton1 = document.getElementById('playButton1');
const myVideo1 = document.getElementById('myVideo1');

const playButton2 = document.getElementById('playButton2');
const myVideo2 = document.getElementById('myVideo2');

const playButton3 = document.getElementById('playButton3');
const myVideo3 = document.getElementById('myVideo3');

// Function for playing Video 1
playButton1.addEventListener('click', () => {
    myVideo1.style.display = 'block'; // Show Video 1
    myVideo1.play(); // Play Video 1
    myVideo2.pause(); // Pause Video 2
    myVideo2.currentTime = 0; // Reset Video 2
    myVideo2.style.display = 'none'; // Hide Video 2
    myVideo3.pause(); // Pause Video 3
    myVideo3.currentTime = 0; // Reset Video 3
    myVideo3.style.display = 'none'; // Hide Video 3
});

// Function for playing Video 2
playButton2.addEventListener('click', () => {
    myVideo2.style.display = 'block'; // Show Video 2
    myVideo2.play(); // Play Video 2
    myVideo1.pause(); // Pause Video 1
    myVideo1.currentTime = 0; // Reset Video 1
    myVideo1.style.display = 'none'; // Hide Video 1
    myVideo3.pause(); // Pause Video 3
    myVideo3.currentTime = 0; // Reset Video 3
    myVideo3.style.display = 'none'; // Hide Video 3
});

// Function for playing Video 3
playButton3.addEventListener('click', () => {
    myVideo3.style.display = 'block'; // Show Video 3
    myVideo3.play(); // Play Video 3
    myVideo1.pause(); // Pause Video 1
    myVideo1.currentTime = 0; // Reset Video 1
    myVideo1.style.display = 'none'; // Hide Video 1
    myVideo2.pause(); // Pause Video 2
    myVideo2.currentTime = 0; // Reset Video 2
    myVideo2.style.display = 'none'; // Hide Video 2
});