import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__img-col">
          <div className="about__img-wrap">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=90&auto=format&fit=crop"
              alt="Clean, beautiful living room by Zion"
              className="about__img"
              loading="lazy"
            />
            <div className="about__img-border"></div>
            <div className="about__img-badge">
              <span>🏆</span>
              <div>
                <div className="about__badge-title">Trusted Since 2025</div>
                <div className="about__badge-loc">Visakhapatnam</div>
              </div>
            </div>
          </div>
          <div className="about__stats-row">
            <div className="about__stat">
              <span className="about__stat-num">500+</span>
              <span className="about__stat-label">Homes Cleaned</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">100%</span>
              <span className="about__stat-label">Satisfaction</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-num">5★</span>
              <span className="about__stat-label">Rating</span>
            </div>
          </div>
        </div>

        <div className="about__content">
          <span className="section-chip">About Us</span>
          <h2 className="section-title">Who We Are</h2>
          <p className="about__lead">
            Zion Home Cleaning Services is Visakhapatnam's premier professional cleaning company, founded in 2025 with a mission to bring spotless cleanliness and peace of mind to every home and office in the city.
          </p>
          <p className="about__body">
            Our team of trained, background-verified professionals uses eco-friendly, safe cleaning products to deliver outstanding results. We believe a clean space leads to a happier, healthier life — and that's exactly what we provide, every single visit.
          </p>

          <div className="about__boxes">
            <div className="about__box">
              <div className="about__box-label">Our Mission</div>
              <p>To make professional cleaning accessible to every family in Visakhapatnam, delivering consistent quality with honesty and care.</p>
            </div>
            <div className="about__box">
              <div className="about__box-label">Our Vision</div>
              <p>To become Andhra Pradesh's most trusted home cleaning brand — known for reliability, eco-friendly practices, and customer happiness.</p>
            </div>
          </div>

          <a href="#contact" className="btn-primary">
            Get a Free Quote →
          </a>
        </div>
      </div>
    </section>
  );
}
