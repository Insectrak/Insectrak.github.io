import Skills from '../skills';

const skills = [
  { id: 1, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", alt: "HTML5", level: "EXPERTO" },
  { id: 2, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", alt: "CSS3", level: "EXPERTO" },
  { id: 3, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", alt: "JavaScript", level: "EXPERTO" },
  { id: 4, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jquery/jquery-original.svg", alt: "JQuery", level: "EXPERTO" },
  { id: 5, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", alt: "Git", level: "EXPERTO" },
  { id: 6, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", alt: "React", level: "AVANZADO" },
  { id: 7, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/yii/yii-original.svg", alt: "Yii", level: "AVANZADO" },
  { id: 8, src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", alt: "Git", level: "BASICO" },
];

const chunkArray = (arr, size) => {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
};

const About = () => {

  const chunkedSkills = chunkArray(skills, 2);

  return (
    <section className="about main-section flex-column-mobile" id="about">
      {/* INFO HOLDER STARTS */}
      <div className="info flex-column-mobile">
        {/* IMAGE STARTS */}
        <div
          className="img-container animated-layer image-animation my-photo-container fadeInUp wow"
          data-wow-offset={200}
          id="my-photo"
        >
          <div>
            <div>
              <img className="my-photo" src="assets/p1.png" alt="" />
            </div>
          </div>
        </div>
        {/* IMAGE ENDS */}
        {/* INFO STARTS */}
        <div>
          <h2>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Fabián
              </span>
            </span>
            <span>
              <span className="animated-layer fade-in-up-animation fadeInUp wow">
                Ríos
              </span>
            </span>
          </h2>
          <div className="infos">
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Edad :</span>
                    <span>34 Años</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Nacionalidad :</span>
                    <span>Chileno</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Disponiblidad :</span>
                    <span>Inmediata</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Idiomas :</span>
                    <span>Español, Inglés</span>
                  </span>
                </span>
              </li>
            </ul>
            <ul>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Residencia :</span>
                    <span>Chile, Iquique</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Teléfono :</span>
                    <span>+56983949088</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Email :</span>
                    <span>fabianeriosm@gmail.com</span>
                  </span>
                </span>
              </li>
              <li>
                <span>
                  <span className="animated-layer fade-in-up-animation fadeInUp wow">
                    <span>Github :</span>
                    <a href="https://github.com/Insectrak">github/Insectrak</a>
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
        {/* INFO ENDS */}
      </div>
      {/* INFO HOLDER ENDS */}
      {/* SKILLS STARTS */}
      <div className="skills flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation fadeInUp wow">
                Mis habilidades
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        <div id="skills" className="skills-content container-fluid amg-skills">
          {chunkedSkills.map((badgePair, index) => (
              <div style={{placeContent:'center',}} key={index}> {/* Este es el div sin clase que necesitas */}
                 {badgePair.map(skill => (
                  <div key={skill.id} className="col-xs-3 amg-badge">
                     <Skills src={skill.src} alt={skill.alt} />
                     <h3>{skill.level}</h3>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>
      {/* SKILLS ENDS */}
      {/* RESUME STARTS */}
      <div className="resume flex-column-mobile">
        {/* TITLE STARTS */}
        <div className="custom-title fadeInUp wow">
          {/* MAIN TITLE STARTS */}
          <h3>
            <span>
              <span className="animated-layer fade-in-left-animation">
                Mi trayecto
              </span>
            </span>
          </h3>
          {/* MAIN TITLE ENDS */}
        </div>
        {/* TITLE ENDS */}
        {/* TIMELINE STARTS */}
        <div className="timeline">
          <ol className="animated-layer fade-in-animation">
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>QA Lead</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2022-2024</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Umine</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="experience">
                  <h4>Developer Fullstack</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2021 - 2024</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Umine</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="experience">
                  <h4>Web developer</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2020 - Hoy</span>
                  </p>
                  <p>
                    <i className="fa-regular fa-building" />
                    <span>Freelance</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-up-animation fadeInUp wow">
                <div className="education">
                  <h4>Titulado Universitario</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2019</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Universidad de Inacap</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            {/* TIMELINE ITEM STARTS */}
            <li>
              <div className="animated-layer fade-in-down-animation fadeInUp wow">
                <div className="education">
                  <h4>Graduado de Liceo</h4>
                  <p>
                    <i className="fa-regular fa-clock" />
                    <span>2009</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-building-columns" />
                    <span>Liceo Anibal Pinto Garmendia, Iquique</span>
                  </p>
                </div>
              </div>
            </li>
            {/* TIMELINE ITEM ENDS */}
            <li />
          </ol>
        </div>
        {/* TIMELINE ENDS */}
      </div>
      {/* RESUME ENDS */}
      <img
        alt=""
        className="separator hide-mobile"
        src="assets/separator.png"
      />
    </section>
  );
};
export default About;
