import styles from './SkillsStyles.module.css';
import checkMarkICon from '../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkICon} skill="Adobe Photoshop" />
            <SkillList src={checkMarkICon} skill="Canva" />
            <SkillList src={checkMarkICon} skill="Inkscape" />
            <SkillList src={checkMarkICon} skill="Figma" />
        </div>
        <hr />
    </section>
  );
}

export default Skills;
