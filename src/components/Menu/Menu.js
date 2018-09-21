import React, { Component } from 'react';
import { xmlHttpRequestOnSuccess } from 'simply-requests';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount = () => {
        xmlHttpRequestOnSuccess('/data/menu.json', this.handleMenuData);
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
            <div className='header-padder clear'>
                <div className='header-wrapper'>
                    <svg width="322px" height="34px" viewBox="0 0 322 34">
                        <g id="MK-Website" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" fontFamily="AppleGothic" font-size="36" font-weight="normal" letter-spacing="-0.2411765">
                            <g id="Home-Screen" transform="translate(-25.000000, -27.000000)">
                                <g id="Header">
                                    <g id="Logo" transform="translate(24.000000, 24.000000)">
                                        <text id="MK|World-Solutions-Copy">
                                            <tspan x="0" y="32" fill="#E8ECF3">MK</tspan>
                                            <tspan x="55.461647" y="32" fill="#4884B7">|</tspan>
                                            <tspan x="73.2204705" y="32" fill="#E8ECF3">World Solutions</tspan>
                                        </text>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </div>
                <div className='menu-wrapper'>
                    <ul className='menu clear'>
                        {
                            data.links.map(link => (
                                <li className='menu-item'>
                                    <a href={link.url} className='menu-link'>
                                        {link.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div >
        )
    }
}

export default Menu;
