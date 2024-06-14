import React from 'react';
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiHtml5,
    DiCss3,
    DiGit,
    DiGithub,
  } from "react-icons/di";
  import {
    SiYarn,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
  } from "react-icons/si";
  import styles from "./about.module.scss";

const Techstack = (props) => {
    return (
        <div className={styles.techStackContainer}>
             <div className={styles.heading}>Skillset</div>
             <div className={styles.techStack}>
                <div className={styles.card}>
                    <DiJavascript1 />
                </div>
                <div className={styles.card}>
                    <DiReact />
                </div>
                <div className={styles.card}>
                    <SiNextdotjs />
                </div>
                <div className={styles.card}>
                    <DiNodejs />
                </div>
                <div className={styles.card}>
                    <DiGit />
                </div>
                <div className={styles.card}>
                    <DiGithub />
                </div>
                <div className={styles.card}>
                    <SiYarn />
                </div>
                <div className={styles.card}>
                    <DiHtml5 />
                </div>
                <div className={styles.card}>
                    <DiCss3 />
                </div>
             </div>
        </div>
    )
};
export default Techstack;