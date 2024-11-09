// constants
    // moremenu
let is_menu_closed = true;
const menubutton = document.getElementById('moremenubutton');
const menudisplay = document.getElementById('moremenu-display');

// automating more memu




function togglemenu() {
    if (is_menu_closed) {
        menudisplay.style.display = 'flex'
        menubutton.style.backgroundColor = 'rgba(0, 0, 0, .8)';
        menubutton.children[0].children[1].children[0].setAttribute('fill', '#fff')
        console.log(menubutton.children[0].children[1])
        is_menu_closed = false;
    } else {
        menudisplay.style.display = 'none'
        menubutton.style.backgroundColor = 'transparent';
        menubutton.children[0].children[1].children[0].setAttribute('fill', '#373A40')
        is_menu_closed = true;
    }
}

menubutton.addEventListener('click', togglemenu)
document.getElementById('closenavbutton').addEventListener('click', togglemenu)