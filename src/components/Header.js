import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Logo from '../assets/images/Logo.png';

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <img href={Logo} />
            </section>
        )
    }
}

export default Header
