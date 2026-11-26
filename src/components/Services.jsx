import './Services.css';

const services = [
  {
    icon: '🏠',
    name: 'Full Home Deep Cleaning',
    desc: 'Comprehensive top-to-bottom deep cleaning for your entire home. Leave every corner spotless.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=500&q=85&auto=format&fit=crop',
  },
  {
    icon: '🍳',
    name: 'Kitchen Cleaning',
    desc: 'Professional degreasing and sanitization of your kitchen surfaces, appliances and fixtures.',
    img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=85&auto=format&fit=crop',
  },
  {
    icon: '🚿',
    name: 'Bathroom Cleaning',
    desc: 'Deep scrubbing, tile grout cleaning, and full sanitization for sparkling clean bathrooms.',
    img: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=85&auto=format&fit=crop',
  },
  {
    icon: '🛋️',
    name: 'Sofa Cleaning',
    desc: 'Fabric sofa steam cleaning and stain removal to restore freshness and hygiene.',
    img: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&q=85&auto=format&fit=crop',
  },
  {
    icon: '✨',
    name: 'Floor Cleaning',
    desc: 'Professional mopping, polishing and restoration of all floor types including marble and tiles.',
    img: 'https://images.unsplash.com/photo-1563453392212-326f5e854473?w=500&q=85&auto=format&fit=crop',
  },
  {
    icon: '🏢',
    name: 'Office Cleaning',
    desc: 'Complete commercial and office cleaning services keeping your workspace pristine and productive.',
    img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=85&auto=format&fit=crop',
  },
  {
    icon: '🪟',
    name: 'Window Cleaning',
    desc: 'Crystal-clear window cleaning for homes and offices using streak-free, eco-safe solutions.',
    img: 'https://images.unsplash.com/photo-1527515637462-cff94edd0218?w=500&q=85&auto=format&fit=crop',
  },
  {
    icon: '📦',
    name: 'Move-In/Out Cleaning',
    desc: 'Complete move-in or move-out cleaning to ensure your property is spotless for new occupants.',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=85&auto=format&fit=crop',
  },
];

export default function Services() {
  const handleEnquire = (name) => {
    const msg = encodeURIComponent(`Hello! I'm interested in your ${name} service. Please share more details.`);
    window.open(`https://wa.me/918886012126?text=${msg}`, '_blank');
  };

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__header">
          <span className="section-chip">Our Services</span>
          <h2 className="section-title">Professional Cleaning Solutions</h2>
          <p className="section-sub">
            From homes to offices, we deliver spotless results with eco-friendly products and trained professionals.
          </p>
        </div>
        <div className="services__grid">
          {services.map((s, i) => (
            <div className="service-card" key={i}>
              <div className="service-card__img-wrap">
                <img src={s.img} alt={s.name} className="service-card__img" loading="lazy" />
                <span className="service-card__badge">{s.icon}</span>
              </div>
              <div className="service-card__body">
                <h3 className="service-card__name">{s.name}</h3>
                <p className="service-card__desc">{s.desc}</p>
                <button className="service-card__btn" onClick={() => handleEnquire(s.name)}>
                  Enquire Now →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
