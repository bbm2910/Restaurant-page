import instagramPhoto from './images/insta.png';
import facebookPhoto from './images/facebook.png';
import whatsappPhoto from './images/whatsapp.png';

export default function createContactPage() {
    const contentElement = document.getElementById('content');

    const headlineElement = document.createElement('h2');
    headlineElement.textContent = 'Contact us';
    headlineElement.classList.add('contact-heading');
    contentElement.appendChild(headlineElement);

    const adressTitle = document.createElement('h2');
    adressTitle.textContent = 'Adress';
    adressTitle.classList.add('adress-title');
    contentElement.appendChild(adressTitle);

    const paragraphAdress = document.createElement('p');
    paragraphAdress.textContent = '12345 Caramba Village, Maravilla del Sol';
    paragraphAdress.classList.add('adress-paragraph');
    contentElement.appendChild(paragraphAdress);


    const phoneTitle = document.createElement('h2');
    phoneTitle.textContent = 'Phone';
    phoneTitle.classList.add('adress-title');
    contentElement.appendChild(phoneTitle);

    const paragraphPhone = document.createElement('p');
    paragraphPhone.textContent = '0070/44212-33092';
    paragraphPhone.classList.add('adress-paragraph');
    contentElement.appendChild(paragraphPhone);

    const instaPhoto = new Image();
    instaPhoto.src = instagramPhoto;
    instaPhoto.classList.add("social-media-photo");
    contentElement.appendChild(instaPhoto);

    const fbkPhoto = new Image();
    fbkPhoto.src = facebookPhoto;
    fbkPhoto.classList.add("social-media-photo");
    contentElement.appendChild(fbkPhoto);

    const wtsPhoto = new Image();
    wtsPhoto.src = whatsappPhoto;
    wtsPhoto.classList.add("social-media-photo");
    contentElement.appendChild(wtsPhoto);

}