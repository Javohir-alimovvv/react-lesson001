import React from 'react';
import "./Header.css";
import logo from "../../assets/images/Escape.png"

const Header = () => {
    return (
        <>

            <header className="header_big">
                <div className="container">
                    <div className="header">
                        <nav className="header__top__content">
                            <a href="#"><img src={logo} alt="" /></a>
                            <ul className='header__content'>
                                <li className='header__content__item'><a href="#"><span>HOME</span></a></li>
                                <li className='header__content__item'><a href="#"><span>CATEGORIES</span></a></li>
                                <li className='header__content__item'><a href="#"><span>ABOUT</span></a></li>
                                <li className='header__content__item'><a href="#"><span>CONTACT</span></a></li>
                            </ul>
                        </nav>
                        <h2 className='header__top__text'>Let's do it together.</h2>
                        <h3 className='header__center__text'>We travel the world in search of stories. Come along for the ride.</h3>
                        <button className='header__btn'>View Latest Posts</button>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header