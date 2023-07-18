export default function preLoadPage() {
    const page = document.getElementById('page');

    // Inside page

    const header = document.createElement('div');
    header.setAttribute('id', 'header');

    const body = document.createElement('div');
    body.setAttribute('id', 'body');

    const footer = document.createElement('div');
    footer.setAttribute('id', 'footer');

    page.appendChild(header);
    page.appendChild(body);
    page.appendChild(footer);

    // Inside page/header

    const socialHeader = document.createElement('div');
    socialHeader.setAttribute('id', 'socialHeader');

    const mainHeader = document.createElement('div');
    mainHeader.setAttribute('id', 'mainHeader');

    header.appendChild(socialHeader);
    header.appendChild(mainHeader);

    // Inside page/header/socialHeader

    const enableGeodude = document.createElement('div');
    enableGeodude.setAttribute('id', 'enableGeodude');
    enableGeodude.textContent = 'Please enable Geodude';

    const socialIcons = document.createElement('div');
    socialIcons.setAttribute('id', 'socialIcons');

    socialHeader.appendChild(enableGeodude);
    socialHeader.appendChild(socialIcons);

    // Inside page/header/mainHeader

    const siteTitle = document.createElement('div');
    siteTitle.setAttribute('id', 'siteTitle');
    siteTitle.textContent = 'Restaurant.';

    const homeTab = document.createElement('div');
    homeTab.setAttribute('id', 'homeTab');
    homeTab.classList.add('tab');
    homeTab.textContent = 'Home';

    const menuTab = document.createElement('div');
    menuTab.setAttribute('id', 'menuTab');
    menuTab.classList.add('tab');
    menuTab.textContent = 'Menu';

    const contactTab = document.createElement('div');
    contactTab.setAttribute('id', 'contactTab');
    contactTab.classList.add('tab');
    contactTab.textContent = 'Contact Us';

    mainHeader.appendChild(siteTitle);
    mainHeader.appendChild(homeTab);
    mainHeader.appendChild(menuTab);
    mainHeader.appendChild(contactTab);

    // Inside page/footer

    const returnToTop = document.createElement('div');
    returnToTop.setAttribute('id', 'returnToTop');

    returnToTop.textContent = 'Return to Top';

    footer.appendChild(returnToTop);
};