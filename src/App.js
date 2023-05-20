import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import EmployeeSection from './components/EmployeeSection';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';


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
        <div>
            <Navigation
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                handleMenuItemClick={handleMenuItemClick}
            />
            <Header handleMenuItemClick={handleMenuItemClick} />
            <EmployeeSection />
            <OfferSection />
            <Footer />
        </div>
    );
};

export default App;
