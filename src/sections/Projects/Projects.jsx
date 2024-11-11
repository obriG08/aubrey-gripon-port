import React from 'react';
import styles from './ProjectsStyles.module.css';
import wedding from '../../assets/wedding_inv.png';
import bday from '../../assets/bday_inv.jpeg';
import cakeToppers from '../../assets/cake_toppers.jpeg';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectCard 
                src={wedding}
                h3="Wedding Invitation"
            />
             <ProjectCard 
                src={bday} 
                h3="Birthday Invitation"
            />
             <ProjectCard 
                src={cakeToppers} 
                h3="Cake Toppers"
            />
        </div>
    </section>
  );
}

export default Projects;