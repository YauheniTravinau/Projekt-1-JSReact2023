import '../components/OfferBox/OfferBox.css';

const OfferBox = ({ isNew, title, description }) => {
    return (
        <div className="offer-box">
            {isNew && (
                <div className="new-dot">
                    <span className="new-dot-text">Nowość</span>
                </div>
            )}
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    );
};

export default OfferBox;
