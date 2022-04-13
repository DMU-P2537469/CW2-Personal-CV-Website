// ============== Drop down functionality ==============

// ============== Each variable is defined: dropdown navLinks and links. each variable has a linked class with set animations and adjustments in the css stylesheet  ==============
const dropdown = document.querySelector(".dropdown");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");


// ============== On the dropdown variable if the button is clicked the following would happen: the navLinks variable would be toggled with a class "open" and the links "fade". ==============
dropdown.addEventListener('click', ()=>{
    //Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        
        // ============== Each link present within the links variable would toggle a "fade" class, in the css stylesheet this would change the opacity value ==============
        
        link.classList.toggle("fade");
    });

    // ============== The dropdown variable would be toggled with the "toggle" class in which the css stylesheet holds transform adjustments to start an animation adjusting the rotation and size of the content etc. ==============
    
    //Animation
    dropdown.classList.toggle("toggle");
});
