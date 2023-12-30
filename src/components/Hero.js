import React, { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const TEXTS = ['Construcción', 'Proyectos', 'Innovación', 'Eficiencia'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // cada 3 segundos
    );
    return () => clearInterval(intervalId);
  }, []);

  return (
    
      <hero class="bg-dark">
      <section class="text-white">
        <div className='title-container'>
          <h1>Obras |Polarsystem</h1>
            <div className='animate-box'>
              <span><TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition></span>
            </div>
        </div>
          <div>
          </div>
              <p>Expertos en seguridad, privacidad y decoración con films. Soluciones térmicas personalizadas. Garantía, ventas mayoristas disponibles.</p>
      </section>
    </hero>
  );
};

export default Hero;