import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

function Navbar () {
    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    return (
        <nav>
            <ul>
                <li><Link
                    className="link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={scrollToTop}
                >Home</Link></li>
                <li><Link
                    className="link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><Link
                    className="link"
                    activeClass="active"
                    to="work"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Work</Link></li>
                <li><Link
                    className="link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;