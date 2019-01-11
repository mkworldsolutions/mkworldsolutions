import React from 'react';
import { render } from 'react-dom';
import { callbackAtElementSurface } from 'scroll-callback';

import { Menu, Footer } from '../components';

function showHomepageService(el) {
    el.classList.add('open');
}

const show = (el) => {
    el.classList.add('show');
};

const hide = (el) => {
    el.classList.remove('show');
};

const showAccordion = (accordionContainerId) => {
    show(document.getElementById(accordionContainerId));
};

const hideAccordion = (accordionContainerId) => {
    hide(document.getElementById(accordionContainerId));
};

const onAccordionTrigger = (isShow, accordionContainerId) => {
    if (isShow) {
        showAccordion(accordionContainerId);
    } else {
        hideAccordion(accordionContainerId);
    }
};

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

    // events
    document.getElementById('btn-view-design-process').addEventListener('click', () => onAccordionTrigger(true, 'accordion-design-process'));
    document.getElementById('btn-close-design-process').addEventListener('click', () => onAccordionTrigger(false, 'accordion-design-process'));
    document.getElementById('btn-view-development-process').addEventListener('click', () => onAccordionTrigger(true, 'accordion-development-process'));
    document.getElementById('btn-close-development-process').addEventListener('click', () => onAccordionTrigger(false, 'accordion-development-process'));
})();
