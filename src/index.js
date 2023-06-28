import createHomepage from './homepage.js';
import createContactPage from './contactpage.js';
import menu from './menupage.js';
import './style.css';


function createNavigation() {
    const contentElement = document.getElementById('content');

    const navElement = document.createElement('nav');
    navElement.className = ('nav')
    const homeButton = document.createElement('button');
    homeButton.className = ('button');
    const menuButton = document.createElement('button');
    menuButton.className = ('button');
    const contactButton = document.createElement('button');
    contactButton.className = ('button')

    homeButton.textContent = 'Home';
    menuButton.textContent = 'Menu';
    contactButton.textContent = 'Contact';

    navElement.appendChild(homeButton);
    navElement.appendChild(menuButton);
    navElement.appendChild(contactButton);
    contentElement.appendChild(navElement);


    homeButton.addEventListener("click", () => {
        contentElement.innerHTML = "";
        createNavigation();
        createHomepage();
        console.log("home");
    })
    menuButton.addEventListener("click", () => {
        contentElement.innerHTML = "";
        createNavigation();
        menu.createMenuPage();
        console.log("menu");
    })
    contactButton.addEventListener("click", () => {
        contentElement.innerHTML = "";
        createNavigation();
        createContactPage();
        console.log("contact");
    })
}
createNavigation() //Create the navbar with th buttons

createHomepage(); //Create Homepage as the first page when you enter the website