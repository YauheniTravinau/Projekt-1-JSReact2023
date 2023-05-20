import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../style/Navigation.css';

const Navigation = ({ isMenuOpen, handleMenuItemClick }) => {
    const [menuOpen, setMenuOpen] = useState(isMenuOpen);

    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState);
    };

    const handleClick = (sectionId) => {
        handleMenuItemClick(sectionId);
        if (sectionId === 'about-section') {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
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
                                <button type="button" onClick={() => handleClick('about-section')}>
                                    <a>O nas</a>
                                </button>
                            </li>
                            <li>
                                <button type="button" onClick={() => handleClick('offer-section')}>
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
                </div>
            </div>
        </header>
    );
};

export default Navigation;
