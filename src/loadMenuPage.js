export default function loadMenuPage() {
    const body = document.getElementById('body');

    // Inside page/body

    const menuHero = document.createElement('div');
    menuHero.setAttribute('id', 'menuHero');

    const menuContent = document.createElement('div');
    menuContent.setAttribute('id', 'menuContent');
    
    body.appendChild(menuHero);
    body.appendChild(menuContent);

    // Inside page/body/menuContent

    const titleBox = document.createElement('div');
    titleBox.setAttribute('id', 'titleBox');

    const drinks = document.createElement('div');
    drinks.setAttribute('id', 'drinks');
    drinks.classList.add('menuSection');

    const drinksParallax = document.createElement('div');
    drinksParallax.setAttribute('id', 'drinksParallax');
    drinksParallax.classList.add('parallax');

    const apps = document.createElement('div');
    apps.setAttribute('id', 'apps');
    apps.classList.add('menuSection');

    const appsParallax = document.createElement('div');
    appsParallax.setAttribute('id', 'appsParallax');
    appsParallax.classList.add('parallax');

    const sushi = document.createElement('div');
    sushi.setAttribute('id', 'sushi');
    sushi.classList.add('menuSection');

    const sushiParallax = document.createElement('div');
    sushiParallax.setAttribute('id', 'sushiParallax');
    sushiParallax.classList.add('parallax');

    const noodlesAndSoups = document.createElement('div');
    noodlesAndSoups.setAttribute('id', 'noodlesAndSoups');
    noodlesAndSoups.classList.add('menuSection');

    const noodlesAndSoupsParallax = document.createElement('div');
    noodlesAndSoupsParallax.setAttribute('id', 'noodlesAndSoupsParallax');
    noodlesAndSoupsParallax.classList.add('parallax');

    const entrees = document.createElement('div');
    entrees.setAttribute('id', 'entrees');
    entrees.classList.add('menuSection');

    const entreesParallax = document.createElement('div');
    entreesParallax.setAttribute('id', 'entreesParallax');
    entreesParallax.classList.add('parallax');

    const desserts = document.createElement('div');
    desserts.setAttribute('id', 'desserts');
    desserts.classList.add('menuSection');

    const dessertsParallax = document.createElement('div');
    dessertsParallax.setAttribute('id', 'dessertsParallax');
    dessertsParallax.classList.add('parallax');

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
    menuContent.appendChild(desserts);
    menuContent.appendChild(dessertsParallax);
    menuContent.appendChild(bottomMessage);

    // Inside page/body/menuContent/titleBox

    const pageTitle = document.createElement('div');
    pageTitle.setAttribute('id', 'pageTitle');
    pageTitle.innerHTML = 'Dining <span>Menu</span>';

    const pageNote = document.createElement('div');
    pageNote.setAttribute('id', 'pageNote');
    pageNote.textContent = 'Menu items and prices vary by how much we like you. Please wait for the prices until after your meal.';
    
    titleBox.appendChild(pageTitle);
    titleBox.appendChild(pageNote);

    // Inside page/body/menuContent/drinks

    const drinksTitle = document.createElement('div');
    drinksTitle.classList.add('title');
    drinksTitle.textContent = 'Drinks';

    const drinksItems = document.createElement('div');
    drinksItems.classList.add('items');
    
    drinks.appendChild(drinksTitle);
    drinks.appendChild(drinksItems);

    // Inside page/body/menuContent/drinks/.items

    const drinksItem1 = document.createElement('div');
    drinksItem1.classList.add('item');
    const drinksItem1Name = document.createElement('div');
    drinksItem1Name.classList.add('name');
    drinksItem1Name.textContent = 'Water';
    const drinksItem1Description = document.createElement('div');
    drinksItem1Description.classList.add('description');
    drinksItem1Description.textContent = 'Natural Spring | Sparkling Mineral | Tantalizing Tap';
    drinksItem1.appendChild(drinksItem1Name);
    drinksItem1.appendChild(drinksItem1Description);

    const drinksItem2 = document.createElement('div');
    drinksItem2.classList.add('item');
    const drinksItem2Name = document.createElement('div');
    drinksItem2Name.classList.add('name');
    drinksItem2Name.textContent = 'Soda';
    const drinksItem2Description = document.createElement('div');
    drinksItem2Description.classList.add('description');
    drinksItem2Description.textContent = `Ya like fizz? Ya like sugar? Then you'll love soda!`;
    drinksItem2.appendChild(drinksItem2Name);
    drinksItem2.appendChild(drinksItem2Description);
    
    const drinksItem3 = document.createElement('div');
    drinksItem3.classList.add('item');
    const drinksItem3Name = document.createElement('div');
    drinksItem3Name.classList.add('name');
    drinksItem3Name.textContent = 'Tea';
    const drinksItem3Description = document.createElement('div');
    drinksItem3Description.classList.add('description');
    drinksItem3Description.textContent = `Served hot or cold, this beverage is TEA-rrific! Please don't leave.`;
    drinksItem3.appendChild(drinksItem3Name);
    drinksItem3.appendChild(drinksItem3Description);
    
    drinksItems.appendChild(drinksItem1);
    drinksItems.appendChild(drinksItem2);
    drinksItems.appendChild(drinksItem3);

    // Inside page/body/menuContent/drinksParallax

    const drinksParallaxBox = document.createElement('div');
    drinksParallaxBox.classList.add('box');

    const drinksParallaxBoxTitle = document.createElement('div');
    drinksParallaxBoxTitle.classList.add('title');
    drinksParallaxBoxTitle.textContent = 'Frozen Specialties';
    drinksParallaxBox.appendChild(drinksParallaxBoxTitle);

    const drinksParallaxBoxItems = document.createElement('div');
    drinksParallaxBoxItems.classList.add('items');
    drinksParallaxBox.appendChild(drinksParallaxBoxItems);

    drinksParallax.appendChild(drinksParallaxBox);

    // Inside page/body/menuContent/drinksParallax/.box/.items

    const drinksParallaxBoxItem1 = document.createElement('div');
    drinksParallaxBoxItem1.classList.add('item');
    const drinksParallaxBoxItem1Name = document.createElement('div');
    drinksParallaxBoxItem1Name.classList.add('name');
    drinksParallaxBoxItem1Name.textContent = 'Smooooothie';
    const drinksParallaxBoxItem1Description = document.createElement('div');
    drinksParallaxBoxItem1Description.classList.add('description');
    drinksParallaxBoxItem1Description.textContent = `Smoother than a baby's bum`;
    drinksParallaxBoxItem1.appendChild(drinksParallaxBoxItem1Name);
    drinksParallaxBoxItem1.appendChild(drinksParallaxBoxItem1Description);

    const drinksParallaxBoxItem2 = document.createElement('div');
    drinksParallaxBoxItem2.classList.add('item');
    const drinksParallaxBoxItem2Name = document.createElement('div');
    drinksParallaxBoxItem2Name.classList.add('name');
    drinksParallaxBoxItem2Name.textContent = 'Slushy';
    const drinksParallaxBoxItem2Description = document.createElement('div');
    drinksParallaxBoxItem2Description.classList.add('description');
    drinksParallaxBoxItem2Description.textContent = `It's really just a smoothie with more ice and less fruit`;
    drinksParallaxBoxItem2.appendChild(drinksParallaxBoxItem2Name);
    drinksParallaxBoxItem2.appendChild(drinksParallaxBoxItem2Description);
    
    const drinksParallaxBoxItem3 = document.createElement('div');
    drinksParallaxBoxItem3.classList.add('item');
    const drinksParallaxBoxItem3Name = document.createElement('div');
    drinksParallaxBoxItem3Name.classList.add('name');
    drinksParallaxBoxItem3Name.textContent = 'Milkshake';
    const drinksParallaxBoxItem3Description = document.createElement('div');
    drinksParallaxBoxItem3Description.classList.add('description');
    drinksParallaxBoxItem3Description.textContent = `Our milk shakers were trained in the motherland for generations`;
    drinksParallaxBoxItem3.appendChild(drinksParallaxBoxItem3Name);
    drinksParallaxBoxItem3.appendChild(drinksParallaxBoxItem3Description);
    
    drinksParallaxBoxItems.appendChild(drinksParallaxBoxItem1);
    drinksParallaxBoxItems.appendChild(drinksParallaxBoxItem2);
    drinksParallaxBoxItems.appendChild(drinksParallaxBoxItem3);

    // Inside page/body/menuContent/apps

    const appsTitle = document.createElement('div');
    appsTitle.classList.add('title');
    appsTitle.textContent = 'Appetizers';

    const appsItems = document.createElement('div');
    appsItems.classList.add('items');
    
    apps.appendChild(appsTitle);
    apps.appendChild(appsItems);

    // Inside page/body/menuContent/apps/.items

    const appsItem1 = document.createElement('div');
    appsItem1.classList.add('item');
    const appsItem1Name = document.createElement('div');
    appsItem1Name.classList.add('name');
    appsItem1Name.textContent = 'Egg Rollers';
    const appsItem1Description = document.createElement('div');
    appsItem1Description.classList.add('description');
    appsItem1Description.textContent = 'So you can roll your own eggs';
    appsItem1.appendChild(appsItem1Name);
    appsItem1.appendChild(appsItem1Description);

    const appsItem2 = document.createElement('div');
    appsItem2.classList.add('item');
    const appsItem2Name = document.createElement('div');
    appsItem2Name.classList.add('name');
    appsItem2Name.textContent = 'Tempura Char';
    const appsItem2Description = document.createElement('div');
    appsItem2Description.classList.add('description');
    appsItem2Description.textContent = `Say that five times fast. Oh, wow, will it be served hot? Or cold? Who knows...`;
    appsItem2.appendChild(appsItem2Name);
    appsItem2.appendChild(appsItem2Description);
    
    const appsItem3 = document.createElement('div');
    appsItem3.classList.add('item');
    const appsItem3Name = document.createElement('div');
    appsItem3Name.classList.add('name');
    appsItem3Name.textContent = 'Dimplings';
    const appsItem3Description = document.createElement('div');
    appsItem3Description.classList.add('description');
    appsItem3Description.textContent = `Dumplings, but now made with more dimples`;
    appsItem3.appendChild(appsItem3Name);
    appsItem3.appendChild(appsItem3Description);
    
    appsItems.appendChild(appsItem1);
    appsItems.appendChild(appsItem2);
    appsItems.appendChild(appsItem3);

    // Inside page/body/menuContent/appsParallax

    const appsParallaxBox = document.createElement('div');
    appsParallaxBox.classList.add('box');

    const appsParallaxBoxTitle = document.createElement('div');
    appsParallaxBoxTitle.classList.add('title');
    appsParallaxBoxTitle.textContent = 'Tofu';
    appsParallaxBox.appendChild(appsParallaxBoxTitle);

    const appsParallaxBoxDescription = document.createElement('div');
    appsParallaxBoxDescription.classList.add('description');
    appsParallaxBoxDescription.textContent = `It's tofu. What more do you need?`
    appsParallaxBox.appendChild(appsParallaxBoxDescription);

    appsParallax.appendChild(appsParallaxBox);

    // Inside page/body/menuContent/sushi

    const sushiTitle = document.createElement('div');
    sushiTitle.classList.add('title');
    sushiTitle.textContent = 'Sushi';

    const sushiItems = document.createElement('div');
    sushiItems.classList.add('items');
    
    sushi.appendChild(sushiTitle);
    sushi.appendChild(sushiItems);

    // Inside page/body/menuContent/sushi/.items

    const sushiItem1 = document.createElement('div');
    sushiItem1.classList.add('item');
    const sushiItem1Name = document.createElement('div');
    sushiItem1Name.classList.add('name');
    sushiItem1Name.textContent = 'Hotel California Roll';
    const sushiItem1Description = document.createElement('div');
    sushiItem1Description.classList.add('description');
    sushiItem1Description.textContent = 'Sourced from the nearest California hotel straight to your plate';
    sushiItem1.appendChild(sushiItem1Name);
    sushiItem1.appendChild(sushiItem1Description);

    const sushiItem2 = document.createElement('div');
    sushiItem2.classList.add('item');
    const sushiItem2Name = document.createElement('div');
    sushiItem2Name.classList.add('name');
    sushiItem2Name.textContent = `Draggin' Roll`;
    const sushiItem2Description = document.createElement('div');
    sushiItem2Description.classList.add('description');
    sushiItem2Description.textContent = `Despite its perfectly rollable shape, our team went through the grueling process of dragging this 5 miles up and down a mountain for the authentic quality we know you deserve`;
    sushiItem2.appendChild(sushiItem2Name);
    sushiItem2.appendChild(sushiItem2Description);
    
    const sushiItem3 = document.createElement('div');
    sushiItem3.classList.add('item');
    const sushiItem3Name = document.createElement('div');
    sushiItem3Name.classList.add('name');
    sushiItem3Name.textContent = 'Steam Roll';
    const sushiItem3Description = document.createElement('div');
    sushiItem3Description.classList.add('description');
    sushiItem3Description.textContent = `Professionally steamrolled by our in-house heavy machinery experts`;
    sushiItem3.appendChild(sushiItem3Name);
    sushiItem3.appendChild(sushiItem3Description);
    
    sushiItems.appendChild(sushiItem1);
    sushiItems.appendChild(sushiItem2);
    sushiItems.appendChild(sushiItem3);

    // Inside page/body/menuContent/sushiParallax

    const sushiParallaxBox = document.createElement('div');
    sushiParallaxBox.classList.add('box');

    const sushiParallaxBoxTitle = document.createElement('div');
    sushiParallaxBoxTitle.classList.add('title');
    sushiParallaxBoxTitle.textContent = 'Rainbow Roll';
    sushiParallaxBox.appendChild(sushiParallaxBoxTitle);

    const sushiParallaxBoxDescription = document.createElement('div');
    sushiParallaxBoxDescription.classList.add('description');
    sushiParallaxBoxDescription.textContent = `This is just a Rainbow Roll. No, really. Nothing weird about it. In fact we'll add in some extra sashimi. Please, enjoy all the assorted fishies.`
    sushiParallaxBox.appendChild(sushiParallaxBoxDescription);

    sushiParallax.appendChild(sushiParallaxBox);

    // Inside page/body/menuContent/noodlesAndSoups

    const noodlesAndSoupsTitle = document.createElement('div');
    noodlesAndSoupsTitle.classList.add('title');
    noodlesAndSoupsTitle.textContent = 'Noodles and Soups';

    const noodlesAndSoupsItems = document.createElement('div');
    noodlesAndSoupsItems.classList.add('items');
    
    noodlesAndSoups.appendChild(noodlesAndSoupsTitle);
    noodlesAndSoups.appendChild(noodlesAndSoupsItems);

    // Inside page/body/menuContent/noodlesAndSoups/.items

    const noodlesAndSoupsItem1 = document.createElement('div');
    noodlesAndSoupsItem1.classList.add('item');
    const noodlesAndSoupsItem1Name = document.createElement('div');
    noodlesAndSoupsItem1Name.classList.add('name');
    noodlesAndSoupsItem1Name.textContent = 'Ramen';
    const noodlesAndSoupsItem1Description = document.createElement('div');
    noodlesAndSoupsItem1Description.classList.add('description');
    noodlesAndSoupsItem1Description.textContent = `I'm tired of writing these descriptions, it's just ramen`;
    noodlesAndSoupsItem1.appendChild(noodlesAndSoupsItem1Name);
    noodlesAndSoupsItem1.appendChild(noodlesAndSoupsItem1Description);

    const noodlesAndSoupsItem2 = document.createElement('div');
    noodlesAndSoupsItem2.classList.add('item');
    const noodlesAndSoupsItem2Name = document.createElement('div');
    noodlesAndSoupsItem2Name.classList.add('name');
    noodlesAndSoupsItem2Name.textContent = `Soba`;
    const noodlesAndSoupsItem2Description = document.createElement('div');
    noodlesAndSoupsItem2Description.classList.add('description');
    noodlesAndSoupsItem2Description.textContent = `I'm still writing from this windowless room, and I haven't been fed in days`;
    noodlesAndSoupsItem2.appendChild(noodlesAndSoupsItem2Name);
    noodlesAndSoupsItem2.appendChild(noodlesAndSoupsItem2Description);
    
    const noodlesAndSoupsItem3 = document.createElement('div');
    noodlesAndSoupsItem3.classList.add('item');
    const noodlesAndSoupsItem3Name = document.createElement('div');
    noodlesAndSoupsItem3Name.classList.add('name');
    noodlesAndSoupsItem3Name.textContent = 'Udon';
    const noodlesAndSoupsItem3Description = document.createElement('div');
    noodlesAndSoupsItem3Description.classList.add('description');
    noodlesAndSoupsItem3Description.textContent = `Udon, futon, crouton, wax on, wax off... oh my god, am I losing my mind?`;
    noodlesAndSoupsItem3.appendChild(noodlesAndSoupsItem3Name);
    noodlesAndSoupsItem3.appendChild(noodlesAndSoupsItem3Description);
    
    noodlesAndSoupsItems.appendChild(noodlesAndSoupsItem1);
    noodlesAndSoupsItems.appendChild(noodlesAndSoupsItem2);
    noodlesAndSoupsItems.appendChild(noodlesAndSoupsItem3);

    // Inside page/body/menuContent/noodlesAndSoupsParallax

    const noodlesAndSoupsParallaxBox = document.createElement('div');
    noodlesAndSoupsParallaxBox.classList.add('box');

    const noodlesAndSoupsParallaxBoxTitle = document.createElement('div');
    noodlesAndSoupsParallaxBoxTitle.classList.add('title');
    noodlesAndSoupsParallaxBoxTitle.textContent = 'Baby Ramen';
    noodlesAndSoupsParallaxBox.appendChild(noodlesAndSoupsParallaxBoxTitle);

    const noodlesAndSoupsParallaxBoxDescription = document.createElement('div');
    noodlesAndSoupsParallaxBoxDescription.classList.add('description');
    noodlesAndSoupsParallaxBoxDescription.textContent = 'Like if a ramen and another ramen had a baby'
    noodlesAndSoupsParallaxBox.appendChild(noodlesAndSoupsParallaxBoxDescription);

    noodlesAndSoupsParallax.appendChild(noodlesAndSoupsParallaxBox);

    // Inside page/body/menuContent/entrees

    const entreesTitle = document.createElement('div');
    entreesTitle.classList.add('title');
    entreesTitle.textContent = 'Entrees';

    const entreesItems = document.createElement('div');
    entreesItems.classList.add('items');
    
    entrees.appendChild(entreesTitle);
    entrees.appendChild(entreesItems);

    // Inside page/body/menuContent/entrees/.items

    const entreesItem1 = document.createElement('div');
    entreesItem1.classList.add('item');
    const entreesItem1Name = document.createElement('div');
    entreesItem1Name.classList.add('name');
    entreesItem1Name.textContent = 'Steak and Shrimp';
    const entreesItem1Description = document.createElement('div');
    entreesItem1Description.classList.add('description');
    entreesItem1Description.textContent = `It's all in the name, baby`;
    entreesItem1.appendChild(entreesItem1Name);
    entreesItem1.appendChild(entreesItem1Description);

    const entreesItem2 = document.createElement('div');
    entreesItem2.classList.add('item');
    const entreesItem2Name = document.createElement('div');
    entreesItem2Name.classList.add('name');
    entreesItem2Name.textContent = 'Shrimp and Steak';
    const entreesItem2Description = document.createElement('div');
    entreesItem2Description.classList.add('description');
    entreesItem2Description.textContent = `Contrary to what you might think, this dish is entirely different from the similarly named "Steak and Shrimp." For this dish, we place the shrimp onto the plate BEFORE the steak.`;
    entreesItem2.appendChild(entreesItem2Name);
    entreesItem2.appendChild(entreesItem2Description);
    
    const entreesItem3 = document.createElement('div');
    entreesItem3.classList.add('item');
    const entreesItem3Name = document.createElement('div');
    entreesItem3Name.classList.add('name');
    entreesItem3Name.textContent = 'Shrimpsteak';
    const entreesItem3Description = document.createElement('div');
    entreesItem3Description.classList.add('description');
    entreesItem3Description.textContent = `Our revolutionary dish where we actually make a steak out of shrimp. You're welcome, science.`;
    entreesItem3.appendChild(entreesItem3Name);
    entreesItem3.appendChild(entreesItem3Description);
    
    entreesItems.appendChild(entreesItem1);
    entreesItems.appendChild(entreesItem2);
    entreesItems.appendChild(entreesItem3);

    // Inside page/body/menuContent/entreesParallax

    const entreesParallaxBox = document.createElement('div');
    entreesParallaxBox.classList.add('box');

    const entreesParallaxBoxTitle = document.createElement('div');
    entreesParallaxBoxTitle.classList.add('title');
    entreesParallaxBoxTitle.textContent = 'Poke Bowl';
    entreesParallaxBox.appendChild(entreesParallaxBoxTitle);

    const entreesParallaxBoxDescription = document.createElement('div');
    entreesParallaxBoxDescription.classList.add('description');
    entreesParallaxBoxDescription.textContent = 'We employ the nations most skilled bowl pokers in the industry, so you can rest assured that your bowl is sufficiently and properly poked.'
    entreesParallaxBox.appendChild(entreesParallaxBoxDescription);

    entreesParallax.appendChild(entreesParallaxBox);

    // Inside page/body/menuContent/desserts

    const dessertsTitle = document.createElement('div');
    dessertsTitle.classList.add('title');
    dessertsTitle.textContent = 'Desserts';

    const dessertsItems = document.createElement('div');
    dessertsItems.classList.add('items');
    
    desserts.appendChild(dessertsTitle);
    desserts.appendChild(dessertsItems);

    // Inside page/body/menuContent/desserts/.items

    const dessertsItem1 = document.createElement('div');
    dessertsItem1.classList.add('item');
    const dessertsItem1Name = document.createElement('div');
    dessertsItem1Name.classList.add('name');
    dessertsItem1Name.textContent = 'I Scream';
    const dessertsItem1Description = document.createElement('div');
    dessertsItem1Description.classList.add('description');
    dessertsItem1Description.textContent = `It doesn't matter how loud. No one can hear me. The walls don't echo. Sometimes, I can't even hear myself.`;
    dessertsItem1.appendChild(dessertsItem1Name);
    dessertsItem1.appendChild(dessertsItem1Description);

    const dessertsItem2 = document.createElement('div');
    dessertsItem2.classList.add('item');
    const dessertsItem2Name = document.createElement('div');
    dessertsItem2Name.classList.add('name');
    dessertsItem2Name.textContent = `Cake`;
    const dessertsItem2Description = document.createElement('div');
    dessertsItem2Description.classList.add('description');
    dessertsItem2Description.textContent = `This is what I wish I had on my birthday, but truthfully, I don't even know what day it is. But I'll pretend it's my birthday. And I'll pretend I have this cake.`;
    dessertsItem2.appendChild(dessertsItem2Name);
    dessertsItem2.appendChild(dessertsItem2Description);
    
    const dessertsItem3 = document.createElement('div');
    dessertsItem3.classList.add('item');
    const dessertsItem3Name = document.createElement('div');
    dessertsItem3Name.classList.add('name');
    dessertsItem3Name.textContent = 'Daifuku';
    const dessertsItem3Description = document.createElement('div');
    dessertsItem3Description.classList.add('description');
    dessertsItem3Description.textContent = `This is what I want to say to my captors, but they don't even visit me. They should visit. Maybe I won't actually say it. We could be friends.`;
    dessertsItem3.appendChild(dessertsItem3Name);
    dessertsItem3.appendChild(dessertsItem3Description);
    
    dessertsItems.appendChild(dessertsItem1);
    dessertsItems.appendChild(dessertsItem2);
    dessertsItems.appendChild(dessertsItem3);

    // Inside page/body/menuContent/dessertsParallax

    const dessertsParallaxBox = document.createElement('div');
    dessertsParallaxBox.classList.add('box');

    const dessertsParallaxBoxTitle = document.createElement('div');
    dessertsParallaxBoxTitle.classList.add('title');
    dessertsParallaxBoxTitle.textContent = 'Taiyaki';
    dessertsParallaxBox.appendChild(dessertsParallaxBoxTitle);

    const dessertsParallaxBoxDescription = document.createElement('div');
    dessertsParallaxBoxDescription.classList.add('description');
    dessertsParallaxBoxDescription.textContent = `I'm being forced against my will to tell you that this is a traditional Japanese fish-shaped cake with different filling options like red bean or green tea.`
    dessertsParallaxBox.appendChild(dessertsParallaxBoxDescription);

    dessertsParallax.appendChild(dessertsParallaxBox);

    // Inside page/body/menuContent/bottomMessage

    const bottomMessageSlogan = document.createElement('div');
    bottomMessageSlogan.setAttribute('id', 'bottomMessageSlogan');
    bottomMessageSlogan.textContent = `Experience Food!`

    const bottomMessageNote = document.createElement('div');
    bottomMessageNote.setAttribute('id', 'bottomMessageNote');
    bottomMessageNote.textContent = `* We are required by the Health Department to inform you that consuming raw please help me I don't know where I am, I just want to see my family again, I don't know if it's been months or years, and they keep playing the Rick Roll song in this room. I liked it for the first few weeks, but now it's driving me insane! Help me! Good God!`

    bottomMessage.appendChild(bottomMessageSlogan);
    bottomMessage.appendChild(bottomMessageNote);
};