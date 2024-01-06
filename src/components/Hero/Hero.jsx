import React from "react";
import resume from '../../resume/KailashResume-1.pdf'

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kailash</h1>
        <p className={styles.description}>
          I'm a Frontend developer with 1+ years of experience using JavaScript
          and Library React. Reach out if you'd like to learn more!
        </p>
        <a
          href={resume}
          download="resume"
          className={styles.contactBtn}
        >
          Download CV
        </a>
      </div>
      <img
        src={getImageUrl("hero/myImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
