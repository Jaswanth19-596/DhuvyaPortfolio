import Skill from "./Skill";
import styles from "./Skills.module.css";

const skills = [
  "python",
  "html",
  "css",
  "php",
  "Data structures",
  "Java",
  "C",
  "DBMS",
  "public speaking",
  "Leadership",
  "Quick Grasping",
];

const Skills = () => {
  return (
    <ul className={styles["skills-list"]}>
      {skills.map((skill) => (
        <Skill skill={skill} key={skill} />
      ))}
    </ul>
  );
};

export default Skills;
