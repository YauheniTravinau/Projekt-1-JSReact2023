import '../components/Header.css';

const Header = ({ handleMenuItemClick }) => {
    return (
        <section id="employees-section" className="about-section photo-section">
            <div className="container">
                <div className="background-overlay">
                    <div className="about-content">
                        <h3 className="about-title">Nasza firma oferuje najwyższej jakości produkty.</h3>
                        <p className="about-subtitle">Nie wierz nam na słowo - sprawdź.</p>
                        <a href="#offer-section" className="about-button" onClick={() => handleMenuItemClick('offer-section')}>
                            Oferta
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;