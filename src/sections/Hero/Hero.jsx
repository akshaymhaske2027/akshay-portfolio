import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img-2.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import instagramLight from "../../assets/insta-light.svg";
import instagramDark from "../../assets/insta-dark.svg";
import CV from "../../assets/akshay_mhaske_resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const instagramIcon = theme === "light" ? instagramLight : instagramDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Akshay Mhaske"
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
          Hey, there <span className={styles.wave} role="img" aria-labelledby="wave">👋🏻</span> <br /> I’m{" "}
          <span
            className="hero_intro;
}"
          >
            Akshay Mhaske
          </span>
        </h1>

        <h2>Full Stack Developer(JAVA)</h2>
        <span>
          <a href="https://twitter.com/x_balyaa" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/akshaymhaske2027/" target="_blank">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://www.linkedin.com/in/akshay-mhaske/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin Icon" />
          </a>
          <a href="https://instagram.com/akshay_mhaske___/" target="_blank">
            <img src={instagramIcon} alt="Instagram Icon" />
          </a>
        </span>
        <p className={styles.description}>
          Passionate about crafting advanced Full Stack Java-based web
          applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
