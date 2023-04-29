import React from "react";
import Skills from "../Skills/Skills";
import styles from "./About.module.css";

const About = () => {
  return (
    <section>
      <div className={`container ${styles["about-me-container"]}`}>
        <h3
          className={`heading-tertiary u-center-text u-margin-bottom-large ${styles.heading}`}
        >
          About Me
        </h3>
        <div className={styles["grid-left-container"]}>
          <h4 className="heading-fourth u-margin-bottom-medium">
            Get to know me
          </h4>
          <p className={styles.para}>
            I'm a big psychooo , always shouting at small kids and beating them
            is my aim. "Whatever the situation is , Just sleep " Said by The
            Great Dhuvya And i'm just following that.
          </p>

          <p className={styles.para}>
            I like doing Crafts. And I love gardening. Whereever There is Ice
            cream There is Dhuyva. I love carrots and beetroots more than ice
            creams. If Eating at correct time is a art them I'm the picasso of
            it.
          </p>
          <p className={styles.para}>
            I hate lazy people. If you go to google and search opposite of
            lazyness then you will find my name. If a work is given to me , then
            I will do it within microseconds.
          </p>
        </div>
        <div className={styles["grid-right-container"]}>
          <h4 className="heading-fourth u-margin-bottom-medium">My Skills</h4>
          <div className={styles["skills-container"]}>
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
