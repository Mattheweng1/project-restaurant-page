console.log('This build is workinggggggg!');

import './style.css';

import preLoadPage from './preLoadPage';
import loadHomePage from './loadHomePage.js';
import loadMenuPage from './loadMenuPage.js';

(() => {
    preLoadPage();
    loadHomePage();

    const homeTab = document.getElementById('homeTab');
    const menuTab = document.getElementById('menuTab');
    const contactTab = document.getElementById('contactTab');
    const body = document.getElementById('body');

    // Add event listeners to tabs

    const deleteChildren = (parent) => {
        let child = parent.firstElementChild;
        while (child) {
            parent.removeChild(child);
            child = parent.firstElementChild;
        }
    };

    homeTab.addEventListener('click', () => {
        deleteChildren(body);
        loadHomePage();
    });
    menuTab.addEventListener('click', () => {
        deleteChildren(body);
        loadMenuPage();
    });
    contactTab.addEventListener('click', () => {
        deleteChildren(body);
        loadContactPage();
    });

    
})();