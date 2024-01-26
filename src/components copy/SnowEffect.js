import React, { useEffect } from 'react';
import Particles from 'particles.js';

const SnowEffect = () => {
  useEffect(() => {
    Particles.init({
      selector: '.snow',
      color: '#ffffff',
      connectParticles: true,
      sizeVariations: 5,
      maxParticles: 100,
      speed: 0.5,
      responsive: [
        {
          breakpoint: 768,
          options: {
            maxParticles: 50,
          },
        },
        {
          breakpoint: 425,
          options: {
            maxParticles: 25,
          },
        },
      ],
    });
  }, []);

  return <div className="snow" />;
};

export default SnowEffect;
