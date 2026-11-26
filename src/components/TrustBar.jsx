import './TrustBar.css';

const items = [
  { icon: '✅', text: 'Background Checked Staff' },
  { icon: '🌿', text: 'Eco-Friendly Products' },
  { icon: '💯', text: 'Satisfaction Guaranteed' },
  { icon: '📅', text: 'Flexible Scheduling' },
  { icon: '🏆', text: '5-Star Rated Service' },
];

export default function TrustBar() {
  return (
    <div className="trustbar">
      <div className="container trustbar__inner">
        {items.map((item, i) => (
          <div key={i} className="trustbar__group">
            <div className="trustbar__item">
              <span className="trustbar__icon">{item.icon}</span>
              <span className="trustbar__text">{item.text}</span>
            </div>
            {i < items.length - 1 && <span className="trustbar__divider"></span>}
          </div>
        ))}
      </div>
    </div>
  );
}
