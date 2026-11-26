import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    q: 'What cleaning services do you provide?',
    a: 'We offer a full range of professional cleaning services including Full Home Deep Cleaning, Kitchen Cleaning, Bathroom Cleaning, Sofa Cleaning, Floor Cleaning, Office Cleaning, Window Cleaning, and Move-In/Out Cleaning.',
  },
  {
    q: 'Do you serve Visakhapatnam?',
    a: 'Yes! We are based in Visakhapatnam and serve all major areas including MVP Colony, Madhurawada, Dwaraka Nagar, Seethammadhara, Rushikonda, Gajuwaka, and more.',
  },
  {
    q: 'Can I book home deep cleaning?',
    a: 'Absolutely! Our Full Home Deep Cleaning service covers every room, corner, and surface in your home. You can book by calling or WhatsApp-ing us at 8886012126.',
  },
  {
    q: 'Do you provide office cleaning?',
    a: 'Yes, we provide comprehensive commercial and office cleaning services. We offer one-time, weekly, and monthly packages to keep your workplace spotless and hygienic.',
  },
  {
    q: 'How do I book your services?',
    a: 'Booking is easy! Simply call us at 8886012126 or send a WhatsApp message. You can also fill out the contact form on this page. We\'ll respond within minutes to confirm your booking.',
  },
  {
    q: 'Are your products safe for kids and pets?',
    a: 'Yes, we use certified eco-friendly, non-toxic cleaning products that are completely safe for children, pets, and people with allergies. The environment and your family\'s health are our top priority.',
  },
  {
    q: 'Which areas in Vizag do you cover?',
    a: 'We cover all major areas in Visakhapatnam including but not limited to: MVP Colony, Madhurawada, Rushikonda, Dwaraka Nagar, Seethammadhara, Gajuwaka, Bheemunipatnam, Steel Plant, and surrounding localities.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="faq" id="faq">
      <div className="container faq__inner">
        <div className="faq__left">
          <div className="faq__sticky">
            <span className="section-chip">FAQ</span>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="faq__desc">
              Have questions about our cleaning services? We've answered the most common ones below. Can't find your answer?
            </p>
            <a
              href="https://wa.me/918886012126?text=Hello%2C%20I%20have%20a%20question%20about%20your%20cleaning%20services."
              target="_blank"
              rel="noreferrer"
              className="btn-wa"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Ask on WhatsApp
            </a>
          </div>
        </div>

        <div className="faq__right">
          {faqs.map((item, i) => (
            <div
              className={`faq__item${open === i ? ' faq__item--open' : ''}`}
              key={i}
            >
              <button
                className="faq__q"
                onClick={() => setOpen(open === i ? -1 : i)}
              >
                <span>{item.q}</span>
                <span className="faq__icon">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && (
                <div className="faq__a">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
