import './WhyChooseUs.css';

const reasons = [
  { icon: '👥', title: 'Professional Team', desc: 'Background-verified, trained professionals who treat your home with care and respect.' },
  { icon: '🔍', title: 'Detailed Cleaning', desc: 'We cover every corner — no surface is overlooked in our thorough cleaning process.' },
  { icon: '📅', title: 'Easy Booking', desc: 'Book in minutes via phone or WhatsApp. We work around your schedule.' },
  { icon: '🤝', title: 'Reliable Service', desc: 'We show up on time, every time. Our punctuality and consistency set us apart.' },
  { icon: '😊', title: 'Customer Satisfaction', desc: "100% satisfaction guarantee. If something isn't right, we come back and fix it free." },
  { icon: '🌿', title: 'Eco-Friendly Products', desc: 'Safe for children, pets, and the planet. We use certified eco-friendly cleaning solutions.' },
];

export default function WhyChooseUs() {
  return (
    <section className="why" id="why">
      <div className="container">
        <div className="why__header">
          <span className="why__chip">Why Zion?</span>
          <h2 className="why__title">Why Choose Zion?</h2>
          <p className="why__sub">We go beyond cleaning — we deliver trust, quality, and peace of mind with every visit.</p>
        </div>
        <div className="why__grid">
          {reasons.map((r, i) => (
            <div className="why__card" key={i}>
              <div className="why__card-icon">{r.icon}</div>
              <h3 className="why__card-title">{r.title}</h3>
              <p className="why__card-desc">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
