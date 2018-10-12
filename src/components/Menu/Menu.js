import React, { Component } from 'react';
import { xmlHttpRequestOnSuccess } from 'simply-requests';

class Menu extends Component {
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
        const { data, isLoaded, menuOpen } = this.state;

        if (!isLoaded) {
            return null;
        }

        return (
            <div className='header-padder clear'>
                <div className='sm-header-actions'>
                    <button className='btn-sm-menu-toogle' onClick={this.toggleMenu} type='button'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'>
                            <path d='M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z' />
                        </svg>
                    </button>
                </div>
                <div className='header-wrapper'>
                    <a href='/'>
                        <img src='images/logo.png' alt='MK World Solutions' className='header-logo-img' />
                    </a>
                </div>
                <div className={`menu-wrapper${menuOpen ? ' open' : ''}`}>
                    <ul className='menu clear'>
                        {
                            data.links.map(link => (
                                <li className='menu-item' key={link.name}>
                                    <a href={link.url} className='menu-link'>
                                        {link.name}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='sm-menu-actions'>
                        <button className='btn-close-sm-menu' onClick={this.toggleMenu} type='button'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
                                <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z' />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
