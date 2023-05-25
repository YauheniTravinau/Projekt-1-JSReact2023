import OfferBox from '../components/OfferBox';
import offers from '../data/offers';
import '../components/OfferSection.css';

const OfferSection = () => {
    return (
        <section id="offer-section" className="offer-section">
            <div className="container">
                <h2>Lista ofert</h2>
                <div className="offer-grid">
                    {offers.map((offer) => (
                        <OfferBox
                            key={offer.id}
                            isNew={offer.isNew}
                            title={offer.title}
                            description={offer.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OfferSection;
