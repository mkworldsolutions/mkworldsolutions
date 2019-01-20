import React from 'react';

const ContactForm = () => (
    <section className='quote-wrapper' id='quote-wrapper'>
        <div className='content-max-container'>
            <div className='quote-heading-wrapper'>
                <div className='quote-heading'>Get to work</div>
                <div className='quote-subheading'>To get started, request a free quote below.</div>
            </div>
        </div>
        <div className='homepage-client-actions quote-form'>
            <div id="mc_embed_signup">
                <form
                    action="https://websitesbymario.us13.list-manage.com/subscribe/post?u=2a10e2d1e9a72c53f5659f50c&amp;id=15d233650f"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    novalidate
                >
                    <div id="mc_embed_signup_scroll">
                        <div className='signup-row clear'>
                            <div className="mc-field-group">
                                <div className='field-spacer'>
                                    <label for="mce-NAME" className='label-signup'>Enter Name <span className="asterisk">*</span>
                                    </label>
                                    <input placeholder='Enter Name' type="text" value="" name="NAME" className="required textbox-signup"
                                        id="mce-NAME"></input>
                                </div>
                            </div>
                            <div className="mc-field-group">
                                <div className='field-spacer'>
                                    <label for="mce-EMAIL" className='label-signup'>Enter Email <span className="asterisk">*</span>
                                    </label>
                                    <input placeholder='Enter Email' type="email" value="" name="EMAIL" className="required email textbox-signup"
                                        id="mce-EMAIL"></input>
                                </div>
                            </div>
                        </div>
                        <div className="mc-field-group field-group-desc">
                            <label for="mce-HELP" className='label-signup'>Enter Brief Description Of Needs <span
                                className="asterisk">*</span>
                            </label>
                            <input placeholder='Enter Description' type="text" value="" name="HELP" className="required textbox-signup"
                                id="mce-HELP"></input>
                        </div>
                        <div id="mce-responses" className="clear">
                            <div className="response" id="mce-error-response" style="display:none"></div>
                            <div className="response" id="mce-success-response" style="display:none"></div>
                        </div>

                        <div style="position: absolute; left: -5000px;" aria-hidden="true">
                            <input type="text"
                                name="b_2a10e2d1e9a72c53f5659f50c_15d233650f" tabindex="-1" value="">
                            </input>
                        </div>
                        <div className="clear quote-action">
                            <input type="submit" value="Free quote" name="subscribe" id="mc-embedded-subscribe"
                                className="button btn btn-freeQuote"></input>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section >
);

export default ContactForm;