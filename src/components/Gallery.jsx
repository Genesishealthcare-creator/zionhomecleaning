import './Gallery.css';

const pairs = [
  {
    room: 'Kitchen',
    before: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=85&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1556909172-54557c7e4fb7?w=500&q=85&auto=format&fit=crop',
  },
  {
    room: 'Bathroom',
    before: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&q=85&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1620626011761-996317702782?w=500&q=85&auto=format&fit=crop',
  },
  {
    room: 'Living Room',
    before: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&q=85&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=85&auto=format&fit=crop',
  },
  {
    room: 'Office Space',
    before: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=85&auto=format&fit=crop',
    after: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?w=500&q=85&auto=format&fit=crop',
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header">
          <span className="section-chip">Our Work</span>
          <h2 className="section-title">Before &amp; After Gallery</h2>
          <p className="section-sub gallery__sub">
            See the Zion difference — real results from real homes and offices in Visakhapatnam.
          </p>
        </div>
        <div className="gallery__grid">
          {pairs.map((pair, i) => (
            <div className="gallery__pair" key={i}>
              <div className="gallery__pair-label">{pair.room}</div>
              <div className="gallery__pair-imgs">
                <div className="gallery__img-wrap">
                  <img src={pair.before} alt={`${pair.room} before cleaning`} className="gallery__img" loading="lazy" />
                  <span className="gallery__tag gallery__tag--before">Before</span>
                </div>
                <div className="gallery__img-wrap">
                  <img src={pair.after} alt={`${pair.room} after cleaning`} className="gallery__img" loading="lazy" />
                  <span className="gallery__tag gallery__tag--after">After</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
