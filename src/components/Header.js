const Header = () => {
  return (
    <header>
      {/* Desktop Menu Starts */}
      <div className="header-inner hide-mobile">
        {/* MENU STARTS */}
        <div className="menu">
          <nav>
            <ul>
              <li>
                <span className="active" id="home-link">
                  Inicio
                </span>
              </li>
              <li>
                <span id="about-link">Sobre mí</span>
              </li>
              <li>
                <span id="portfolio-link">Portafolio</span>
              </li>
              <li>
                <span id="contact-link">Contacto</span>
              </li>
              <li>
                <span id="blog-link">Extras</span>
              </li>
            </ul>
          </nav>
        </div>
        {/* MENU ENDS */}
        {/* FREELANCE STARTS */}
        <div className="mail">
          <p>
            Email :<span> fabianeriosm@gmail.com</span>
          </p>
        </div>
        {/* FREELANCE ENDS */}
      </div>
      {/* Desktop Menu Ends */}
      {/* Mobile Menu Starts */}
      <nav className="mobile-menu">
        <div id="menuToggle">
          <input type="checkbox" id="checkboxmenu" />
          <span />
          <span />
          <span />
          <ul className="list-unstyled" id="menu">
            <li>
              <a href="#home">
                <span>Inicio</span>
              </a>
            </li>
            <li>
              <a href="#my-photo">
                <span>Sobre mí</span>
              </a>
            </li>
            <li>
              <a href="#portfolio">
                <span>Portafolio</span>
              </a>
            </li>
            <li>
              <a href="#contact">
                <span>Contacto</span>
              </a>
            </li>
            <li>
              <a href="#blog">
                <span>Extra</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu Ends */}
    </header>
  );
};
export default Header;
