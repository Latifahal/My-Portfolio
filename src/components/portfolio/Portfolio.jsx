import React from 'react';
import './portfolio.css';

const skills = [
    "Java", "Python", "C#", "UML", "Javascript","MERN Stack", "Microservices Architecture",
  "SQL", "Database Design & Modeling", "Entity-Relationship Diagrams (ERD)", "Data Processing with Files and Streams",
  "PHP", "Modern JavaScript Frameworks", "Interactive Web Design with Database Integration",
  "Structured Software Development", "Object-Oriented Programming Principles", "Version Control Systems", "Integrated Development Environments (IDEs)",
  "IT Hardware and Networking Basics", "Virtualization and Operating Systems (Windows)", "Service and Support; Quality Management", "Information Security and Data Protection",
  "Fundamentals of Economics and Contracts", "Legal Forms, Macroeconomics, and Economic Policy", "Project Management Basics", "DEKRA Certification: Project Management Specialist",
  "Continuous Integration and Continuous Deployment (CI/CD)"
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2 className="skills-title">My Skills</h2>
      <div className="bubbles-grid">
        {skills.map((skill, index) => (
          <div key={index} className="bubble-wrapper">
            <span className="skill-bubble">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;

