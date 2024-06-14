import React, { useEffect } from "react";
import aboutImage from "../assets/about.jpeg";
import styles from "./about.module.scss";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

const About = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.about}>
          <div className={styles.heading}>Know About Me</div>
          <div className={styles.text}>
            Hello Everyone, I am <span>Deepali Raje Rathore</span> from{" "}
            <span>Bhopal, India.</span>
            <br />
            I'm a frontend developer with nearly 2 years of experience at
            Tekion.
            <br />
            I have graduated from IIIT Bhopal in 2022.
            <br />
            I'm passionate about creating great user experiences and have a
            strong understanding of usability standards.
            <br />
          </div>
        </div>
        <img src={aboutImage} alt="about image" className={styles.aboutImage} />
      </div>
      <div className={styles.lower}>
        <Techstack />
        <Toolstack />
      </div>
    </div>
  );
};
export default About;
