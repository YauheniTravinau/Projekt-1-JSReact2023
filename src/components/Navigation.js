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
                                <button type="button" onClick={() => handleMenuItemClick('about-section')}>
                                    <a>O nas</a>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => handleMenuItemClick('offer-section')}>
                                    <a>Oferta</a>
                                </button>
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
