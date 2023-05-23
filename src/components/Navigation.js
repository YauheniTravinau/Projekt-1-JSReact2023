import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../style/Navigation.css';

const Navigation = ({ isMenuOpen, handleMenuItemClick }) => {
    const [menuOpen, setMenuOpen] = useState(isMenuOpen);
    const [activeSection, setActiveSection] = useState('');

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

    const handleSectionChange = (sectionId) => {
        setActiveSection(sectionId);
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
                                <a
                                    href="#about-section"
                                    className={activeSection === 'about-section' ? 'active' : ''}
                                    onClick={() => {
                                        handleClick('about-section');
                                        handleSectionChange('about-section');
                                    }}
                                >
                                    O nas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#offer-section"
                                    className={activeSection === 'offer-section' ? 'active' : ''}
                                    onClick={() => {
                                        handleClick('offer-section');
                                        handleSectionChange('offer-section');
                                    }}
                                >
                                    Oferta
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#contact-section"
                                    className={`${
                                        activeSection === 'contact-section' ? 'active' : 'disabled'
                                    }`}
                                    onClick={() => handleClick('contact-section')}
                                    disabled
                                >
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
