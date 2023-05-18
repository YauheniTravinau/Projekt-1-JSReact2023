import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import OfferBox from './components/OfferBox';
import EmployeeRow from './components/EmployeeRow';
import offers from './data/offers';
import employees from './data/employees';
import './styles.css';

const App = () => {

    const [isMenuOpen, setMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    const handleMenuItemClick = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="container">
            <header className="header">
                <div className="header-content">
                    <h3>My Project</h3>
                    <div className={`menu-icon ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                    {isMenuOpen && (
                        <div className="menu-items">
                            <ul>
                                <li onClick={() => handleMenuItemClick('about-section')}>
                                    <button type="button">O nas</button>
                                </li>
                                <li onClick={() => handleMenuItemClick('offer-section')}>
                                    <button type="button">Oferta</button>
                                </li>
                                <li style={{ cursor: 'not-allowed' }}>
                                    <button type="button" disabled>Kontakt</button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </header>

            <section className="about-section" id="about-section">
                <div className="background-overlay">
                    <div className="about-content">
                        <h3 className="about-title">Nasza firma oferuje najwyższej jakości produkty.</h3>
                        <p className="about-subtitle">Nie wierz nam na słowo - sprawdź.</p>
                        <button className="about-button" onClick={() => handleMenuItemClick('offer-section')}>
                            Oferta
                        </button>
                    </div>
                </div>
            </section>

            <section className="employees-section">
                <h2>Lista pracownikow</h2>
                {employees.map((employee, index) => (
                    <EmployeeRow
                        key={employee.id}
                        name={employee.name}
                        surname={employee.surname}
                        position={employee.position}
                        description={employee.description}
                        photo={employee.photo}
                        isRightAligned={index === 1} // Второй работник будет выровнен справа и ниже
                    />
                ))}
            </section>

            <section className="offers-section" id="offer-section">
                <h2>Lista ofert</h2>
                <div className="offer-grid">
                    {offers.map((offer) => (
                        <OfferBox key={offer.id} isNew={offer.isNew} title={offer.title} description={offer.description} />
                    ))}
                </div>
            </section>

            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; {new Date().getFullYear()} My Project. All rights reserved.</p>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/FutureCollars" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} size="3x" className="icon" />
                        </a>
                        <a href="https://www.instagram.com/futurecollars/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="3x" className="icon" />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default App;

