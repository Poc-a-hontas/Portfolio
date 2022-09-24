//import { NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaLinkedin, FaInstagram } from "react-icons/fa";
import {useRef} from "react";
import "../index.css";


function NavBar() {
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
      };
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (
        <header>
            <nav ref={navRef}>
                <a href="/" end>Home</a>
                <a href="/about">About</a>
                <a href="/gallery">Gallery</a>
                <button className="nav-btn nav-close-btn" onClick={showNavBar}><FaTimes/></button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}><FaBars/></button>
            <div className="social-icon">
                <button className="some-btn" onClick={()=> openInNewTab('https://www.linkedin.com/in/katerina-kolarova-b4549514a/')}><FaLinkedin/></button>
                <button className="some-btn" onClick={()=> openInNewTab('https://www.instagram.com/_chaos_is_my_middle_name/')}><FaInstagram/></button>
            </div>
        </header>
    );
}

export default NavBar;

