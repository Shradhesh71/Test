let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa fa-window-close");
    navbar.classList.toggle("active");
}
// window.addEventListener('load', () => {
//     const form = document.querySelector("#form-main");
    
//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//     });
//     });

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top>= offset && top< offset+height){
            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href* =' + id +']').classList.add('active');
            });
        };
    });
    // sticky navbar

let header = document.querySelector('header');

header.classList.toggle('sticky',window.scrollY > 100);

// remove toggle navbar
menuIcon.classList.remove("fa fa-window-close");
navbar.classList.remove("active");
};

// scroll reveal
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

ScrollReveal().reveal('.home-content,.heading', { origin: 'top' });
ScrollReveal().reveal('.home-img,.heading,.contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1,.heading',{origin:'left'});
ScrollReveal().reveal('.home-content p,.about-content',{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings : ['Chartered Accountant','Chartered Accountant'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
    loop: true 
});

 