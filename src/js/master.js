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

const onAccordionTrigger = (isShow, accordionContainerId, hideElementId, showElementId) => {
    if (isShow) {
        showAccordion(accordionContainerId);
    } else {
        hideAccordion(accordionContainerId);
    }

    document.getElementById(hideElementId).classList.add('hide');
    document.getElementById(showElementId).classList.remove('hide');
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
    // should definitely refactor with functions
    document.getElementById('btn-view-design-process').addEventListener('click', () => onAccordionTrigger(true, 'accordion-design-process', 'btn-view-design-process', 'btn-close-design-process'));
    document.getElementById('btn-close-design-process').addEventListener('click', () => onAccordionTrigger(false, 'accordion-design-process', 'btn-close-design-process', 'btn-view-design-process'));
    document.getElementById('btn-view-development-process').addEventListener('click', () => onAccordionTrigger(true, 'accordion-development-process', 'btn-view-development-process', 'btn-close-development-process'));
    document.getElementById('btn-close-development-process').addEventListener('click', () => onAccordionTrigger(false, 'accordion-development-process', 'btn-close-development-process', 'btn-view-development-process'));
})();
