import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import EmployeeSection from './components/EmployeeSection/EmployeeSection';
import OfferSection from './components/OfferSection/OfferSection';
import Footer from './components/Footer/Footer';
import './styles.css';

const App = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

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
        <div>
            <Navigation
                isMenuOpen={isMenuOpen}
                handleMenuToggle={toggleMenu}
            />
            <Header handleMenuItemClick={handleMenuItemClick} />
            <EmployeeSection id="employees-section" />
            <OfferSection id="offer-section" />
            <Footer />
        </div>
    );
};

export default App;
