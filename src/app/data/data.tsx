import { SiMongodb, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si"
import styles from './data.module.css'
const ProjectData = {








  Favolist: {
    title: "Favolist",
    githubLink: "",
    liveLink: "",
    about: "FAvolist about",
      technologies: [
        {title: "Next" , icon: <SiNextdotjs key={'next'} className={styles.icon}/>},
        {title: "TypeScript" , icon: <SiTypescript key={'typescript'} className={styles.icon}/>},
        {title: "MongoAtlas" , icon: <SiMongodb key={'mongo'} className={styles.icon}/>},
        {title: "TailWindCss" , icon: <SiTailwindcss key={'tailwind'} className={styles.icon}/>},
      ]
  },



  SpaceTrip: {
    title: "Space Trip",
    githubLink: "",
    liveLink: "",
    about: "Space Trip about",
      technologies: [
        {title: "Next" , icon: <SiNextdotjs key={'next'} className={styles.icon}/>},
        {title: "TypeScript" , icon: <SiTypescript key={'typescript'} className={styles.icon}/>},
        {title: "MongoAtlas" , icon: <SiMongodb key={'mongo'} className={styles.icon}/>},
        {title: "TailWindCss" , icon: <SiTailwindcss key={'tailwind'} className={styles.icon}/>},
      ]
  },




}

export default ProjectData
