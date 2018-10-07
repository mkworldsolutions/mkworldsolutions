import React from 'react';
import { render } from 'react-dom';
import { callbackAtElementSurface } from 'scroll-callback';

import { Menu, Footer } from '../components';

function bumpHomepageClient(el) {
    el.classList.add('bump');
}

function addCarouselEvent() {
    const homepageClient = document.getElementById('homepage-client-carousel');
    if (homepageClient !== null) {
        callbackAtElementSurface(bumpHomepageClient, 500, 'homepage-client-carousel');
    }
    window.removeEventListener('scroll', addCarouselEvent);
}

function showHomepageService(el) {
    el.classList.add('open');
}

(() => {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer !== null) {
        render(
            <Menu />,
            headerContainer
        );
    }

    const footerContainer = document.getElementById('footer-container');
    if (footerContainer !== null) {
        render(
            <Footer />,
            footerContainer
        );
    }

    const homepageService = document.getElementById('homepage-services');
    if (homepageService !== null) {
        callbackAtElementSurface(showHomepageService, 500, 'homepage-services');
    }
})();
