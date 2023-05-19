import React from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import EmployeeSection from './components/EmployeeSection';
import OfferSection from './components/OfferSection';
import Footer from './components/Footer';
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
        <div>
            <Navigation
                isMenuOpen={isMenuOpen}
                toggleMenu={toggleMenu}
                handleMenuItemClick={handleMenuItemClick}
            />
            <Header handleMenuItemClick={handleMenuItemClick} />
            <EmployeeSection>
                {employees.map((employee) => (
                    <EmployeeRow
                        key={employee.id}
                        name={employee.name}
                        surname={employee.surname}
                        position={employee.position}
                        description={employee.description}
                        photo={employee.photo}
                        isRightAligned={false}
                    />
                ))}
            </EmployeeSection>
            <OfferSection>
                {offers.map((offer) => (
                    <OfferBox
                        key={offer.id}
                        isNew={offer.isNew}
                        title={offer.title}
                        description={offer.description}
                    />
                ))}
            </OfferSection>
            <Footer />
        </div>
    );
};

export default App;
