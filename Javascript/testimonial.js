
// ============== Scrolling testimonies onclick moves the div left/right displaying covered info ==============

const testwrap = document.querySelector('.testwrap');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0;

indicators.forEach((item, i) =>{
    item.addEventListener('click', () => {
        indicators[currentTestimonial].classList.remove('testactive');
        testwrap.style.marginLeft = `-${100 * i}%`;
        item.classList.add('testactive');
        currentTestimonial = i;
    })
}

                  )