const services_list = ['SALES', 'CLIENT', 'DIGITAL MARKETING', 'STAFFING', 'DIGITAL BANKING', 'TECHNICAL CONSULTING'];
let list_counter = 0;

const current = document.getElementById('alternatingservnames').children[0];
const current_parent = current.parentElement;

function alter_serv_name() {
    const transitionHandler = () => {
        // Remove the event listener to prevent multiple calls
        current.removeEventListener('transitionend', transitionHandler);
        
        // Update the counter and text
        list_counter = (list_counter + 1) % services_list.length; // Cycle through services
        current.textContent = services_list[list_counter];
        
        // Calculate the new width after the text update
        current_parent.style.width = `${current.offsetWidth}px`; // Set width based on current text
        current.style.opacity = '1';
    };
    
    current.style.opacity = '0';
    current.addEventListener('transitionend', transitionHandler);
}

setInterval(alter_serv_name, 5000);
