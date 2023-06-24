// const { set } = require("mongoose");

const login = document.querySelector('.login');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.lg-btn');
const iconClose = document.querySelector('.icon-close');
// let userLogin = document.querySelector('.lg-btn');
// namasteBtn.addEventListener('click', inputMsg);

 
registerlink.addEventListener('click',()=>{
    login.classList.add('active');
});
loginlink.addEventListener('click',()=>{ 
    login.classList.remove('active');
});
btnPopup.addEventListener('click',()=>{
    login.classList.add('active-popup');
});
iconClose.addEventListener('click',()=>{
    login.classList.remove('active-popup');
});

// //            Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
btn.onclick = () => {
    modal.style.display = "block";
}
span.onclick = () => {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}
// //  Modal Slideshow
// let slideIndex = 0;
// showSlides();

// function showSlides(){
//     let slides = document.getElementsByClassName("modal-slides");
//     for (let i =0;i<slides.length;i++){
//         slides[i].style.display = "none";
//     }
//     slideindex++;
//     if(slideindex> slides.length){
//         slideindex = 1;
//     }
//     slides[slideindex-1].style.display = "block";
// setInterval(showSlides,2000);
// }
// function showSlides() {
//     let i;
//     let slides = document.getElementsByClassName("mySlides");
//     let dots = document.getElementsByClassName("dot");
//     for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//     }
//     slideIndex++;
//     if (slideIndex > slides.length) {slideIndex = 1}    
//     for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex-1].style.display = "block";  
//     dots[slideIndex-1].className += " active";
//     setTimeout(showSlides, 2000); // Change image every 2 seconds
//   }



// For Scroll
ScrollReveal({ 
    reset: true,
    distance: '250px',
    duration: 2000,
    delay: 250
 });
//  dealblock 
ScrollReveal().reveal('.hotel-block',{origin:'right'});
ScrollReveal().reveal('.dealblock img,.main-heading',{origin:'left'});
ScrollReveal().reveal('.volunt',{origin:'top'});
ScrollReveal().reveal('.daside,.work,.aside',{origin:'bottom'});

//      TOAST notification
const toast = document.querySelector(".toast");
const closeIcon = document.querySelector(".close1");
const progress = document.querySelector(".progress");
const lobtn = document.querySelector(".lobtn");

let timer1, timer2;

lobtn.addEventListener("click",()=>{
    toast.classList.add("active");
    progress.classList.add("active");

    timer1 = setTimeout(()=>{
        toast.classList.remove("active");
    },5000);
    timer2 = setTimeout(()=>{
        progress.classList.remove("active");
    },5300);
});

closeIcon.addEventListener("click",()=>{
    toast.classList.remove("active");

    setTimeout(()=>{
        progress.classList.remove("active");
    },300);
    clearTimeout(timer1);
    clearTimeout(timer2);
});

//     audio  player
// let specific = document.querySelector(".heading-text");
// let audio = document.createElement("audio");
// audio.src = "http://commondatastorage.googleapis.com/codeskulptor-assets/week7-brrring.m4a";
// document.body.appendChild(audio);

// specific.onmouseover = () => {
//   audio.play();
// }
// specific.onmouseout = () => {
//     audio.pause();
// }
// let specific1 = document.querySelector(".menu-btn");
// let audio1 = document.createElement("audio");
// audio1.src = "http://codeskulptor-demos.commondatastorage.googleapis.com/descent/gotitem.mp3";
// document.body.appendChild(audio1);

// specific1.onmouseover = () => {
//   audio1.play();
// }
// specific1.onmouseout = () => {
//     audio1.pause();
// }
