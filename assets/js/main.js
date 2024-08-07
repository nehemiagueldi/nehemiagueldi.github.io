/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillscontent = document.getElementsByClassName('skills__content'),
        skillsheader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className;

    for(i = 0; i < skillscontent.length; i++){
        skillscontent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsheader.forEach((el) =>{
    el.addEventListener('click', toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
        tabsContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabsContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
        modalBtns = document.querySelectorAll('.services__button'),
        modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')    
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickabel: true,
    },
    mousewheel: {
        forceToAxis: false,
    },
    // autoplay: {
    //     delay: 4000,
    // },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: ".swiper-pagination",
        clickabel: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    },
    // mousewheel: false,
    // keyboard: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight
//         const sectionTop = current.offsetTop - 50;
//         sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*==================== DISPLAY TIME AND DATE ====================*/

function displayDate() {
    var now = new Date();
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var date = now.toLocaleDateString('en-GB', options); 
    // en-US, en-GB, id-ID, en-AU, en-CA, en-NZ, en-ZA, en-IN, en-PH, en-SG, en-ZW, en-MY, en-HK, en-TW, en-IE, en-BE, en-LU, en-NL, en-DE, en-AT, en-CH, en-IT, en-ES, en-PT, en-FR, en-GR, en-SE, en-NO, en-DK, en-FI, en-IS, en-TR, en-IL, en-JP, en-KR, en-CN, en-TH, en-VN, en-MX
    document.getElementById("date").innerHTML = date;
}

setInterval(displayDate, 1000);

function displayTime() {
    var now = new Date();
    var options = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
    var time = now.toLocaleTimeString('en-GB', options);
    document.getElementById("time").innerHTML = time;
}

setInterval(displayTime, 1000);

/*==================== SHOW LOADER ====================*/
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', () => {
        document.body.removeChild('loader');
    });
})

/*==================== Jokes Of The Day ====================*/
const setupEl = document.querySelector(".setup");
const punchlineEl = document.querySelector(".punchline");
const newJokesBtn = document.querySelector(".new-quote-btn");

function generateRandomJokes() {
fetch("https://official-joke-api.appspot.com/jokes/random")
    .then(response => response.json())
    .then(data => {
        setupEl.textContent = data.setup;
        punchlineEl.textContent = `- ${data.punchline} -`;
    })
    .catch(error => console.log(error));
}

newJokesBtn.addEventListener("click", generateRandomJokes);

generateRandomJokes();


/*==================== GREETINGS MESSAGES ====================*/
async function getGreeting() {
    try {
        // const response = await fetch('https://api.adviceslip.com/advice');
        // const data = await response.json();
        const greetings = [
            'Hello',
            'Hi',
            'Hey',
            'Greetings',
            'Salutations',
            'Good day',
            'Howdy',
            'Yo',
            'What\'s up',
            'Welcome',
            'Glad to see you',
            'Great to see you',
            'Good to see you',
            'Thanks for coming',
            'Nice to see you',
            'Howdy',
            'Hola',
            'Bonjour',
            'Ciao',
            'Namaste',
            'Salam',
            'Aloha',
            'Konnichiwa',
            'Konbanwa',
            'Selamat Datang',
        ]; // daftar kata atau kalimat sapaan yang ingin ditampilkan
        const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)]; // ambil kata atau kalimat sapaan secara acak dari daftar
        const message = `${randomGreeting}👋`; // gabungkan kata atau kalimat sapaan dengan data API
        document.getElementById('greeting-message').innerText = message; // tampilkan kata atau kalimat sapaan di elemen HTML
    } catch (error) {
        console.error(error);
    }
}

async function getGreet() {
    try {
        // const response = await fetch('https://api.adviceslip.com/advice');
        // const data = await response.json();
        const greet = [
            'Have a nice day',
            'Have a great day',
            'Have a wonderful day',
            'Have a good day',
            'Have a pleasant day',
            'Have a lovely day',
            'Have a fantastic day',
            'Have a beautiful day',
            'Have a blessed day',
            'Have a marvelous day',
            'Have a splendid day',
            'Have a safe day',
            'Have a fun day',
            'Have a productive day',
            'Have a successful day',
            'Have a blissfully day',
            'Have a peaceful day',
            'Have a joyful day',
            'Have a happy day',
            'Have a cheerful day',
            'Have a delightful day',
            'Have a relaxing day',
            'Have a fabulous day',
            'Have a super day',
            'Have a exciting day',
            'Have a joyous day',
            'Have a blissful day',
        ]; // daftar kata atau kalimat sapaan yang ingin ditampilkan
        const randomGreet = greet[Math.floor(Math.random() * greet.length)]; // ambil kata atau kalimat sapaan secara acak dari daftar
        const message = `~ ${randomGreet} ~`; // gabungkan kata atau kalimat sapaan dengan data API
        document.getElementById('greet-message').innerText = message; // tampilkan kata atau kalimat sapaan di elemen HTML
    } catch (error) {
        console.error(error);
    }
}