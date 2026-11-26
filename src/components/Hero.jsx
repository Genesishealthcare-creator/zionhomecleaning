import { useState, useEffect, useCallback } from 'react';
import './Hero.css';

const slides = [
  {
    id: 1,
    tag: '⭐ Visakhapatnam\'s #1 Cleaning Service',
    h1a: 'A Cleaner Home.',
    h1b: 'A Happier Life.',
    h1c: '',
    sub: 'Professional home & commercial cleaning services in Visakhapatnam. Trusted by 500+ families across the city.',
    img: 'https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=1400&q=90&auto=format&fit=crop',
    imgAlt: 'Professional home cleaner Visakhapatnam',
    accent: '#269B65',
  },
  {
    id: 2,
    tag: '🏠 Complete Home Cleaning Solutions',
    h1a: 'Spotless Spaces.',
    h1b: 'Happy Families.',
    h1c: '',
    sub: 'From deep cleaning to kitchen & bathroom sanitisation — we handle it all with trained professionals and eco-friendly products.',
    img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=90&auto=format&fit=crop',
    imgAlt: 'Deep home cleaning service Vizag',
    accent: '#65B6E8',
  },
  {
    id: 3,
    tag: '🌿 Eco-Friendly & Safe Products',
    h1a: 'Clean & Green.',
    h1b: 'Safe for Your',
    h1c: 'Family.',
    sub: 'We use only certified eco-friendly, non-toxic cleaning products that are safe for your children, pets and the environment.',
    img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1400&q=90&auto=format&fit=crop',
    imgAlt: 'Eco-friendly cleaning Visakhapatnam',
    accent: '#269B65',
  },
];

const stats = [
  { value: '500+', label: 'Happy Clients' },
  { value: '5★',   label: 'Google Rating' },
  { value: '2025', label: 'Est. Year' },
  { value: '100%', label: 'Satisfaction' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // Auto-play every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  const scrollTo = (id) => document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="hero">
      {/* Background images — preload all, only show current */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className={`hero__bg-img ${i === current ? 'active' : ''} ${animating ? 'fade' : ''}`}
        >
          <img src={s.img} alt={s.imgAlt} />
          <div className="hero__bg-overlay" />
        </div>
      ))}

      {/* Main content */}
      <div className="container hero__inner">
        <div className={`hero__content ${animating ? 'hero__content--out' : 'hero__content--in'}`}>

          {/* Tag badge */}
          <div className="hero__tag">
            <span className="hero__tag-dot" />
            {slide.tag}
          </div>

          {/* Heading */}
          <h1 className="hero__h1">
            <span className="hero__h1-line">{slide.h1a}</span>
            <span className="hero__h1-line hero__h1-accent">{slide.h1b}</span>
            {slide.h1c && <span className="hero__h1-line">{slide.h1c}</span>}
          </h1>

          {/* Subtitle */}
          <p className="hero__sub">{slide.sub}</p>

          {/* CTAs */}
          <div className="hero__actions">
            <button className="hero__btn-book" onClick={() => scrollTo('#contact')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.3">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book Your Service
            </button>
            <a href="https://wa.me/918886012126" target="_blank" rel="noreferrer" className="hero__btn-wa">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Call: 8886012126
            </a>
          </div>

          {/* Stats */}
          <div className="hero__stats">
            {stats.map((s, i) => (
              <div className="hero__stat" key={i}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider controls */}
      <button className="hero__arrow hero__arrow--prev" onClick={prev} aria-label="Previous slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
      </button>
      <button className="hero__arrow hero__arrow--next" onClick={next} aria-label="Next slide">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="hero__counter">
        <span className="hero__counter-current">{String(current + 1).padStart(2, '0')}</span>
        <span className="hero__counter-sep">/</span>
        <span className="hero__counter-total">{String(slides.length).padStart(2, '0')}</span>
      </div>

      {/* Floating trust badge */}
      <div className="hero__trust-badge">
        <div className="hero__trust-icon">🏆</div>
        <div className="hero__trust-text">
          <strong>Trusted Since 2025</strong>
          <span>500+ Happy Clients · Visakhapatnam</span>
        </div>
      </div>

      {/* Scroll hint */}
      <button className="hero__scroll-hint" onClick={() => scrollTo('#trust')} aria-label="Scroll down">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
    </section>
  );
}
