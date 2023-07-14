export default function menuLoad() {
    const body = document.getElementById('body');

    // Inside page/body

    const hero = document.createElement('div');
    hero.setAttribute('id', 'hero');

    const mainContent = document.createElement('div');
    mainContent.setAttribute('id', 'mainContent');
    
    body.appendChild(hero);
    body.appendChild(mainContent);

    // Inside page/body/mainContent

    const titleBox = document.createElement('div');
    titleBox.setAttribute('id', 'hero');

    const drinks = document.createElement('div');
    drinks.setAttribute('id', 'drinks');

    const drinksParallax = document.createElement('div');
    drinksParallax.setAttribute('id', 'drinksParallax');

    const apps = document.createElement('div');
    apps.setAttribute('id', 'apps');

    const appsParallax = document.createElement('div');
    appsParallax.setAttribute('id', 'appsParallax');

    const sushi = document.createElement('div');
    sushi.setAttribute('id', 'sushi');

    const sushiParallax = document.createElement('div');
    sushiParallax.setAttribute('id', 'sushiParallax');

    const noodlesAndSoups = document.createElement('div');
    noodlesAndSoups.setAttribute('id', 'noodlesAndSoups');

    const noodlesAndSoupsParallax = document.createElement('div');
    noodlesAndSoupsParallax.setAttribute('id', 'noodlesAndSoupsParallax');

    const entrees = document.createElement('div');
    entrees.setAttribute('id', 'entrees');

    const entreesParallax = document.createElement('div');
    entreesParallax.setAttribute('id', 'entreesParallax');

    const dessert = document.createElement('div');
    dessert.setAttribute('id', 'dessert');

    const dessertParallax = document.createElement('div');
    dessertParallax.setAttribute('id', 'dessertParallax');

    const bottomMessage = document.createElement('div');
    bottomMessage.setAttribute('id', 'bottomMessage');

    
    
    mainContent.appendChild(hero);
    mainContent.appendChild(drinks);
    mainContent.appendChild(drinksParallax);
    mainContent.appendChild(apps);
    mainContent.appendChild(appsParallax);
    mainContent.appendChild(sushi);
    mainContent.appendChild(sushiParallax);
    mainContent.appendChild(noodlesAndSoups);
    mainContent.appendChild(noodlesAndSoupsParallax);
    mainContent.appendChild(entrees);
    mainContent.appendChild(entreesParallax);
    mainContent.appendChild(dessert);
    mainContent.appendChild(dessertParallax);
    mainContent.appendChild(bottomMessage);

    // Inside page/body/mainContent/titleBox

    
}