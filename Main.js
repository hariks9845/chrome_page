import React from 'react';
import './Main.css';

function Main() {
  return (
    <section className="main-section">
      <img
        src="https://www.pngkit.com/png/full/226-2260678_icone-google-chrome-png-google-chrome-logo-hd.png" // Replace with the desired image URL
        alt="Chrome Browser"
        className="chrome-image"
      />
      <h1>The browser built to be yours</h1>
      <p>Fast, secure, and built for the modern web.</p>
      <button className="download-btn">Download Chrome</button>
    </section>
  );
}

export default Main;
