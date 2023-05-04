const login = document.querySelector('.login');
const loginlink = document.querySelector('.login-link');
const registerlink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.lg-btn');
const iconClose = document.querySelector('.icon-close');



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


// For Scroll
ScrollReveal({ 
    reset: true,
    distance: '200px',
    duration: 2000,
    delay: 200
 });
//  dealblock
ScrollReveal().reveal('.hotel-block',{origin:'right'});
ScrollReveal().reveal('.dealblock img',{origin:'left'});
ScrollReveal().reveal('.volunt',{origin:'top'});
ScrollReveal().reveal('.daside,.work,.aside',{origin:'bottom'});

// Automayic Slideshow 
// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex++;
//   if (myIndex > x.length) {myIndex = 1}    
//   x[myIndex-1].style.display = "block";  
//   setTimeout(carousel, 2000); // Change image every 2 seconds
// }
// var myIndex1 = 0;
// carousel1();

// function carousel1() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";  
//   }
//   myIndex1++;
//   if (myIndex1 > x.length) {myIndex1 = 1}    
//   x[myIndex1-1].style.display = "block";  
//   setTimeout(carousel1, 2000); // Change image every 2 seconds
// }
// let slideIndex = 0;
// let timeoutId = null;
// const slides = document.getElementsByClassName("mySlides");
// const dots = document.getElementsByClassName("dot");

// showSlides();
// function currentSlide(index) {
//      slideIndex = index;
//      showSlides();
// }
// function plusSlides(step) {
  
//   if(step < 0) {
//       slideIndex -= 2;
      
//       if(slideIndex < 0) {
//         slideIndex = slides.length - 1;
//       }
//   }
  
// showSlides();
// }
// function showSlides() {
//   for(let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//     dots[i].classList.remove('active');
//   }
//   slideIndex++;
//   if(slideIndex > slides.length) {
//     slideIndex = 1
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].classList.add('active');
//    if(timeoutId) {
//       clearTimeout(timeoutId);
//    }
//   timeoutId = setTimeout(showSlides, 1000); // Change image every 5 seconds
// }




