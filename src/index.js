console.log('This build is workinggggggg!');

import './style.css';

import preLoadPage from './preLoadPage.js';
import loadHomePage from './loadHomePage.js';
import loadMenuPage from './loadMenuPage.js';
import loadContactPage from './loadContactPage.js';

(() => {
    preLoadPage();
    loadHomePage();

    const homeTab = document.getElementById('homeTab');
    const menuTab = document.getElementById('menuTab');
    const contactTab = document.getElementById('contactTab');
    const body = document.getElementById('body');
    const returnToTop = document.getElementById('returnToTop');

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
        window.scrollTo({
            top: 0
        });
        loadHomePage();
    });
    menuTab.addEventListener('click', () => {
        deleteChildren(body);
        window.scrollTo({
            top: 0
        });
        loadMenuPage();
    });
    contactTab.addEventListener('click', () => {
        deleteChildren(body);
        window.scrollTo({
            top: 0
        });
        loadContactPage();
    });

    returnToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
})();