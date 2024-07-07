import styles from './ProjectsStyle.module.css';
import ems from '../../assets/ems.png';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ems}
          link="https://github.com/akshaymhaske2027/full-stack-ems.git"
          h3="Employee Management App"
          p="Management App"
        />
      
      </div>
    </section>
  );
}

export default Projects;