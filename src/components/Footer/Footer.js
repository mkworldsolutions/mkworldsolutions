import React from 'react';
import { CookiesToast } from '..'

const Footer = () => {
    const SvgLocation = () => (
        <svg width='16px' height='20px' viewBox='0 0 16 20'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(-130.000000, -2621.000000)' fill='#D2D3DC' fillRule='nonzero'>
                    <g transform='translate(0.000000, 2519.000000)'>
                        <g transform='translate(124.000000, 98.000000)'>
                            <g>
                                <g>
                                    <g transform='translate(6.000000, 4.000000)'>
                                        <path d='M8,9.5 C6.42204357,9.5 5.14285714,8.38071187 5.14285714,7 C5.14285714,6.33695878 5.44387669,5.70107399 5.97969491,5.23223305 C6.51551314,4.7633921 7.2422386,4.5 8,4.5 C9.57795643,4.5 10.8571429,5.61928813 10.8571429,7 C10.8571429,7.66304122 10.5561233,8.29892601 10.0203051,8.76776695 C9.48448686,9.2366079 8.7577614,9.5 8,9.5 Z M8,0 C3.581722,-1.33226763e-15 1.26882631e-16,3.13400675 -8.8817842e-16,7 C1.26882631e-16,12.25 8,20 8,20 C8,20 16,12.25 16,7 C16,3.13400675 12.418278,4.4408921e-16 8,0 Z' />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    const SvgEmail = () => (
        <svg width='16px' height='12px' viewBox='0 0 16 12'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(-130.000000, -2661.000000)' fill='#D2D3DC' fillRule='nonzero'>
                    <g transform='translate(0.000000, 2519.000000)'>
                        <g transform='translate(124.000000, 98.000000)'>
                            <g transform='translate(0.000000, 36.000000)'>
                                <g>
                                    <g transform='translate(6.000000, 8.000000)'>
                                        <path d='M14.4,3 L8,6.75 L1.6,3 L1.6,1.5 L8,5.25 L14.4,1.5 L14.4,3 Z M14.4,0 L1.6,0 C0.712,0 0,0.6675 0,1.5 L0,10.5 C0,11.3284271 0.7163444,12 1.6,12 L14.4,12 C15.2836556,12 16,11.3284271 16,10.5 L16,1.5 C16,0.6675 15.28,0 14.4,0 Z' />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    const SvgPhone = () => (
        <svg width='16px' height='16px' viewBox='0 0 16 16'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(-130.000000, -2695.000000)' fill='#D2D3DC'>
                    <g transform='translate(0.000000, 2519.000000)'>
                        <g transform='translate(124.000000, 98.000000)'>
                            <g transform='translate(0.000000, 72.000000)'>
                                <g>
                                    <g transform='translate(6.000000, 6.000000)'>
                                        <path d='M3.21777778,6.92444444 C4.49777778,9.44 6.56,11.5022222 9.07555556,12.7822222 L11.0311111,10.8266667 C11.28,10.5777778 11.6266667,10.5066667 11.9377778,10.6044444 C12.9333333,10.9333333 14,11.1111111 15.1111111,11.1111111 C15.6020309,11.1111111 16,11.5090802 16,12 L16,15.1111111 C16,15.6020309 15.6020309,16 15.1111111,16 C6.76547489,16 1.67767035e-15,9.23452511 8.8817842e-16,0.888888889 C9.86864911e-17,0.653140898 0.0936505248,0.427048531 0.260349528,0.260349528 C0.427048531,0.0936505248 0.653140898,3.94745964e-16 0.888888889,0 L4,0 C4.49091978,0 4.88888889,0.397969111 4.88888889,0.888888889 C4.88888889,2 5.06666667,3.06666667 5.39555556,4.06222222 C5.49333333,4.37333333 5.42222222,4.72 5.17333333,4.96888889 L3.21777778,6.92444444 Z' />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    const SvgLinkedIn = () => (
        <svg width='16px' height='16px' viewBox='0 0 16 16'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(-650.000000, -2701.000000)' fill='#D2D3DC' fillRule='nonzero'>
                    <g transform='translate(0.000000, 2519.000000)'>
                        <g transform='translate(644.000000, 92.000000)'>
                            <g transform='translate(0.000000, 84.000000)'>
                                <g transform='translate(6.000000, 6.000000)'>
                                    <path d='M16,16 L12.4444444,16 L12.4444444,10 C12.4444444,9.05777778 11.3866667,8.27555556 10.4444444,8.27555556 C9.50222222,8.27555556 8.88888889,9.05777778 8.88888889,10 L8.88888889,16 L5.33333333,16 L5.33333333,5.33333333 L8.88888889,5.33333333 L8.88888889,7.11111111 C9.47555556,6.16 10.9866667,5.54666667 12,5.54666667 C14.2222222,5.54666667 16,7.36 16,9.55555556 L16,16 Z M3.55555556,16 L0,16 L0,5.33333333 L3.55555556,5.33333333 L3.55555556,16 Z M1.77777778,0 C2.75961733,0 3.55555556,0.795938223 3.55555556,1.77777778 C3.55555556,2.75961733 2.75961733,3.55555556 1.77777778,3.55555556 C0.795938223,3.55555556 0,2.75961733 0,1.77777778 C0,0.795938223 0.795938223,0 1.77777778,0 Z' />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    const SvgInstagram = () => (
        <svg width='16px' height='16px' viewBox='0 0 16 16'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(-686.000000, -2701.000000)' fill='#D2D3DC' fillRule='nonzero'>
                    <g transform='translate(0.000000, 2519.000000)'>
                        <g transform='translate(644.000000, 92.000000)'>
                            <g transform='translate(36.000000, 84.000000)'>
                                <g transform='translate(6.000000, 6.000000)'>
                                    <path d='M4.64,0 L11.36,0 C13.92,0 16,2.08 16,4.64 L16,11.36 C16,13.9226012 13.9226012,16 11.36,16 L4.64,16 C2.08,16 0,13.92 0,11.36 L0,4.64 C-1.77635684e-16,2.07739876 2.07739876,7.10542736e-16 4.64,0 Z M4.48,1.6 C2.88941992,1.6 1.6,2.88941992 1.6,4.48 L1.6,11.52 C1.6,13.112 2.888,14.4 4.48,14.4 L11.52,14.4 C13.1105801,14.4 14.4,13.1105801 14.4,11.52 L14.4,4.48 C14.4,2.888 13.112,1.6 11.52,1.6 L4.48,1.6 Z M12.2,2.8 C12.7522847,2.8 13.2,3.24771525 13.2,3.8 C13.2,4.35228475 12.7522847,4.8 12.2,4.8 C11.6477153,4.8 11.2,4.35228475 11.2,3.8 C11.2,3.24771525 11.6477153,2.8 12.2,2.8 Z M8,4 C10.209139,4 12,5.790861 12,8 C12,10.209139 10.209139,12 8,12 C5.790861,12 4,10.209139 4,8 C4,5.790861 5.790861,4 8,4 Z M8,5.6 C6.6745166,5.6 5.6,6.6745166 5.6,8 C5.6,9.3254834 6.6745166,10.4 8,10.4 C9.3254834,10.4 10.4,9.3254834 10.4,8 C10.4,6.6745166 9.3254834,5.6 8,5.6 Z' />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    const SvgMaps = () => (
        <svg width='16px' height='16px' viewBox='0 0 16 16'>
            <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
                <g transform='translate(-722.000000, -2701.000000)' fill='#D2D3DC' fillRule='nonzero'>
                    <g transform='translate(0.000000, 2519.000000)'>
                        <g transform='translate(644.000000, 92.000000)'>
                            <g transform='translate(72.000000, 84.000000)'>
                                <g transform='translate(6.000000, 6.000000)'>
                                    <path d='M10.5263158,3.42857143 C10.5263158,3.8552381 10.6947368,4.22095238 11.0147368,4.51809524 C11.3263158,4.8152381 11.7221053,4.95238095 12.2105263,4.95238095 C12.6736842,4.95238095 13.0526316,4.8152381 13.3978947,4.51809524 C13.7263158,4.22095238 13.8947368,3.8552381 13.8947368,3.42857143 C13.8947368,3.0247619 13.7263158,2.66666667 13.3810526,2.35428571 C13.0526316,2.04952381 12.6315789,1.9047619 12.2105263,1.9047619 C11.7473684,1.9047619 11.3684211,2.04952381 11.0315789,2.35428571 C10.7031579,2.66666667 10.5263158,3.0247619 10.5263158,3.42857143 Z M16,3.42857143 C16,4.19047619 15.6715789,5.09714286 15.04,6.14095238 C14.4084211,7.19238095 13.7768421,8.04571429 13.1452632,8.71619048 L12.2105263,9.71428571 C11.9073684,9.43238095 11.5536842,9.05904762 11.1326316,8.60952381 C10.7115789,8.15238095 10.1473684,7.36761905 9.45684211,6.24761905 C8.75789474,5.12761905 8.42105263,4.19047619 8.42105263,3.42857143 C8.42105263,2.47619048 8.77473684,1.66857143 9.51578947,0.998095238 C10.2484211,0.335238095 11.1410526,0 12.2105263,0 C13.2463158,0 14.1473684,0.335238095 14.88,0.998095238 C15.6210526,1.66857143 16,2.47619048 16,3.42857143 Z M15.1578947,8.82285714 L15.1578947,14.4761905 C15.1578947,14.8571429 14.9894737,15.2380952 14.6442105,15.5352381 C14.3157895,15.847619 13.8947368,16 13.4736842,16 L1.68421053,16 C1.26315789,16 0.842105263,15.847619 0.513684211,15.5352381 C0.168421053,15.2380952 0,14.8571429 0,14.4761905 L0,3.80952381 C0,3.42857143 0.168421053,3.04761905 0.513684211,2.75047619 C0.842105263,2.43809524 1.26315789,2.28571429 1.68421053,2.28571429 L6.90526316,2.28571429 C6.80421053,2.76571429 6.73684211,3.14666667 6.73684211,3.42857143 C6.73684211,4.3352381 7.10736842,5.40190476 7.81473684,6.62857143 C8.53052632,7.84761905 9.12842105,8.76190476 9.60842105,9.30285714 C10.1052632,9.86666667 10.5515789,10.3466667 10.9726316,10.7504762 L12.2105263,11.9619048 L13.4736842,10.7504762 C14.5431579,9.52380952 15.1073684,8.86857143 15.1578947,8.82285714 Z M5.05263158,11.047619 L5.05263158,12.1066667 L6.94736842,12.1066667 C6.73684211,12.952381 6.10526316,13.3561905 5.05263158,13.3561905 C4.47157895,13.3561905 3.98315789,13.1657143 3.59578947,12.7847619 C3.2,12.4038095 2.99789474,11.9542857 2.99789474,11.4285714 C2.99789474,10.9028571 3.2,10.4533333 3.59578947,10.072381 C3.98315789,9.69142857 4.47157895,9.50095238 5.05263158,9.50095238 C5.60842105,9.50095238 6.05473684,9.65333333 6.39157895,9.96571429 L7.30105263,9.18095238 C6.66947368,8.6552381 5.93684211,8.38095238 5.09473684,8.38095238 L5.05263158,8.38095238 C4.13473684,8.38095238 3.34315789,8.69333333 2.68631579,9.28761905 C2.02947368,9.88190476 1.68421053,10.5980952 1.68421053,11.4285714 C1.68421053,12.2590476 2.02947368,12.9752381 2.68631579,13.5695238 C3.34315789,14.1638095 4.13473684,14.4761905 5.05263158,14.4761905 C6.02947368,14.4761905 6.81263158,14.1942857 7.40210526,13.6457143 C8,13.0971429 8.28631579,12.3809524 8.28631579,11.4971429 C8.28631579,11.2838095 8.27789474,11.1314286 8.25263158,11.047619 L5.05263158,11.047619 Z' />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );

    return (
        <div className='footer-wrapper'>
            <div className='footer-desktop clear'>
                <div className='footer-section'>
                    <ul className='footer-list'>
                        <li className='footer-listitem'>
                            <i className='footer-listitem-icon-wrapper'>
                                <SvgLocation />
                            </i>
                            <span className='footer-listitem-details'>Salt Lake City, Utah</span>
                        </li>
                        <li className='footer-listitem'>
                            <a href='mailto:hello@mkworldsolutions.com' className='footer-listitem-link'>
                                <i className='footer-listitem-icon-wrapper'>
                                    <SvgEmail />
                                </i>
                            </a>
                            <span className='footer-listitem-details'>hello@mkworldsolutions.com</span>
                        </li>
                        <li className='footer-listitem'>
                            <a href='tel:8018715813' className='footer-listitem-link'>
                                <i className='footer-listitem-icon-wrapper'>
                                    <SvgPhone />
                                </i>
                            </a>
                            <span className='footer-listitem-details'>(801) 871-5813</span>
                        </li>
                    </ul>
                </div>
                <div className='footer-section'>
                    <div className='footer-heading'>
                        <img src='images/logo.png' alt='MK World Solutions' className='header-logo-img' />
                    </div>
                    <div className='footer-subheading'>Your well-being is our well-being</div>
                    <div className='footer-section'>
                        <ul className='footer-list-row clear'>
                            <li className='footer-listitem'>
                                <a href='https://www.linkedin.com/company/mkworldsolutions' target='_blank' rel='noopener' className='footer-listitem-link'>
                                    <i className='footer-listitem-icon-wrapper'>
                                        <SvgLinkedIn />
                                    </i>
                                </a>
                            </li>
                            <li className='footer-listitem'>
                                <a href='https://www.instagram.com/mkworldsolutions/' target='_blank' rel='noopener' className='footer-listitem-link'>
                                    <i className='footer-listitem-icon-wrapper'>
                                        <SvgInstagram />
                                    </i>
                                </a>
                            </li>
                            <li className='footer-listitem'>
                                <i className='footer-listitem-icon-wrapper'>
                                    <SvgMaps />
                                </i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='footer-mobile'>
                <div className='footer-heading'>
                    <img src='images/logo.png' alt='MK World Solutions' className='header-logo-img' />
                </div>
                <div className='footer-subheading'>Your well-being is our well-being</div>
                <div className='footer-section'>
                    <ul className='footer-list-row clear'>
                        <li className='footer-listitem'>
                            <a href='https://www.linkedin.com/company/mkworldsolutions' target='_blank' rel='noopener' className='footer-listitem-link'>
                                <i className='footer-listitem-icon-wrapper'>
                                    <SvgLinkedIn />
                                </i>
                            </a>
                        </li>
                        <li className='footer-listitem'>
                            <a href='https://www.instagram.com/mkworldsolutions/' target='_blank' rel='noopener' className='footer-listitem-link'>
                                <i className='footer-listitem-icon-wrapper'>
                                    <SvgInstagram />
                                </i>
                            </a>
                        </li>
                        <li className='footer-listitem'>
                            <i className='footer-listitem-icon-wrapper'>
                                <SvgMaps />
                            </i>
                        </li>
                        <li className='footer-listitem'>
                            <a href='mailto:hello@mkworldsolutions.com' className='footer-listitem-link'>
                                <i className='footer-listitem-icon-wrapper'>
                                    <SvgEmail />
                                </i>
                            </a>
                        </li>
                        <li className='footer-listitem'>
                            <a href='tel:8018715813' className='footer-listitem-link'>
                                <i className='footer-listitem-icon-wrapper'>
                                    <SvgPhone />
                                </i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className='footer-subheading'>Salt Lake City, Utah</div>
            </div>
            <CookiesToast />
        </div>        
    );
};

export default Footer;
