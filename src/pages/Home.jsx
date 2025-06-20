import React from "react";
import { useNavigate } from "react-router-dom";

const featuredEvents = [
  {
    id: 1,
    title: "Music Concert",
    date: "2024-07-15",
    location: "City Hall",
    badge: "Popular",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 2,
    title: "Art Exhibition",
    date: "2024-08-01",
    location: "Art Gallery",
    badge: "New",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 3,
    title: "Tech Conference",
    date: "2024-09-10",
    location: "Convention Center",
    badge: "Sold Out",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 4,
    title: "Food Festival",
    date: "2024-10-05",
    location: "Central Park",
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 5,
    title: "Startup Pitch Night",
    date: "2024-11-12",
    location: "Tech Hub",
    badge: "Trending",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=900&q=80"
  },
  {
    id: 6,
    title: "Charity Run",
    date: "2024-12-01",
    location: "Riverside Park",
    badge: "Charity",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80"
  },
];

const testimonials = [
  {
    name: "Alex Kim",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "Booking my concert tickets was a breeze! The site is beautiful and easy to use.",
  },
  {
    name: "Maria Lopez",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    quote: "I love the event recommendations and the modern design. Highly recommended!",
  },
  {
    name: "James Smith",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg",
    quote: "The booking process is so smooth and the events are always top-notch.",
  },
];

const howItWorks = [
  {
    icon: "🔍",
    title: "Find Events",
    desc: "Browse and search for events that match your interests."
  },
  {
    icon: "🎟️",
    title: "Book Instantly",
    desc: "Reserve your spot in seconds with secure checkout."
  },
  {
    icon: "🎉",
    title: "Enjoy the Experience",
    desc: "Attend and have an unforgettable time!"
  },
];

const whyChooseUs = [
  {
    icon: "🛡️",
    title: "Secure Payments",
    desc: "Your data and payments are protected with top security."
  },
  {
    icon: "🌟",
    title: "Curated Events",
    desc: "Only the best and most exciting events, handpicked for you."
  },
  {
    icon: "💬",
    title: "24/7 Support",
    desc: "Our team is always here to help you, anytime."
  },
];

const latestNews = [
  {
    title: "Evently Launches New Mobile App",
    desc: "Book and manage your tickets on the go with our brand new mobile app for iOS and Android."
  },
  {
    title: "2024 Summer Festival Announced",
    desc: "Join us for a week of music, food, and fun at the annual Summer Festival. Early bird tickets available now!"
  },
  {
    title: "COVID-19 Safety Measures Updated",
    desc: "Read about our latest health and safety protocols to keep you safe at all events."
  },
];

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home-advanced">
      {/* Hero Section */}
      <section className="hero-modern gradient-bg">
        <div className="hero-modern-flex">
          <div className="hero-modern-content">
            <h1 className="hero-modern-title">Effortless Event Booking</h1>
            <p className="hero-modern-subtitle">Discover, book, and manage tickets for the best events around you. Simple. Secure. Seamless.</p>
            <a href="/events" className="hero-modern-cta">Browse Events</a>
          </div>
          <div className="hero-modern-illustration">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Event Illustration" />
          </div>
        </div>
        <svg className="hero-modern-wave" viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="url(#heroModernWave)" d="M0,80 C360,160 1080,0 1440,80 L1440,120 L0,120 Z"/><defs><linearGradient id="heroModernWave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse"><stop stopColor="#2563eb"/><stop offset="1" stopColor="#3b82f6"/></linearGradient></defs></svg>
      </section>
      <main className="home-main-advanced">
        {/* Featured Events */}
        <section className="section-advanced">
          <h2 className="section-advanced-title">Featured Events</h2>
          <div className="events-advanced-grid">
            {featuredEvents.slice(0, 6).map(event => (
              <div key={event.id} className="event-advanced-card" onClick={() => navigate(`/events/${event.id}`)}>
                <div className="event-advanced-img-wrap">
                  <img src={event.image} alt={event.title} className="event-advanced-img" />
                  <span className={`event-advanced-badge ${event.badge.toLowerCase().replace(' ', '-')}`}>{event.badge}</span>
                </div>
                <div className="event-advanced-body">
                  <h3 className="event-advanced-title">{event.title}</h3>
                  <p className="event-advanced-meta">{event.date} &middot; {event.location}</p>
                  <button className="event-advanced-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Newsletter Signup */}
        <section className="section-advanced newsletter-advanced-section">
          <h2 className="section-advanced-title">Stay Updated</h2>
          <form className="newsletter-advanced-form">
            <input className="newsletter-advanced-input" type="email" placeholder="Enter your email" />
            <button className="newsletter-advanced-btn" type="submit">Subscribe</button>
          </form>
        </section>
        {/* Testimonials */}
        <section className="section-advanced">
          <h2 className="section-advanced-title">What Our Users Say</h2>
          <div className="testimonials-advanced-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-advanced-card">
                <img src={t.avatar} alt={t.name} className="testimonial-advanced-avatar" />
                <p className="testimonial-advanced-quote">“{t.quote}”</p>
                <span className="testimonial-advanced-name">{t.name}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 