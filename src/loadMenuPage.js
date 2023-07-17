export default function loadMenuPage() {
    console.log('what?');
    const body = document.getElementById('body');

    // Inside page/body

    const menuHero = document.createElement('div');
    menuHero.setAttribute('id', 'menuHero');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menuContent');
    
    body.appendChild(menuHero);
    body.appendChild(menuContent);
console.log('huh?');

    // Inside page/body/menuContent

    const titleBox = document.createElement('div');
    titleBox.setAttribute('id', 'titleBox');

    const drinks = document.createElement('div');
    drinks.setAttribute('id', 'drinks');

    const drinksParallax = document.createElement('div');
    drinksParallax.setAttribute('id', 'drinksParallax');
    drinksParallax.classList.add('parallax');

    const apps = document.createElement('div');
    apps.setAttribute('id', 'apps');

    const appsParallax = document.createElement('div');
    appsParallax.setAttribute('id', 'appsParallax');
    appsParallax.classList.add('parallax');

    const sushi = document.createElement('div');
    sushi.setAttribute('id', 'sushi');

    const sushiParallax = document.createElement('div');
    sushiParallax.setAttribute('id', 'sushiParallax');
    sushiParallax.classList.add('parallax');

    const noodlesAndSoups = document.createElement('div');
    noodlesAndSoups.setAttribute('id', 'noodlesAndSoups');

    const noodlesAndSoupsParallax = document.createElement('div');
    noodlesAndSoupsParallax.setAttribute('id', 'noodlesAndSoupsParallax');
    noodlesAndSoupsParallax.classList.add('parallax');

    const entrees = document.createElement('div');
    entrees.setAttribute('id', 'entrees');

    const entreesParallax = document.createElement('div');
    entreesParallax.setAttribute('id', 'entreesParallax');
    entreesParallax.classList.add('parallax');

    const dessert = document.createElement('div');
    dessert.setAttribute('id', 'dessert');

    const dessertParallax = document.createElement('div');
    dessertParallax.setAttribute('id', 'dessertParallax');
    dessertParallax.classList.add('parallax');

    const bottomMessage = document.createElement('div');
    bottomMessage.setAttribute('id', 'bottomMessage');

    menuContent.appendChild(titleBox);
    menuContent.appendChild(drinks);
    menuContent.appendChild(drinksParallax);
    menuContent.appendChild(apps);
    menuContent.appendChild(appsParallax);
    menuContent.appendChild(sushi);
    menuContent.appendChild(sushiParallax);
    menuContent.appendChild(noodlesAndSoups);
    menuContent.appendChild(noodlesAndSoupsParallax);
    menuContent.appendChild(entrees);
    menuContent.appendChild(entreesParallax);
    menuContent.appendChild(dessert);
    menuContent.appendChild(dessertParallax);
    menuContent.appendChild(bottomMessage);

    // Inside page/body/menuContent/titleBox

    const pageTitle = document.createElement('div');
    pageTitle.setAttribute('id', 'pageTitle');
    pageTitle.textContent = 'Dining Menu';

    const pageNote = document.createElement('div');
    pageNote.setAttribute('id', 'pageNote');
    pageNote.textContent = 'Menu items and prices vary by how much we like you. Please wait for the prices until after your meal.';
    
    titleBox.appendChild(pageTitle);
    titleBox.appendChild(pageNote);
};