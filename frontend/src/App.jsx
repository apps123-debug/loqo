
import { useState } from "react";
import {
  Search,
  MapPin,
  ArrowRight,
  Plus,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Menu,
  X,
} from "lucide-react";
import "./App.css";

const items = [
  {
    id: 1,
    name: "Black Backpack",
    category: "Bags & Accessories",
    location: "Main Library",
    status: "Lost",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=700",
  },
  {
    id: 2,
    name: "Wireless Earbuds",
    category: "Electronics",
    location: "College Canteen",
    status: "Found",
    image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=700",
  },
  {
    id: 3,
    name: "Water Bottle",
    category: "Personal Items",
    location: "Computer Lab",
    status: "Found",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=700",
  },
  {
    id: 4,
    name: "Wrist Watch",
    category: "Accessories",
    location: "Sports Ground",
    status: "Lost",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700",
  },
];

function App() {
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const filteredItems = items.filter((item) =>
    `${item.name} ${item.category} ${item.location}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const scrollToItems = () => {
    document.getElementById("explore")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="app">
      {/* NAVBAR */}
      <header className="navbar">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <MapPin size={25} />
          </span>
          <span>LOQO<span className="brand-dot">.</span></span>
        </a>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#explore" onClick={() => setMenuOpen(false)}>Explore Items</a>
          <a href="#how-it-works" onClick={() => setMenuOpen(false)}>How it Works</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        </nav>

        <div className="nav-actions">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">
            Get Started <ArrowRight size={16} />
          </button>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <div className="hero-tag">
              <Sparkles size={15} />
              SMART CAMPUS LOST & FOUND
            </div>

            <h1>
              Lost something?
              <span>Let's find it.</span>
            </h1>

            <p className="hero-description">
              Your belongings deserve to find their way back.
              Discover a smarter, simpler way to reconnect
              lost items with their owners.
            </p>

            <div className="hero-search">
              <Search size={21} />
              <input
                type="text"
                placeholder="What are you looking for?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button onClick={scrollToItems}>Search</button>
            </div>

            <div className="hero-buttons">
              <button
                className="primary-btn"
                onClick={() => alert("Report Lost page coming soon!")}
              >
                <Plus size={18} /> Report Lost Item
              </button>

              <button
                className="secondary-btn"
                onClick={() => alert("Report Found page coming soon!")}
              >
                <PackageSearch size={18} /> Report Found Item
              </button>
            </div>

            <div className="trust-note">
              <ShieldCheck size={17} />
              <span>Built for your campus community</span>
            </div>
          </div>

          {/* THREE-IMAGE HERO COLLAGE */}
          <div className="hero-collage">
            <div className="collage-main">
              <img
                src="/images/campus.jpg"
                alt="Green university campus"
              />
              <div className="collage-main-label">
                <span>MADE FOR CAMPUS LIFE</span>
                <strong>Your campus, connected.</strong>
              </div>
            </div>

            <div className="collage-side">
             <div className="collage-card belongings-card">
  <img
    src="/images/belongings.jpg"
    alt="Everyday belongings that can get lost on campus"
  />
  <span className="collage-label">LOST SOMETHING?</span>
</div>

             <div className="collage-card reunion-card">
  <img
    src="/images/reunion.jpg"
    alt="Students together on campus"
  />
  <span className="collage-label">BACK WHERE IT BELONGS</span>
</div>
            </div>

            <div className="collage-sticker">
              <ShieldCheck size={19} />
              <span>
                <strong>Lost. Found.</strong>
                <small>Reconnected.</small>
              </span>
            </div>
          </div>
        </section>

        {/* STATS STRIP */}
        <section className="stats-strip">
          <div>
            <strong>01</strong>
            <span>Report an item</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Find possible matches</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Reconnect & recover</span>
          </div>
        </section>

        {/* RECENTLY REPORTED ITEMS */}
        <section className="items-section" id="explore">
          <div className="section-heading">
            <div>
              <span className="eyebrow">THE COMMUNITY BOARD</span>
              <h2>Recently reported items</h2>
              <p>Take a look. Your missing item might be here.</p>
            </div>

            <button className="view-all-btn">
              Explore all items <ArrowRight size={17} />
            </button>
          </div>

          <div className="items-grid">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <article className="item-card" key={item.id}>
                  <div className="item-image">
                    <img src={item.image} alt={item.name} loading="lazy" />
                    <span className={`status ${item.status.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="item-info">
                    <span className="item-category">{item.category}</span>
                    <h3>{item.name}</h3>
                    <p>
                      <MapPin size={15} />
                      {item.location}
                    </p>
                    <button className="item-link">
                      View details <ArrowRight size={15} />
                    </button>
                  </div>
                </article>
              ))
            ) : (
              <p className="no-results">
                No items found. Try another search.
              </p>
            )}
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="how-section" id="how-it-works">
          <div className="how-heading">
            <span className="eyebrow">SIMPLE AS 1, 2, 3</span>
            <h2>How LOQO works</h2>
            <p>Getting your belongings back shouldn't be complicated.</p>
          </div>

          <div className="steps-grid">
            <div className="step-card">
              <div className="step-icon">
                <PackageSearch size={27} />
              </div>
              <span>01</span>
              <h3>Report an item</h3>
              <p>
                Share a photo and a few details about the item
                you've lost or found.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">
                <Sparkles size={27} />
              </div>
              <span>02</span>
              <h3>Find smart matches</h3>
              <p>
                Our intelligent matching system helps identify
                potentially matching reports.
              </p>
            </div>

            <div className="step-card">
              <div className="step-icon">
                <ShieldCheck size={27} />
              </div>
              <span>03</span>
              <h3>Reconnect safely</h3>
              <p>
                Verify ownership and get your belongings back
                through a secure process.
              </p>
            </div>
          </div>
        </section>

        {/* CALL TO ACTION */}
        <section className="cta-section" id="about">
          <div>
            <span className="eyebrow">
              A LITTLE HELP GOES A LONG WAY
            </span>
            <h2>Found something? Be someone's hero.</h2>
            <p>One small report could make someone's entire day.</p>
          </div>

          <button
            className="cta-btn"
            onClick={() => alert("Report Found page coming soon!")}
          >
            Report a Found Item <ArrowRight size={18} />
          </button>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-icon">
            <MapPin size={23} />
          </span>
          <span>LOQO<span className="brand-dot">.</span></span>
        </a>

        <p>Find what matters. Return what belongs.</p>
        <span>© 2026 LOQO. Made for campus communities.</span>
      </footer>
    </div>
  );
}

export default App;
