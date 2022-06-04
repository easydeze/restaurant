import {header} from '../src/components/home.js';
import {menu} from '../src/components/menu.js';
import {contact} from '../src/components/contact.js';

function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
}

function component() {
    const content = document.querySelector('#content');
    const title = document.createElement('h1');
    title.style = "text-align: center;";
    title.innerHTML = "Restaurant";
    const navigation = document.createElement('div');
    navigation.classList.add('button-nav');
    const homeButton = document.createElement('button');
    homeButton.classList.add('home');
    homeButton.innerHTML = 'home.';
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu');
    menuButton.innerHTML = 'menu.';
    const contactButton = document.createElement('button');
    contactButton.classList.add('contact');
    contactButton.innerHTML = 'contact.';

    navigation.appendChild(homeButton);
    navigation.appendChild(menuButton);
    navigation.appendChild(contactButton);
    
    content.appendChild(title);
    content.appendChild(navigation);
    content.appendChild(header());

    homeButton.addEventListener('click', () => {
        empty(content);
        content.appendChild(title);
        content.appendChild(navigation);
        content.appendChild(header());
    })

    menuButton.addEventListener('click', () => {
        empty(content);
        content.appendChild(title);
        content.appendChild(navigation);
        content.appendChild(menu());
    })

    contactButton.addEventListener('click', () => {
        empty(content);
        content.appendChild(title);
        content.appendChild(navigation);
        content.appendChild(contact());
    })
    return content;
}

document.body.appendChild(component());