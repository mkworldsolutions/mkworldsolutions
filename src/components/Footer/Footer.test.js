import React from 'react';
import { mount, shallow, render } from 'enzyme';

import { Footer } from '.';

const footerInitSnap = render(<Footer />);
const footerMountSnap = mount(<Footer />);
const footerShallowSnap = shallow(<Footer />);

describe('Footer component', () => {
    describe('Initial Render', () => {
        it('Renders correctly', () => {
            expect(footerInitSnap.find(Footer)).toMatchSnapshot();
        });
    });

    describe('Mount Render', () => {
        it('Renders correctly', () => {
            expect(footerMountSnap.find(Footer)).toMatchSnapshot();
        });
    });

    describe('Shallow Render', () => {
        it('Renders correctly', () => {
            expect(footerShallowSnap.find(Footer)).toMatchSnapshot();
        });
    });
});
