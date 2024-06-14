import React from 'react';
import {
    SiVisualstudiocode,
    SiPostman,
    SiSlack,
    SiVercel,
    SiMacos,
  } from "react-icons/si";
  import styles from "./about.module.scss";

const Toolstack = (props) => {
    return (
        <div className={styles.toolStackContainer}>
             <div className={styles.heading}>Tools</div>
             <div className={styles.toolStack}>
                <div className={styles.card}>
                    <SiVisualstudiocode />
                </div>
                <div className={styles.card}>
                    <SiPostman />
                </div>
                <div className={styles.card}>
                    <SiSlack />
                </div>
                <div className={styles.card}>
                    <SiMacos />
                </div>
             </div>
        </div>
    )
};
export default Toolstack;