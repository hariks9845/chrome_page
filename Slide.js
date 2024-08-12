
import React, { useState } from 'react';
import './Slide.css';

function Slide() {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    'Slide 1 Content',
    'Slide 2 Content',
    'Slide 3 Content'
  ];

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="slides">
      <button onClick={prevSlide} className="prev">←</button>
      <div className="slide-content">
        {slides[activeSlide]}
      </div>
      <button onClick={nextSlide} className="next">→</button>
    </div>
  );
}

export default Slide;