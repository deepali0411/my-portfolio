import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoGithub } from "react-icons/io";
import { CgWebsite } from "react-icons/cg";

import styles from "./projects.module.scss";

const ProjectCard = ({image, title, text, github, demo}) => {
    console.log('demo: ', demo);
    return (
        <div className={styles.cardContainer}>
            <img className={styles.image} src={image} alt="project image" style={{width: 250, height: 200}} />
            <div className={styles.title}>{title}</div>
            <div className={styles.text}>{text}</div>
            <div className={styles.buttons}>
                {github && <Link role='button' to={github} target='_blank' className={styles.link}><IoLogoGithub /> Github</Link>}
                {demo && <Link role='button' to={demo} target='_blank' className={styles.link}><CgWebsite /> Demo</Link>}
            </div>
        </div>
    )
};
export default ProjectCard;