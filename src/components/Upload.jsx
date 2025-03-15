import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Upload.css";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files.length > 0) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => {
    setDragActive(false);
  };

  const handleUpload = async () => {
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    try {
      const res = await axios.post(
        import.meta.env.VITE_API_GATEWAY_URL, // Use Vite's environment variable
        formData
      );
      setAudioUrl(res.data.audioUrl);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  return (
    <div className="upload-container">
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
            >
              About
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Grind1508"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>

      {/* Upload Section */}
      <div className="upload-content">
        <h2>Book to Audio Summarizer</h2>

        <div
          className={`drop-area ${dragActive ? "active" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
        >
          <p>Drag & Drop your PDF here or click to select a file</p>
          <input
            id="fileInput"
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>

        {file && <p className="file-name">{file.name}</p>}

        <button onClick={handleUpload} disabled={loading || !file}>
          {loading ? "Processing..." : "Upload & Convert"}
        </button>

        {audioUrl && (
          <div className="audio-section">
            <h4>Summary Audio:</h4>
            <audio controls src={audioUrl}></audio>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="footer">© 2025 Grind</footer>
    </div>
  );
};

export default Upload;
