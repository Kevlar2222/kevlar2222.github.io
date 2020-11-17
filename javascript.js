const nav = document.querySelector(".nav");
const letters = document.querySelectorAll(".letter");
const link1 = document.querySelector(".link1");
const link2 = document.querySelector(".link2");
const link3 = document.querySelector(".link3");
const about = document.querySelector(".container1");
const projects = document.querySelector(".container2");
const contact = document.querySelector(".container3");
const grid = document.querySelector(".grid");
const contactsLink = document.querySelector(".toContacts");

function getRandomTime () {
    return Math.round(Math.random() * 1000);
}

function navCSS () {
    if(window.innerWidth < 1000){
        return;
    }
    if(window.scrollY === 0){
        nav.style.backgroundColor = "rgb(52, 52, 200)";
        nav.style.transform = "scale(1)";
    } else {
        nav.style.backgroundColor = "rgb(72, 72, 200)";
        nav.style.transform = "scale(1.01)";
    }
    if(window.scrollY >= about.offsetTop && window.scrollY < projects.offsetTop){
        link1.style.color = "#ffc600";
        link2.style.color = "rgb(255,255,255)";
        link3.style.color = "rgb(255,255,255)";
    } else if(window.scrollY >= projects.offsetTop && window.scrollY < (document.body.offsetHeight - window.innerHeight - 100)){
        link1.style.color = "rgb(255,255,255)";
        link2.style.color = "#ffc600";
        link3.style.color = "rgb(255,255,255)";
    } else if((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100){
        link1.style.color = "rgb(255,255,255)";
        link2.style.color = "rgb(255,255,255)";
        link3.style.color = "#ffc600";
    } else {
        link1.style.color = "rgb(255,255,255)";
        link2.style.color = "rgb(255,255,255)";
        link3.style.color = "rgb(255,255,255)";
    }
}

function entranceAnimation () {
    letters.forEach(letter => {
        const time = getRandomTime();
        setTimeout( () => letter.style.opacity = 1, time);
    });
}

function navigate1 () {
    about.scrollIntoView({behavior: "smooth"});
}

function navigate2 () {
    projects.scrollIntoView({behavior: "smooth"});
}

function navigate3 () {
    contact.scrollIntoView({behavior: "smooth"});
}

link1.addEventListener("click", navigate1);
link2.addEventListener("click", navigate2);
link3.addEventListener("click", navigate3);
contactsLink.addEventListener("click", navigate3);

window.addEventListener("load", entranceAnimation);
window.addEventListener("scroll", navCSS);

