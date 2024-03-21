let menuIcon = document.querySelector('#menu-icons');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('.navbar a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('.navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

scrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

scrollReveal().reveal('.home-content,heading',{origin: 'top'});
scrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin: 'button'});
scrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
scrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Engineering Student','Frontend Developer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});