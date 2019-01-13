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

const addAccordionTrigger = (triggerId, triggerToggleId, accordionId) => {
    const trigger = document.getElementById(triggerId);
    if (trigger !== null) {
        trigger.addEventListener('click',
            () => onAccordionTrigger(true, accordionId, triggerId, triggerToggleId));
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
    // should definitely refactor with functions
    addAccordionTrigger('btn-view-design-process', 'btn-close-design-process', 'accordion-design-process');
    addAccordionTrigger('btn-close-design-process', 'btn-view-design-process', 'accordion-design-process');
    addAccordionTrigger('btn-view-development-process', 'btn-close-development-process', 'accordion-development-process');
    addAccordionTrigger('btn-close-development-process', 'btn-view-development-process', 'accordion-development-process');
})();
