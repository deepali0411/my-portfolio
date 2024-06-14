import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument, CgGitFork } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

import styles from "./navbar.module.scss";

const NavBar = (props) => {
  const [isExpand, setIsExpand] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <Link to="/" className={styles.drLink}>
          DR
        </Link>
        <div className={styles.icon} onClick={() => setIsExpand(!isExpand)}>
          {isExpand ? <RxCross2 /> : <GiHamburgerMenu />}
        </div>
      </div>
      <ui
        className={`${styles.navPage} ${!isExpand ? styles.notExpanded : ""}`}
      >
        <li className={styles.home}>
          <Link className={styles.link} to="/" onClick={() => setIsExpand(false)}>
            <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
          </Link>
        </li>
        <li className={styles.about}>
          <Link className={styles.link} to="/about" onClick={() => setIsExpand(false)}>
            <AiOutlineUser style={{ marginBottom: "2px" }} /> About
          </Link>
        </li>
        <li className={styles.projects}>
          <Link className={styles.link} to="/projects" onClick={() => setIsExpand(false)}>
            <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} />{" "}
            Projects
          </Link>
        </li>
        <li className={styles.resume}>
          <Link className={styles.link} to="/resume" onClick={() => setIsExpand(false)}>
            <CgFileDocument /> Resume
          </Link>
        </li>
        <li className={styles.github} >
          <Link
            role="button"
            className={styles.button}
            to="https://github.com/deepali0411/my-portfolio"
            onClick={() => setIsExpand(false)}
            target="_blank"
          >
            <CgGitFork />
            <AiFillStar style={{ marginBottom: "2px" }} />
          </Link>
        </li>
      </ui>
    </div>
  );
};
export default NavBar;
