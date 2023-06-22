import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import styles from "./data.module.css";
import { AiOutlineDatabase } from "react-icons/ai";
const ProjectData = {
  Favolist: {
    title: "Favolist",
    githubLink: "",
    liveLink: "",
    about: "FAvolist about",
    technologies: [
      {
        title: "Next",
        icon: (
          <SiNextdotjs
            key={"next"}
            className={styles.icon}
            style={{ color: "rgb(241, 241, 241)" }}
          />
        ),
        bgcol: "rgba(25,25,25,1)",
      },
      {
        title: "TypeScript",
        icon: (
          <SiTypescript
            key={"typescript"}
            className={styles.icon}
            style={{ color: "rgb(60, 110, 180)" }}
          />
        ),
        bgcol: "rgba(10,20,25,1)",
      },
      {
        title: "MongoAtlas",
        icon: (
          <SiMongodb
            key={"mongo"}
            className={styles.icon}
            style={{ color: "rgb(75, 158, 85)" }}
          />
        ),
        bgcol: "rgba(10,30,15,1)",
      },
      {
        title: "TailWindCss",
        icon: (
          <SiTailwindcss
            key={"tailwind"}
            className={styles.icon}
            style={{ color: "rgb(40, 196, 228)" }}
          />
        ),
        bgcol: "rgba(5,20,25,1)",
      },
    ],
  },

  SpaceTrip: {
    title: "Space Trip",
    githubLink: "",
    liveLink: "",
    about: "Space Trip about",
    technologies: [
      {
        title: "Ruby on Rails",
        icon: <SiNextdotjs key={"rails"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Ruby",
        icon: <SiTypescript key={"ruby"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Posgres",
        icon: <SiMongodb key={"postgres"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Bootstrap",
        icon: <SiTailwindcss key={"bootstrap"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Active Record",
        icon: <AiOutlineDatabase key={"record"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
    ],
  },


  VirtualStyler: {
    title: "Virtual Styler",
    githubLink: "",
    liveLink: "",
    about: "Virtual Styler about",
    technologies: [
      {
        title: "Ruby on Rails",
        icon: <SiNextdotjs key={"rails"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Ruby",
        icon: <SiTypescript key={"ruby"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Posgres",
        icon: <SiMongodb key={"postgres"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Bootstrap",
        icon: <SiTailwindcss key={"bootstrap"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Active Record",
        icon: <AiOutlineDatabase key={"record"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
    ],
  },

  Portfolio: {
    title: "Portfolio",
    githubLink: "",
    liveLink: "",
    about: "Portfolio about",
    technologies: [
      {
        title: "Ruby on Rails",
        icon: <SiNextdotjs key={"rails"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Ruby",
        icon: <SiTypescript key={"ruby"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Posgres",
        icon: <SiMongodb key={"postgres"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Bootstrap",
        icon: <SiTailwindcss key={"bootstrap"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
      {
        title: "Active Record",
        icon: <AiOutlineDatabase key={"record"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(20,20,200,1)",
      },
    ],
  },

};

export default ProjectData;
