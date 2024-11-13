// products
console.log(1)

const products = Array.from(document.getElementsByClassName('product-obj'));
products.forEach((product) => {
    console.log(products)
    const learnmore_btn = product.children[3];
    console.log(learnmore_btn)
    learnmore_btn.addEventListener('click', () => { window.location.pathname = 'mobile/' + learnmore_btn.getAttribute('redirect') })
});