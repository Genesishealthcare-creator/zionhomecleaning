import './Footer.css';
import zionLogo from '../assets/zion logo.jpeg';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <div className="footer__logo-wrap">
            <img src={zionLogo} alt="Zion Home Cleaning" className="footer__logo" />
          </div>
          <p className="footer__tagline">Sparkling Spaces, Happy Faces.</p>
          <p className="footer__about">
            Zion Home Cleaning Services is Visakhapatnam's trusted professional cleaning company. We bring spotless cleanliness and peace of mind to every home.
          </p>
          <div className="footer__socials">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__social" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__social" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="footer__social" aria-label="YouTube">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer__social" aria-label="X">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Our Services</h4>
          <ul className="footer__links">
            <li><a href="#services">Full Home Deep Cleaning</a></li>
            <li><a href="#services">Kitchen Cleaning</a></li>
            <li><a href="#services">Bathroom Cleaning</a></li>
            <li><a href="#services">Sofa Cleaning</a></li>
            <li><a href="#services">Floor Cleaning</a></li>
            <li><a href="#services">Office Cleaning</a></li>
            <li><a href="#services">Move-In/Out Cleaning</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4 className="footer__col-title">Contact Us</h4>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__ci-icon">📞</span>
              <a href="tel:8886012126">8886012126</a>
            </li>
            <li>
              <span className="footer__ci-icon">💬</span>
              <a href="https://wa.me/918886012126" target="_blank" rel="noreferrer">WhatsApp: 8886012126</a>
            </li>
            <li>
              <span className="footer__ci-icon">📧</span>
              <a href="mailto:zionhomecleaning@gmail.com">zionhomecleaning@gmail.com</a>
            </li>
            <li>
              <span className="footer__ci-icon">📍</span>
              <span>MVP Colony, Visakhapatnam – 530017</span>
            </li>
            <li>
              <span className="footer__ci-icon">🕐</span>
              <span>Mon–Sat: 7AM – 7PM</span>
            </li>
          </ul>
          <a href="#contact" className="btn-green footer__cta-btn">
            Book Now →
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>© {year} Zion Home Cleaning Services. All rights reserved.</p>
          <div className="footer__bottom-links">
            <a href="#">Privacy Policy</a>
            <span>·</span>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
