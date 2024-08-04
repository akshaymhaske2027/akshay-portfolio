import styles from './ProjectsStyle.module.css';
import ems from '../../assets/ems.png';
import ecom from '../../assets/ecommerce.jpg'

import ProjectCard from '../../common/ProjectCard';
import proe from '../../assets/project-e.jpg'

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
      <br />

      <br />
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={ecom}
          link="https://github.com/akshaymhaske2027/project-ecommerce-2.0.git"
          h3="Ecommerce Web App"
          p="Online Mart App"
        />
      </div>
      <br />
      
      <br />
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={proe}
          link="https://github.com/akshaymhaske2027/project-e.git"
          h3="ExpenseTracker"
          p="Web App"
        />
      </div>
    </section>
  );
}

export default Projects;