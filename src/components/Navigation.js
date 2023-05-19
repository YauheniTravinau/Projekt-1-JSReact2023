import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../style/Navigation.css';

const Navigation = ({ isMenuOpen, handleMenuItemClick }) => {
    const [menuOpen, setMenuOpen] = useState(isMenuOpen);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    return (
        <header className="header">
            <div className="container header-content">
                <h3>My Project</h3>
                <div className={`menu-icon ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} />
                </div>
                {menuOpen && (
                    <div className="menu-items">
                        <ul>
                            <li>
                                <a href="#about-section" onClick={() => handleMenuItemClick('about-section')}>
                                    O nas
                                </a>
                            </li>
                            <li>
                                <a href="#offer-section" onClick={() => handleMenuItemClick('offer-section')}>
                                    Oferta
                                </a>
                            </li>
                            <li style={{ cursor: 'not-allowed' }}>
                                <button type="button" disabled>
                                    Kontakt
                                </button>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Navigation;
