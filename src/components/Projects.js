import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project">
        <h3>Database System Concepts and Applications</h3>
        <p>
          A project completed at Kean University in Spring 2024. This involved developing a course project website
          with login and search functionality hosted on the Kean University web server.
        </p>
        <a href="https://obi2.kean.edu/~johnsney/TECH3740/" target="_blank" rel="noopener noreferrer">
          Visit Project Website
        </a>
      </div>

      <div className="project">
        <h3>Innovative Method for Assessing the Attitude of Underrepresented Students</h3>
        <p>
          A project developed as part of the GS-LSAMP program in Spring 2023. I created a survey to measure
          attitudes of students toward Computer Science and Information Technology.
        </p>
        <a href="/neyah-johnson-research-days-poster-template.pdf" target="_blank" rel="noopener noreferrer">
          View Project Poster
        </a>
      </div>
    </section>
  );
}

export default Projects;
