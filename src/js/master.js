import React from 'react';
import { render } from 'react-dom';

import { Menu } from '../components';

(() => {
    const headerContainer = document.getElementById('header-container');
    if (headerContainer !== null) {
        render(
            <Menu />,
            headerContainer
        );
    }
})();
