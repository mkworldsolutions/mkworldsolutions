import React from 'react';
import { mount, shallow, render } from 'enzyme';
import { Menu } from '.';

const menuInitSnap = render(<Menu />);
const menuMountSnap = mount(<Menu />);
const menuShallowSnap = shallow(<Menu />);

describe('Footer component', () => {
    describe('Initial Render', () => {
        it('Renders correctly', () => {
            expect(menuInitSnap.find(Menu)).toMatchSnapshot();
        });
    });

    describe('Mount Render', () => {
        it('Renders correctly', () => {
            expect(menuMountSnap.find(Menu)).toMatchSnapshot();
        });
    });

    describe('Shallow Render', () => {
        it('Renders correctly', () => {
            expect(menuShallowSnap.find(Menu)).toMatchSnapshot();
        });
    });
});
