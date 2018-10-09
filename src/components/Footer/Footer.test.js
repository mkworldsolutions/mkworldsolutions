import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './Footer';

const footerInitSnap = () => (
    renderer.create(
        <Footer />
    )
);

describe('Footer component', () => {
    describe('Initial Render', () => {
        it('Renders correctly', () => {
            console.log('renders:', footerInitSnap().toJSON());
            expect(footerInitSnap().toJSON()).toMatchSnapshot()
        });
    });
});
