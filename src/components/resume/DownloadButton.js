import React from 'react';
import { MdOutlineFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";

import styles from "./resume.module.scss";

const DownloadButton = () => {
    return (
        <div className={styles.download}>
        <Link
          className={styles.link}
          to="https://drive.google.com/file/d/1hh4fQLWq4pXlHOKwJPzCXn3_R_ns2CYB/view"
          target="_blank"
        >
          <MdOutlineFileDownload style={{ marginRight: "4px" }} />
          Download CV
        </Link>
      </div>
    )
};
export default DownloadButton;