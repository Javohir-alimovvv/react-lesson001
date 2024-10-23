import React from 'react'
import './Footer.css'
import footer__logo from '../../assets/images/Escape.png'

const Footer = () => {
    return (
        <>
            <div className='footer__big'>
                <div className='footer'>
                    <div className="container">
                        <section className="contact">
                            <h3 className="contact_list">Stay in Touch</h3>
                            <form className="form">
                                <input className="email" type="email" placeholder="Enter your email address" required />
                                <button className="contact_btn">Submit</button>
                            </form>
                        </section>
                    </div>
                </div>

                <footer className="footer_content">

                    <div className="container">
                        <div className='footer__content'>
                            <a href="#">
                                <img className="foo_logo" src={footer__logo} alt="foo_logo" />
                            </a>
                            <div className="footer_list">
                                <p className="footer_item">Home</p>
                                <p className="footer_item">Categories</p>
                                <p className="footer_item">About</p>
                                <p className="footer_item">Contact</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}

export default Footer