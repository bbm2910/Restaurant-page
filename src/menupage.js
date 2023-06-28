// menu.js
const menu = (function () {
    const menuItems = [
        {
            name: "Wine Flights",
            description: "Sample a variety of wines with our themed flights.",
            price: 55,
        },
        {
            name: "Charcuterie and Cheese Boards",
            description: "Artisanal cured meats, gourmet cheeses, olives, and more.",
            price: 30,
        },
        {
            name: "Small Plates or Tapas",
            description: "A range of small plates or tapas-style dishes that pair well with different wines.",
            price: 35,
        },
        {
            name: "Salads and Fresh Greens",
            description: "A variety of salads featuring fresh, seasonal ingredients. Include options like a classic Caesar salad, mixed greens with goat cheese and berries, or a Mediterranean-inspired salad with feta cheese and olives.",
            price: 19.
        },
        {
            name: "Dessert Pairings",
            description: "Different options that complement your wines. This can include chocolate truffles, fruit tarts, crème brûlée, or cheese plates with sweet preserves and honey.",
            price: 38,
        },
    ];

    // Get all menu items
    function getMenuItems() {
        return menuItems;
    }

    // Add a new menu item
    function addMenuItem(name, description, price) {
        const newItem = { name, description, price };
        menuItems.push(newItem);
    }

    // Create menu page
    function createMenuPage() {
        const contentElement = document.getElementById('content');

        const headlineElement = document.createElement('h2');
        headlineElement.textContent = 'Our menu';
        headlineElement.classList.add('menu-heading');
        contentElement.appendChild(headlineElement);

        const menuItems = getMenuItems();
        const menuListElement = document.createElement('ul');
        menuListElement.classList.add('menu-list');

        menuItems.forEach((menuItem) => {
            const listItemElement = document.createElement('li');
            listItemElement.classList.add('menu-item');

            const nameElement = document.createElement('h3');
            nameElement.textContent = menuItem.name;
            nameElement.classList.add('menu-item-name');

            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = menuItem.description;
            descriptionElement.classList.add('menu-item-description');

            const priceElement = document.createElement('p');
            priceElement.textContent = menuItem.price;
            priceElement.classList.add('menu-item-price');

            listItemElement.appendChild(nameElement);
            listItemElement.appendChild(descriptionElement);
            listItemElement.appendChild(priceElement);
            menuListElement.appendChild(listItemElement);
        });

        contentElement.appendChild(menuListElement);
    }

    // Return public methods
    return {
        getMenuItems,
        addMenuItem,
        createMenuPage
    };
})();

export default menu;
