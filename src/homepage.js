import mainPhoto from './images/main-photo.jpeg';

export default function createHomepage() {
    const contentElement = document.getElementById('content');

    const headlineElement = document.createElement('h1');
    headlineElement.textContent = 'Welcome to Château Bodega';
    contentElement.appendChild(headlineElement);

    const myPhoto = new Image();
    myPhoto.src = mainPhoto;
    myPhoto.classList.add("photo");
    contentElement.appendChild(myPhoto);

    const paragraphElement = document.createElement('p');
    paragraphElement.textContent = 'An exquisite winery nestled amidst rolling vineyards in the heart of wine country. With its rich history and commitment to crafting exceptional wines, Château Bodega offers a truly unforgettable experience for wine enthusiasts and connoisseurs alike.As you step onto the grounds of Château Bodega, you are immediately enveloped in a sense of timeless elegance and natural beauty. The winery\'s sprawling estate is adorned with meticulously manicured gardens, ancient oak trees, and rows upon rows of lush grapevines stretching as far as the eye can see.Visitors to Château Bodega have the opportunity to embark on a captivating journey through the art of winemaking. The winery offers immersive tours, allowing guests to witness the grape-to-glass process firsthand. You can stroll through the vineyards, learning about the different grape varieties, terroir, and sustainable farming practices that contribute to the unique character of their wines.';
    paragraphElement.classList.add("main-paragraph");
    contentElement.appendChild(paragraphElement);

}
