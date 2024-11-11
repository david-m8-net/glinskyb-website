let device_type;
if(/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {device_type='mobile';
} else {device_type='desktop'; }

// animating link sections in navbar
const navbar = document.getElementById('nav');

let links = Array.from(document.getElementsByClassName('linkobj'));
const linkPcolor_initial = links[0].style.color;

const services_popup = document.getElementById('services-popup');
const services = document.getElementsByClassName('service-link')


// logo - link
document.getElementById('navlogo').addEventListener('click', () => {
    window.location.href = 'https://glinskyhq.com'
})

document.getElementById('navaboutlink').addEventListener('click', () => {
    window.location.pathname = `${device_type}/about.html`
})



links[0].addEventListener('mouseover', () => {
    services_popup.classList.add('visible')

})

links[0].addEventListener('mouseout', () => {
    if (!links[0].matches(':hover')) {
        services_popup.classList.remove('visible')
    }
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('mouseover', () => {
        links[i].children[0].style.color = '#1E56A0';
        if (links[i].children[1]) { links[i].children[1].style.transform = 'rotate(-90deg)'; }
    })

    links[i].addEventListener('mouseout', () => {
        links[i].children[0].style.color = linkPcolor_initial;
        if (links[i].children[1]) { links[i].children[1].style.transform = 'rotate(0deg)'; }
    })
}

// service

const serv_links = {
    'SalesBoost Program': `${device_type}/sales.html`,
    'ClientGrow System': `${device_type}/client.html`,
    'Digital Marketing': `${device_type}/digitalmarketing.html`,
    'Staffing Management': `${device_type}/staffing.html`,
    'Technical Consulting': `${device_type}/techconsulting.html`,
    'Digital Banking': `${device_type}/digitalbanking.html`
}

for (let i = 0; i < services.length; i++) {
    services[i].addEventListener('mouseover', () => {
        services[i].style.backgroundColor = 'rgba(214, 228, 240, .5)';
        services[i].children[0].style.color = '#1E56A0';
        services[i].children[1].style.opacity = '1';

    })

    services[i].addEventListener('mouseout', () => {
        services[i].style.backgroundColor = 'transparent';
        services[i].children[0].style.color = '#373A40';
        services[i].children[1].style.opacity = '0';

    })
    
    services[i].addEventListener('click', () => {
        if (services[i].hasAttribute('redirect')) {
            window.location.pathname = `${device_type}/${services[i].getAttribute('redirect')}`
        } else {
            window.location.pathname = serv_links[services[i].children[0].textContent]
        }

    })
    
}



// SEARCH

const data = {
    'clientgrow system': {title: 'ClientGrow System', href: serv_links['ClientGrow System']},
    'digital banking': {title: 'Digital Banking', href: serv_links['Digital Banking']},
    'digital marketing': {title: 'Digital Marketing', href: serv_links['Digital Marketing']},
    'products': {title: 'Products', href: '#bestproducts'},
    'salesboost program': {title: 'SalesBoost Program', href: serv_links['SalesBoost Program']},
    'staffing management': {title: 'Staffing Management', href: serv_links['Staffing Management']},
    'technical consulting': {title: 'Technical Consulting', href: serv_links['Technical Consulting']},
}

// const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const search = document.getElementById('search');
const search_input = search.children[1];
const search_field_container = document.getElementsByClassName('search-field')[0];
const search_result = document.getElementById('result-container');
const search_results = document.getElementsByClassName('search-results')[0];

function searchfocused() {
    search.style.backgroundColor = '#fff';
}

function searchunfocused(event) {
    const rect = search_field_container.getBoundingClientRect()
    if (rect.height < event.clientY) {
        search.style.backgroundColor = '#eee';
        search_field_container.classList.remove('visible');
    }
}

function value_changed() {
    function is_matrix_right(key, value) {
        const temp_key = key.slice(key.indexOf(value[0]) + 1);
        const temp_value = value.slice(1);
        
        const result = key.indexOf(value[1]) - key.indexOf(value[0]) == 1;
        
        if (temp_value.length == 1) {return result}
        return result && is_matrix_right(temp_key, temp_value)
    }
    
    if (!search_field_container.classList.contains('visible')) {search_field_container.classList.add('visible')}

    const input = search_input.value.toLowerCase().split('');
    search_result.textContent = input.join('')
    let matches_list = {};
    for (const [key, value] of Object.entries(data)) {
        matches_list[key] = [];
        for (let i = 0; i < input.length; i++) {
            if (key.includes(input[i])) { matches_list[key].push(input[i]) }
        }
    }
    search_results.innerHTML = ''
    for (const [key, value] of Object.entries(matches_list)) {
        if (is_matrix_right(key, value)) {
            const newchild = document.getElementById('service_link_prime_example').cloneNode(true);
            newchild.children[0].textContent = data[key].title;
            newchild.children[1].style.width = '20px'

            newchild.addEventListener('mouseover', () => {
                newchild.style.backgroundColor = 'rgba(214, 228, 240, .5)';
                newchild.children[0].style.color = '#1E56A0';
                newchild.children[1].style.opacity = '1';
        
            })
        
            newchild.addEventListener('mouseout', () => {
                newchild.style.backgroundColor = 'transparent';
                newchild.children[0].style.color = '#373A40';
                newchild.children[1].style.opacity = '0';
        
            })

            search_results.appendChild(newchild);
        }
    }
}

search_input.addEventListener('focus', searchfocused);
window.addEventListener('click', searchunfocused);


search_input.addEventListener('input', value_changed);