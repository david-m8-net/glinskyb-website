const images = document.getElementsByTagName('img');

function userperspectivechanged() {
    Array.from(images).forEach((image) => {
        const rect = image.getBoundingClientRect();
        if (!image.getAttribute('src') & (rect.top > -image.clientHeight && rect.bottom > image.clientHeight)) {
            image.setAttribute('src', image.getAttribute('src0'));
        }
    })
}

userperspectivechanged();
window.addEventListener('scroll', userperspectivechanged)