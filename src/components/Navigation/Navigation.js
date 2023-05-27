import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../components/Navigation/Navigation.css';

const Navigation = ({ isMenuOpen }) => {
    const [menuOpen, setMenuOpen] = useState(isMenuOpen);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <h3>My Project</h3>
                <div className="menu-container">
                    <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    <div className={`menu-items ${menuOpen ? 'open' : ''}`}>
                        <ul>
                            <li>
                                <a href="#employees-section" className="active">
                                    O nas
                                </a>
                            </li>
                            <li>
                                <a href="#offer-section">Oferta</a>
                            </li>
                            <li>
                                <a href="#contact-section" className="disabled">
                                    Kontakt
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navigation;
