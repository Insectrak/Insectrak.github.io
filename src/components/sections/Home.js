import React from 'react';
import CanvasAnimation from './CanvasAnimation'; // Importación del componente

const Home = () => {
  return (
    <section className="home image" id="home">
      <CanvasAnimation />
      <video
        className="background-video"
        src="/assets/home.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div>
        <div className="position-relative">
          <h1>
            <span>
              <span className="animated-layer">
                Fabián<span>.</span>
              </span>
            </span>
            <span className="position-relative">
              <span className="animated-layer">Ríos</span>
              <span className="intro animated-layer">
                FullStack Developer con 5 años de experiencia trabajando en desarrollo web.
              </span>
            </span>
            <span>
              {/*<span className="animated-layer">¡Un gusto!</span> */}
            </span>
          </h1>
        </div>
      </div>
      {/* CALL TO ACTION STARTS */}
      <span className="animated-layer animated-btn cta" id="cta">
        <span></span>
      </span>
      {/* CALL TO ACTION ENDS */}
    </section>
  );
};
export default Home;
