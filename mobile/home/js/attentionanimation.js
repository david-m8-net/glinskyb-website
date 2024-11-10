const allelements = Array.from(document.querySelectorAll('*')).filter((el) => el.hasAttribute('firstdisplayanimation'));

function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.bottom > 0 && rect.top < window.innerHeight - 150
}

function handleScrollAnimation(event) {
    for (let i = 0; i < allelements.length; i++) {
        if (isInView(allelements[i]) && !allelements[i].classList.contains('firstdisplayanimated')) {
            allelements[i].classList.add('firstdisplayanimated');
        }
    }
}
handleScrollAnimation()
window.addEventListener('scroll', handleScrollAnimation)



// explore

const exploreButtons = Array.from(document.getElementsByClassName('arrow'));
const blueRectangle = document.getElementById('blueRectangle');
const exploreProductContainer = document.getElementById('explore-product-container').children
const dots = document.getElementsByClassName('dot')

function animateExplore(direction) {
    let upnext, dot;
    for (let i = 0; i < exploreProductContainer.length - 1; i++) {
        if (exploreProductContainer[i].classList.contains('shown')) {
            exploreProductContainer[i].parentElement.style.height = getComputedStyle(exploreProductContainer[i].parentElement).height;
            exploreProductContainer[i].classList.remove('shown');
            dots[i].style.backgroundColor = 'rgba(0, 0, 0, .3)';

            if (direction == 'right') {
                console.log('right', direction)
                if (i >= exploreProductContainer.length - 2) { upnext = exploreProductContainer[0]; dot = dots[0]
                } else { upnext = exploreProductContainer[i + 1]; dot = dots[i + 1]}
            } else {
                console.log('left', direction)
                if (i-1 < 0) { upnext = exploreProductContainer[5]; dot = dots[5]
                } else { upnext = exploreProductContainer[i - 1]; dot = dots[i - 1] }
            }
        }
    }
    blueRectangle.classList.add('explore-change-slide-animate');
    blueRectangle.addEventListener('animationend', () => {
        blueRectangle.classList.remove('explore-change-slide-animate')
    }, {once: true})
    setTimeout(() => {
        upnext.classList.add('shown');
        dot.style.backgroundColor = '#4379F2'
        upnext.parentElement.style.height = 'fit-content'
    }, 300);
}

exploreButtons.forEach((button) => {
    console.log(button.getAttribute('id'));
    button.addEventListener('touchstart', () => { animateExplore(direction = button.getAttribute('id'))} );
})