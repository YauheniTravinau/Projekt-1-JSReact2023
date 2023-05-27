import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../Footer/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
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
    );
};

export default Footer;
