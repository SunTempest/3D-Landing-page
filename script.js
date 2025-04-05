const hamburger = document.getElementById("ham");
const navbar = document.querySelector(".navbar"); 
const signinbtn = document.querySelector(".btn-signing");
const bars = document.querySelector(".bar");

hamburger.addEventListener('click', () => {
    navbar.classList.toggle("mini-style");
    signinbtn.classList.toggle("show-btn");
    console.log("clicked");
});