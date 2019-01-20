import React from 'react';
import { render } from 'react-dom';
import { callbackAtElementSurface } from 'scroll-callback';

import { Footer, Menu } from '../components';

function showHomepageService(el) {
    el.classList.add('open');
}

const show = (el) => {
    el.classList.remove('hide');
};

const hide = (el) => {
    el.classList.add('hide');
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

    document.getElementById(hideElementId).classList.add('fade');
    document.getElementById(showElementId).classList.remove('fade');
};

const addAccordionTrigger = (shouldShowAccordion, triggerId, triggerToggleId, accordionId) => {
    const trigger = document.getElementById(triggerId);
    if (trigger !== null) {
        trigger.addEventListener('click',
            () => onAccordionTrigger(shouldShowAccordion, accordionId, triggerId, triggerToggleId));
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
    addAccordionTrigger(true, 'btn-view-design-process', 'btn-close-design-process', 'accordion-design-process');
    addAccordionTrigger(false, 'btn-close-design-process', 'btn-view-design-process', 'accordion-design-process');
    addAccordionTrigger(true, 'btn-view-development-process', 'btn-close-development-process', 'accordion-development-process');
    addAccordionTrigger(false, 'btn-close-development-process', 'btn-view-development-process', 'accordion-development-process');
})();
