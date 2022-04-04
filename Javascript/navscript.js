// ============== Drop down functionality ==============


const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

dropdown.addEventListener('click', ()=>{
    //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Animation
    dropdown.classList.toggle("toggle");
});