import React, { Component } from 'react';
import { xmlHttpRequestOnSuccess } from 'simply-requests';

import Menu from './Menu';

class MenuInit extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false,
            menuOpen: false
        };
    }

    componentDidMount = () => {
        xmlHttpRequestOnSuccess('/data/menu.json', this.handleMenuData);
    }

    toggleMenu = () => {
        const { menuOpen } = this.state;
        this.setState({
            menuOpen: !menuOpen
        });
    }

    // helpers
    handleMenuData = (response) => {
        const menuJSON = JSON.parse(response.response);
        this.setState({
            data: menuJSON,
            isLoaded: Object.keys(menuJSON).length > 0
        });
    }

    render() {
        const { data, isLoaded } = this.state;

        if (!isLoaded) {
            return null;
        }

        return (
            <Menu data={data} />
        );
    }
}

export default MenuInit;
