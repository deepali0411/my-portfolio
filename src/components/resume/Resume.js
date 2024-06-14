import React, { useEffect } from "react";
import resume from "../assets/projects/resume.jpg";
import DownloadButton from "./DownloadButton";

import styles from "./resume.module.scss";

const Resume = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <DownloadButton />
      <img className={styles.image} src={resume} alt="resume" />
      <DownloadButton />
    </div>
  );
};
export default Resume;
