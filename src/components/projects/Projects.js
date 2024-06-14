import React, {useEffect} from "react";
import styles from "./projects.module.scss";
import ProjectCard from "./ProjectCard";
import { DATA } from "./projectData";

const Projects = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        My <span>Works</span>
      </div>
      <div className={styles.projects}>
      {DATA.map((projects) => {
        return (
          <ProjectCard
            image={projects.image}
            title={projects.title}
            text={projects.text}
            github={projects.github}
            demo={projects.demo}
          />
        );
      })}
    </div>
    </div>
  );
};
export default Projects;
