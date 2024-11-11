import styles from './HeroStyles.module.css';
import heroImg from "../../assets/heroo-modified.png";
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import fbLight from'../../assets/fb-light.jpg';
import fbDark from'../../assets/fb-dark.png';
import githubLight from'../../assets/github-light.svg';
import githubDark from'../../assets/github-dark.svg';
import linkedinLight from'../../assets/linkedin-light.svg';
import linkedinDark from'../../assets/linkedin-dark.svg';
import CV from '../../assets/mycv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon; 
    const fbIcon = theme === 'light' ? fbLight : fbDark; 
    const githubIcon = theme === 'light' ? githubLight : githubDark; 
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark; 

  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
                className={styles.hero} 
                src={heroImg} 
                alt="Profile picture of Aubrey Gripon" 
            />
            <img 
                className={styles.colorMode} 
                src={themeIcon} 
                alt="Color mode icon" 
                onClick={toggleTheme}
            />
    </div>
    <div className={styles.info}>
        <h1>
            Aubrey
            <br />
            Gripon
        </h1>
        <h2>Graphic Designer</h2>
        <span>
            <a href="https://www.facebook.com/aubrey.gripon/" target="_blank">
                <img src={fbIcon} alt="Fb icon" />
            </a>
            <a href="https://github.com/obriG08" target="_blank">
                <img src={githubIcon} alt="Github icon" />
            </a>
            <a href="https://www.linkedin.com/in/anne-aubrey-gripon-54609b336/" target="_blank">
                <img src={linkedinIcon} alt="Linkedin icon" />
            </a>
        </span>
        <p className={styles.description}>
        I’m a graphic designer dedicated to creating impactful visuals. Explore my work and let’s bring your ideas to life.
        </p>
        <a href={CV} download>
            <button className="hover">Download CV</button>
        </a>
    </div>
  </section>
  );
}

export default Hero;