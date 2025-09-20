const Testimonials = () => {
  return (
    <section className="testimonials">
      <video
        className="background-video"
        src="/assets/video3.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="testimonials-container flex-column-mobile">
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " He trabajado con Fabián en múltiples proyectos, debo destacar su buen trabajo y compromiso con ello, intentando siempre mejorar el producto final. "
              </span>
              <span className="person">Lizbeth Loayza</span>
              <span className="job">Raices sostenibles</span>
            </p>
            <img src="assets/testimonials/testimonial-1.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
        {/* TESTIMONIAL ITEM STARTS */}
        <div className="quote-container animated-layer fade-in-right-animation fadeInUp wow">
          <div>
            <p>
              <span className="quote">
                " Tener a Fabián en el equipo durante el período que estuvo trabajando fue de lo mas grato, siempre enfrentando los desafíos incluso desconocidos para él y para el equipo, comprometido y atento a las críticas constructivas. "
              </span>
              <span className="person">Lucas de la Fuente</span>
              <span className="job">Umine</span>
            </p>
            <img src="assets/testimonials/testimonial-2.jpg" alt="" />
          </div>
        </div>
        {/* TESTIMONIAL ITEM ENDS */}
      </div>
      <img
        alt=""
        className="z-1 hide-mobile opposite-separator"
        src="assets/separator-opposite.png"
      />
    </section>
  );
};
export default Testimonials;
