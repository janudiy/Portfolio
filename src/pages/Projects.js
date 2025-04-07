import React from "react";
import "../styles/Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectData.map((proj, index) => (
          <div className="project-card" key={index}>
            <img src={proj.image} alt={proj.title} />
            <h3>{proj.title}</h3>
            <p>{proj.tech}</p>
            <p>{proj.description}</p>
            <a href={proj.link} className="open-project-link" target="_blank" rel="noopener noreferrer">
              open project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const projectData = [
  {
    title: "Progression Outcome Prediction",
    tech: "Python",
    image: "/projects/progression.png",
    description: (
      <ul>
        <li>A program that allows students to predict their progression outcome at the end of each academic year.</li>
        <li>The program displays the appropriate progression outcome for an individual student and shows a histogram for all students.</li>
      </ul>
    ),
    link: "https://github.com/janudiy/-Progression-Outcome-Prediction-Python.git", // Replace with actual link
  },
  {
    title: "Plane Management System",
    tech: "Java",
    image: "/projects/plane.png",
    description: (
      <ul>
        <li>A GUI-based system for private plane seat reservations.</li>
        <li>Includes functionalities for seat cancellations and managing reservations.</li>
      </ul>
    ),
    link: "https://github.com/janudiy/-Plane-Management-System-Java.git", // Replace with actual link
  },
  {
    title: "Real-Time Event Ticketing",
    tech: "Spring Boot, React, PostgreSQL",
    image: "/projects/ticketing.png",
    description: (
      <ul>
        <li>A web platform for booking, canceling, and viewing event tickets in real time.</li>
        <li>Supports dynamic ticket availability and event management features.</li>
      </ul>
    ),
    link: "https://github.com/janudiy/Real-Time-Event-Ticketing-Spring-Boot-React-PostgreSQL.git", // Replace with actual link
  },
  {
    title: "Quality Education Website",
    tech: "HTML, CSS, JavaScript",
    image: "/projects/education.png",
    description: (
      <ul>
        <li>An informative site focusing on UN Sustainable Development Goal 4 (Quality Education).</li>
        <li>Highlights key aspects of global education initiatives and resources.</li>
      </ul>
    ),
    link: "https://github.com/janudiy/Quality-Education-Website-HTML-CSS-JavaScript.git", // Replace with actual link
  },
  {
    title: "SriPedia History App",
    tech: "Flutter, FlutterFlow",
    image: "/projects/sripedia.png",
    description: (
      <ul>
        <li>A mobile app that gamifies Sri Lankan history through quizzes and storytelling.</li>
        <li>Provides engaging learning content about Sri Lankan historical events and figures.</li>
      </ul>
    ),
    link: "https://app.flutterflow.io/project/sripedia-5yq4lj", // Replace with actual link
  }
];

export default Projects;
