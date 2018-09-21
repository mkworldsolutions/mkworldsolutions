import React, { Component } from 'react';
import { xmlHttpRequestOnSuccess } from 'simply-requests';

class Footer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoaded: false
        }
    }

    componentDidMount = () => {
        xmlHttpRequestOnSuccess('/data/footer.json', this.handleFooterData);
    }

    handleFooterData = (response) => {
        const footerJSON = JSON.parse(response.response);
        this.setState({
            data: footerJSON,
            isLoaded: Object.keys(footerJSON).length > 0
        })
    }

    render() {
        const { data, isLoaded } = this.state;
        if (!isLoaded) {
            return null;
        }

        return (
            <div className='footer-wrapper clear'>
                {
                    Object.keys(data).map((sectionKey) => {
                        const section = data[sectionKey];
                        return (
                            <div className='footer-section' key={section.name}>
                                <div className='footer-heading'>
                                    <a href={section.url} className='footer-heading-link'>
                                        {section.name}
                                    </a>
                                </div>
                                <div className='footer-divider'></div>
                                <div className='footer-section-sub'>
                                    <ul className='footer-section-list'>
                                        {
                                            section.subs.map((subitem) => {
                                                return (
                                                    <li className='footer-section-listitem' key={subitem.name}>
                                                        {subitem.name}
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Footer;