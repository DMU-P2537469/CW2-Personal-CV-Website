
// ============== Scrolling testimonies onclick moves the div left/right displaying covered info ==============


// ============== 3 variables are defined: "testwrap", "indicators", "currentTestimonial". Within the html index page, the "testwrap" contains the testimonial contents: this being each specific testimonial card. The "indicators" contain the red buttons present under the testimonial written content and would be used to cycle between each testimony. The "currentTestimonial" would be a variable set to "0", this would act as a starting location ==============

const testwrap = document.querySelector('.testwrap');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0;

// ============== When the "indicators" is clicked, the "indicators" would remove the current "testactive" class on the "indicators" and apply the "testactive" class to the specific "indicator" button clicked (In the css stylesheet the "testactive" is a slightly larger/stretched button to signal which testimony the user is currently viewing). The "testwraps" margin style would be adjusted to the left or right depending on which button is clicked and moved a calculated amount(`-${100 * i}%`) only to display the contents of the chosen testimony via the "indicator" buttons. the "currentTestimonial" is identified as "i" within the equation ==============

indicators.forEach((item, i) =>{
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('testactive');
        testwrap.style.marginLeft = `-${100 * i}%`;
        item.classList.add('testactive');
        currentTestimonial = i;
    })
}

                  )
