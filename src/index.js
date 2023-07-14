console.log('This build is workinggggggg!');

import './style.css';

import preLoad from './pre-load';
import homeLoad from './home-page.js';
import menuLoad from './menu-page.js';

(() => {
    preLoad();
    homeLoad();

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
        homeLoad();
    });
    menuTab.addEventListener('click', () => {
        deleteChildren(body);
        menuLoad();
    });
    contactTab.addEventListener('click', () => {
        deleteChildren(body);
        contactLoad();
    });

    
})();