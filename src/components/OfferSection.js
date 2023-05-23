import OfferBox from '../components/OfferBox';
import offers from '../data/offers';
import '../style/OfferSection.css';

const OfferSection = () => {
    return (
        <section className="offer-section">
            <div className="container" id="offer-section">
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
