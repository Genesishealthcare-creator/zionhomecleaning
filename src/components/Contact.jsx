import { useState } from 'react';
import './Contact.css';

const services = [
  'Full Home Deep Cleaning',
  'Kitchen Cleaning',
  'Bathroom Cleaning',
  'Sofa Cleaning',
  'Floor Cleaning',
  'Office Cleaning',
  'Window Cleaning',
  'Move-In/Out Cleaning',
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', area: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handle = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello Zion! I'd like to book a service.\n\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\nService: ${form.service}\nArea: ${form.area}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/918886012126?text=${msg}`, '_blank');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__header">
          <span className="section-chip">Get In Touch</span>
          <h2 className="section-title">Book Your Cleaning Service</h2>
          <p className="section-sub contact__sub">
            Fill out the form below or contact us directly. We'll get back to you within minutes.
          </p>
        </div>

        <div className="contact__inner">
          <div className="contact__info">
            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--navy">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 010 1.21 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              </div>
              <div>
                <div className="contact-card__label">Call Us</div>
                <a href="tel:8886012126" className="contact-card__value">8886012126</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </div>
              <div>
                <div className="contact-card__label">WhatsApp</div>
                <a href="https://wa.me/918886012126" target="_blank" rel="noreferrer" className="contact-card__value">8886012126</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--sky">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,12 2,6"/></svg>
              </div>
              <div>
                <div className="contact-card__label">Email</div>
                <a href="mailto:zionhomecleaning@gmail.com" className="contact-card__value">zionhomecleaning@gmail.com</a>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--green">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <div className="contact-card__label">Location</div>
                <div className="contact-card__value">MVP Colony, Visakhapatnam – 530017</div>
              </div>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon contact-card__icon--navy">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              </div>
              <div>
                <div className="contact-card__label">Working Hours</div>
                <div className="contact-card__value">Mon–Sat: 7AM – 7PM</div>
              </div>
            </div>

            <div className="contact__map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30459.37899695063!2d83.3184!3d17.7231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39431389e6973f%3A0x92d9c20395498468!2sVisakhapatnam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Zion Home Cleaning Location"
              ></iframe>
            </div>
          </div>

          <div className="contact__form-col">
            {submitted ? (
              <div className="contact__success">
                <div className="contact__success-icon">✅</div>
                <h3>Enquiry Sent!</h3>
                <p>Your booking request has been sent via WhatsApp. We'll confirm your appointment shortly!</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={submit}>
                <h3 className="contact__form-title">Book Your Service</h3>

                <div className="contact__row">
                  <div className="contact__field">
                    <label>Full Name *</label>
                    <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handle} required />
                  </div>
                  <div className="contact__field">
                    <label>Phone Number *</label>
                    <input type="tel" name="phone" placeholder="Your mobile number" value={form.phone} onChange={handle} required />
                  </div>
                </div>

                <div className="contact__field">
                  <label>Email Address</label>
                  <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handle} />
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label>Service Required *</label>
                    <select name="service" value={form.service} onChange={handle} required>
                      <option value="">Select a service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="contact__field">
                    <label>Area in Vizag</label>
                    <input type="text" name="area" placeholder="e.g. MVP Colony" value={form.area} onChange={handle} />
                  </div>
                </div>

                <div className="contact__field">
                  <label>Message</label>
                  <textarea name="message" rows="4" placeholder="Tell us more about what you need..." value={form.message} onChange={handle}></textarea>
                </div>

                <button type="submit" className="btn-green contact__submit">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Send My Enquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
