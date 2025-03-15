import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaFolderPlus, FaPlus, FaThLarge, FaList } from "react-icons/fa";
import '../Styles.css/SitesDashboard.css'; // Correct path to the CSS file

const SitesDashboard = () => {
  const [sites, setSites] = useState([]); // Store user sites
  const [view, setView] = useState("grid"); // Toggle between grid & list view
  const [search, setSearch] = useState(""); // Search input

  useEffect(() => {
    // Fetch sites from backend (Replace with your API call)
    fetch("http://localhost:5000/api/sites") 
      .then((res) => res.json())
      .then((data) => setSites(data))
      .catch((err) => console.error("Error fetching sites:", err));
  }, []);

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1 className="title">Sites</h1>
        <div className="view-toggle">
          <button className="view-button" onClick={() => setView("grid")}>
            <FaThLarge />
          </button>
          <button className="view-button" onClick={() => setView("list")}>
            <FaList />
          </button>
        </div>
      </div>

      {/* Search & Buttons */}
      <div className="search-buttons">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="action-buttons">
          <button className="create-folder-button">
            <FaFolderPlus /> Create New Folder
          </button>
          <button className="create-site-button">
            <FaPlus /> Create New Site
          </button>
        </div>
      </div>

      {/* Sites List */}
      <div className={view === "grid" ? "sites-grid" : "sites-list"}>
        {sites
          .filter((site) => site.name.toLowerCase().includes(search.toLowerCase()))
          .map((site) => (
            <Link
              to={`/site/${site.id}`}
              key={site.id}
              className="site-card"
            >
              <h2 className="site-title">{site.name}</h2>
              <p className="site-description">{site.description}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default SitesDashboard;
