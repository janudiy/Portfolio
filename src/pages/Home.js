import React from "react";
import "../styles/Home.css";
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      {/* Profile content on the left and description on the right */}
      <div className="home-content-container">
        {/* Profile content (left side) */}
        <div className="home-content">
          <img src="profilepic.jpg" alt="Janudi" className="profile-img" />
          <h1 className="home-title">Janudi Yatagampitiya</h1>
          <p className="home-subtitle"><span className="typing-text">Web Developer | Frontend Developer | Tech Enthusiast</span></p>
          <Link to="/projects" className="home-button">Learn More</Link>
          <a href="cv.pdf" download className="home-button">Download My CV</a>
        </div>

        {/* Introduction paragraph (right side) */}
        <div className="home-intro">
          <p>
            I am an Undergraduate Computer Science student at Informatics Institute of Technology (IIT),
            affiliated with the University of Westminster. I am a passionate UI/UX designer and web developer
            who loves creating intuitive and visually engaging digital experiences. With a strong focus on 
            design and development, I craft modern web and mobile applications using the latest technologies.
            Constantly eager to learn and innovate, I thrive on turning ideas into functional and aestnpmhetically 
            pleasing solutions.
          </p>
          <p>Feel free to take a look at my latest projects on the <a href="/projects">projects</a> page.</p>
        </div>
      </div>



      {/* Technologies I Use */}
      <div className="technologies-section">
        <h2 className="technologies-title">Technologies I Use</h2>

        <div className="technologies-category">
          <h3>Programming Languages</h3>
          <div className="technologies-list">
            <div className="tech-item">
              <img src="logo/java-logo.png" alt="Java" />
              <span>Java</span>
            </div>
            <div className="tech-item">
              <img src="logo/python-logo.png" alt="Python" />
              <span>Python</span>
            </div>
            <div className="tech-item">
              <img src="logo/js-logo.png" alt="JavaScript" />
              <span>JavaScript</span>
            </div>
            <div className="tech-item">
              <img src="logo/flutter-logo.jpg" alt="Flutter" />
              <span>Flutter</span>
            </div>
          </div>
        </div>

        <div className="technologies-category">
          <h3>Web Development</h3>
          <div className="technologies-list">
            <div className="tech-item">
              <img src="logo/html-logo.png" alt="HTML" />
              <span>HTML</span>
            </div>
            <div className="tech-item">
              <img src="logo/css-logo.png" alt="CSS" />
              <span>CSS</span>
            </div>
            <div className="tech-item">
              <img src="logo/react-logo.png" alt="React" />
              <span>React</span>
            </div>
          </div>
        </div>

        <div className="technologies-category">
          <h3>DevOps & Tools</h3>
          <div className="technologies-list">
            <div className="tech-item">
              <img src="logo/git-logo.png" alt="Git" />
              <span>Git</span>
            </div>
            <div className="tech-item">
              <img src="logo/figma-logo.png" alt="Figma" />
              <span>Figma</span>
            </div>
            <div className="tech-item">
              <img src="logo/flutterflow-logo.png" alt="Azure" />
              <span>flutterflow</span>
            </div>
            <div className="tech-item">
              <img src="logo/axure-logo.png" alt="Axure" />
              <span>Axure</span>
            </div>
            <div className="tech-item">
              <img src="logo/postman-logo.png" alt="Postman" />
              <span>Postman</span>
            </div>
          </div>
        </div>

        <div className="technologies-category">
          <h3>Backend Development</h3>
          <div className="technologies-list">
            <div className="tech-item">
              <img src="logo/springboot-logo.png" alt="Spring Boot" />
              <span>Spring Boot</span>
            </div>
          </div>
        </div>

        <div className="technologies-category">
          <h3>Database</h3>
          <div className="technologies-list">
            <div className="tech-item">
              <img src="logo/mysql-logo.png" alt="MySQL" />
              <span>MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
