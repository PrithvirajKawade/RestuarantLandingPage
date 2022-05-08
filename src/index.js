import { appendHome } from './homepage';
import { appendMenu } from './menu';
import { appendContact } from './contact';

content.appendChild(appendHome());

// Link Menu buttons to functions 


(function updateDisplay() {

const content = document.querySelector('#content');
const homeBtnElement = document.querySelector('#home');
const menuBtnElement = document.querySelector('#menu');
const contactElement = document.querySelector('#contact');


function switchToHome() {
    reset();
    content.appendChild(appendHome());
}


function switchToMenu() {
    reset();
    content.appendChild(appendMenu());
}

function switchToContact() {
    reset();
    content.appendChild(appendContact());
}


function reset() {
    content.innerHTML = '';
}


homeBtnElement.addEventListener('click', switchToHome);
menuBtnElement.addEventListener('click', switchToMenu);
contactElement.addEventListener('click', switchToContact);

})();

