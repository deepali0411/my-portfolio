import React, {useEffect} from "react";
import { Link } from "react-router-dom";

import homeImage from "../assets/home.jpeg";
import myPhoto from "../assets/my-pic.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

import styles from "./home.module.scss";

const Home = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.upper}>
        <div className={styles.leftText}>
          <div className={styles.greeting}>Hi There ! 👋🏻</div>
          <div className={styles.name}>
            I'm <span>Deepali Rathore</span>
          </div>
          <div className={styles.title}>Software Engineer</div>
        </div>
        <img
          className={styles.rightImage}
          src={homeImage}
          alt="computer image"
          style={{ width: 300, height: 400 }}
        />
      </div>
      <div className={styles.lower}>
        <div className={styles.introduction}>
          <div className={styles.heading}>Let me introduce myself</div>
          <div className={styles.text}>
            <div>
              I'm a front end developer with 2 years of experience in web
              development.
              <div>
                {" "}
                I am fluent in <span>Javascript, C++</span> and in javascript
                library <span>React.js</span>
                <div>
                  Whenever possible, I also enjoy developing products with{" "}
                  <span>Node.js</span> and React.js framework{" "}
                  <span>Next.js.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.myImage}
          src={myPhoto}
          alt="my image"
          style={{ width: 300, height: 300, borderRadius: "50%" }}
        />
      </div>
      <div className={styles.mediaContainer}>
        <div className={styles.socialMedia}>Find Me On</div>
        <div className={styles.apps}>
          <Link
            className={styles.mediaLink}
            to="https://github.com/deepali0411"
            target="_blank"
          >
            <AiFillGithub />
          </Link>
          <Link
            className={styles.mediaLink}
            to="https://www.linkedin.com/in/deepali-raje-rathore-04618415b/"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Home;
