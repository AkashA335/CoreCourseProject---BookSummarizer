import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import headphoneImage from '../assets/headphone.png'; // Import the image

const Home = () => {
  const navigate = useNavigate();

  const handleConvertClick = () => {
    navigate("/upload"); // Navigate to the Upload page
  };

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Grind</h1>
        <ul className="nav-links">
          <li onClick={() => navigate("/")}>Home</li>
          <li>
            <a
              href="https://github.com/Grind1508/CoreCourseProject---BookSummarizer"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Grind1508"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <section className="content">
        <div className="text-section">
          <h1 className="title">BOOK SUMMARIZER</h1>
          <p className="description">
            Have a PDF but no time to sit and read through it? Just upload your document, 
            and we’ll convert it into a quick, clear audio summary. Whether you're commuting, 
            working out, or just relaxing, you can now absorb the key points of your book hands-free, 
            anytime, anywhere.
          </p>
          <button className="convert-button" onClick={handleConvertClick}>
            Convert
          </button>
        </div>
        <div className="emoji-section">
          <img src={headphoneImage} alt="Headphone" className="emoji-image" /> {/* Image instead of emoji */}
        </div> 
      </section>

      <footer className="footer">© 2025 Grind</footer>
    </div>
  );
};

export default Home;
