import { useState } from 'react';
import './Testimonials.css';

const reviews = [
  {
    stars: 5,
    quote: "Zion Home Cleaning exceeded all my expectations! They deep cleaned my entire flat before Dussehra and it looked brand new. The team was professional, punctual, and very thorough. Highly recommend!",
    name: "Priya Sharma",
    location: "MVP Colony, Visakhapatnam",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    stars: 5,
    quote: "Outstanding service! Booked a full kitchen and bathroom deep clean via WhatsApp and within 2 hours the team arrived. The bathroom tiles are gleaming like never before. Worth every rupee!",
    name: "Ravi Kumar",
    location: "Madhurawada, Visakhapatnam",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    stars: 5,
    quote: "We used Zion for our office cleaning on a weekly basis. The staff is courteous, they use eco-friendly products (safe for our staff), and pricing is very transparent. Absolutely brilliant service!",
    name: "Anjali Reddy",
    location: "Dwaraka Nagar, Visakhapatnam",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80&auto=format&fit=crop&crop=face",
  },
  {
    stars: 5,
    quote: "Called them for move-out cleaning of my rented house. They did a spectacular job — landlord was impressed and returned the full deposit! Super professional team. Will definitely use again.",
    name: "Suresh Babu",
    location: "Seethammadhara, Visakhapatnam",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80&auto=format&fit=crop&crop=face",
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <div className="testimonials__header">
          <span className="section-chip">Reviews</span>
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="testimonials__rating">
            <div className="testimonials__stars">★★★★★</div>
            <span className="testimonials__rating-text"><strong>4.9/5</strong> from 200+ reviews</span>
          </div>
        </div>
        <div className="testimonials__grid">
          {reviews.map((r, i) => (
            <div
              className={`review-card${active === i ? ' review-card--active' : ''}`}
              key={i}
              onClick={() => setActive(i)}
            >
              <div className="review-card__stars">
                {'★'.repeat(r.stars)}
              </div>
              <p className="review-card__quote">"{r.quote}"</p>
              <div className="review-card__footer">
                <img src={r.img} alt={r.name} className="review-card__avatar" loading="lazy" />
                <div>
                  <div className="review-card__name">{r.name}</div>
                  <div className="review-card__loc">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
