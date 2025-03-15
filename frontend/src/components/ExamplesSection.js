import React, { useState, useEffect } from "react";
import "./ExamplesSection.css"; // Import the CSS file

const ExamplesSection = () => {
  const [examples, setExamples] = useState([]);
  const [filteredExamples, setFilteredExamples] = useState([]);
  const [activeCategory, setActiveCategory] = useState("all");
  const [loading, setLoading] = useState(false);

  // Sample data for portfolio examples
  const sampleData = [
    {
      id: 1,
      title: "Emma Wilson",
      description: "Designer",
      image: "https://cdn.portfoliobox.net/000_clients/000_org/examples/emmalouisewilson.jpg",
      link: "https://www.emmalouisewilson.com",
      category: "designer",
    },
    {
      id: 2,
      title: "IYU'S ROOM",
      description: "Designer",
      image: "https://cdn.portfoliobox.net/000_clients/000_org/examples/iyusroom.jpg",
      link: "https://www.iyusroom.com",
      category: "designer",
    },
    {
      id: 3,
      title: "Andy R Currie",
      description: "Designer",
      image: "https://cdn.portfoliobox.net/000_clients/000_org/examples/andrewrcurrie.jpg",
      link: "https://www.andrewrcurrie.com",
      category: "designer",
    },
    // Add more examples here
  ];

  // Simulate loading data from an API
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setExamples(sampleData);
      setFilteredExamples(sampleData);
      setLoading(false);
    }, 1000); // Simulate a 1-second delay
  }, []);

  // Handle category filtering
  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredExamples(examples);
    } else {
      const filtered = examples.filter((example) => example.category === category);
      setFilteredExamples(filtered);
    }
  };

  return (
    <section className="section-sample-sites">
      <div className="container">
        {/* Section Header */}
        <div className="parent-section-header">
          <h1 className="h1">Best Portfolio Examples</h1>
          <p className="subtitle">
            Explore some of the best portfolio examples created with Portfoliobox. Each website
            showcases the unique creativity and vision of its creator. Discover how to create your
            own <a href="/">portfolio</a>.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="sample-sites-categories">
          <button
            className={activeCategory === "all" ? "active" : ""}
            onClick={() => handleFilter("all")}
          >
            See All
          </button>
          <button
            className={activeCategory === "artist" ? "active" : ""}
            onClick={() => handleFilter("artist")}
          >
            Artists
          </button>
          <button
            className={activeCategory === "designer" ? "active" : ""}
            onClick={() => handleFilter("designer")}
          >
            Designers
          </button>
          <button
            className={activeCategory === "model" ? "active" : ""}
            onClick={() => handleFilter("model")}
          >
            Models
          </button>
          <button
            className={activeCategory === "photographer" ? "active" : ""}
            onClick={() => handleFilter("photographer")}
          >
            Photographers
          </button>
          <button
            className={activeCategory === "shop" ? "active" : ""}
            onClick={() => handleFilter("shop")}
          >
            Shops
          </button>
          <button
            className={activeCategory === "stylist" ? "active" : ""}
            onClick={() => handleFilter("stylist")}
          >
            Stylist
          </button>
        </div>

        {/* Portfolio Examples Grid */}
        <div className="sample-sites">
          {loading ? (
            <div className="spinner-overlay">
              <div className="spinner"></div>
            </div>
          ) : (
            filteredExamples.map((example) => (
              <div className="sample-site" key={example.id}>
                <a
                  className="sample-image-box"
                  href={example.link}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                >
                  <picture>
                    <source srcSet={`${example.image}@2x.webp`} type="image/webp" />
                    <source srcSet={`${example.image}@2x.jpg`} type="image/jpeg" />
                    <img
                      className="auto-height"
                      src={example.image}
                      alt={`Screenshot from ${example.link}`}
                      loading="lazy"
                    />
                  </picture>
                  <div className="dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
                <div className="sample-site-details">
                  <a href={example.link} target="_blank" rel="nofollow noopener noreferrer">
                    <span className="sample-site-title">{example.title}</span>
                  </a>
                  <span className="sample-site-description">{example.description}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;