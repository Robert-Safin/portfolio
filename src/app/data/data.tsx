import {
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiPostgresql,
  SiRubyonrails,
  SiStimulus,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import styles from "./data.module.css";
import { AiOutlineDatabase } from "react-icons/ai";
import { IoMdMap } from "react-icons/io";
import { DiReact, DiRubyRough } from "react-icons/di";
const ProjectData = {
  Favolist: {
    title: "Favolist",
    githubLink: "https://github.com/Robert-Safin/favolist",
    liveLink: "https://favolist-bice.vercel.app/",
    about: <>
            <p>Favolist is the go-to list app. The app allows users to create lists and populate the lists with products. Users can gather all their favourites in one specific list, movies, restaurants, tech gadgets and such.</p>
            <br />
            <p>The inherent problem the app is solving is trust online. When one goes shopping online, they will encounter thousands reviews for a product/service, but who is it by? Can you trust them? Favolist addresses this via the social media follow system, where you are only exposed to lists/products of people you follow - influencers you trust or your actual friends.</p>
            <br />
            <p>Whats more Favolist allows users to populate their products with referral links/codes.</p>
            <br />
            <p>Favolist encomporates the latest tech stack, build entirely with Typescript, UI by React styled with Tailwind with a fully responsice design, API routes with Express, nonSQL MongoAtlas database and all encompassed inside Next.js</p>
            <br />
            <p>Some of the notable features include: fully responsive design, rich text editor(Quill.js), server-rendered pages, OAuth, user following system, suggested content algorithm, thread-like comment section.  </p>
            </> ,
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
        title: "React",
        icon: (
          <DiReact
            key={"react"}
            className={styles.icon}
            style={{ color: 'rgb(79, 226, 226)' }}
          />
        ),
        bgcol: "rgba(10,40,40,1)",
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
      {
        title: "Express",
        icon: (
          <SiExpress
            key={"Express"}
            className={styles.icon}
            style={{ color: "rgb(168, 162, 161)" }}
          />
        ),
        bgcol: "rgba(30,30,30,1)",
      },
      {
        title: "Mongoose",
        icon: (
          <IoMdMap
            key={"mongoose"}
            className={styles.icon}
            style={{ color: "rgb(118, 21, 13)" }}
          />
        ),
        bgcol: "rgba(30,20,10,1)",
      },
    ],
  },

  SpaceTrip: {
    title: "Space Trip",
    githubLink: "https://github.com/anteadc/virtual-styler",
    liveLink: "",
    about: <>
      <p>Space Trip was build as part of the Le Wagon bootcamp. Acting as the tech lead for the project, I managed the the back-end. Space Trip is AirBnB type market place app for trips to space.</p>
      <br />
      <p>The app leverages the simplicity of Rails to quickly create an MVP.</p>
    </>,
    technologies: [
      {
        title: "Ruby on Rails",
        icon: <SiRubyonrails key={"rails"} className={styles.icon}  style={{ color: "rgb(158, 20, 20)" }}/>,
        bgcol: "rgba(30,10,10,1)",
      },
      {
        title: "Ruby",
        icon: <DiRubyRough key={"ruby"} className={styles.icon}  style={{ color: "rgb(255, 0, 0)" }}/>,
        bgcol: "rgba(20,0,0,1)",
      },
      {
        title: "Postgres",
        icon: <SiPostgresql key={"postgres"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(10,20,30,1)",
      },
      {
        title: "Bootstrap",
        icon: <SiBootstrap key={"bootstrap"} className={styles.icon}  style={{ color: "rgb(119, 12, 161)" }}/>,
        bgcol: "rgba(25,5,30,1)",
      },
      {
        title: "Active Record",
        icon: <AiOutlineDatabase key={"record"} className={styles.icon}  style={{ color: "rgb(110, 5, 5)" }}/>,
        bgcol: "rgba(30,5,5,1)",
      },
      {
        title: "Stimulus",
        icon: <SiStimulus key={"stimulus"} className={styles.icon}  style={{ color: "rgb(107, 24, 24)" }}/>,
        bgcol: "rgba(20,10,10,1)",
      },
    ],
  },


  VirtualStyler: {
    title: "Virtual Styler",
    githubLink: "https://github.com/anteadc/virtual-styler",
    liveLink: "",
    about: <>
    <p>Virtual Styler is an app designed for people who have just purchased new real estate, without any furniture. The app guides the user room by room, asking for their style preferences and suggesting visual design samples, allowing users to add pieces of furniture to their baskets.</p>
    <p>Alternatively the user can employ a freelance designer to do the work via the app.</p>
    <br />
    <p>The app leverages the simplicity of Rails to quickly create an MVP.</p>
    </>,
    technologies: [
      {
        title: "Ruby on Rails",
        icon: <SiRubyonrails key={"rails"} className={styles.icon}  style={{ color: "rgb(158, 20, 20)" }}/>,
        bgcol: "rgba(30,10,10,1)",
      },
      {
        title: "Ruby",
        icon: <DiRubyRough key={"ruby"} className={styles.icon}  style={{ color: "rgb(255, 0, 0)" }}/>,
        bgcol: "rgba(20,0,0,1)",
      },
      {
        title: "Postgres",
        icon: <SiPostgresql key={"postgres"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(10,20,30,1)",
      },
      {
        title: "Bootstrap",
        icon: <SiBootstrap key={"bootstrap"} className={styles.icon}  style={{ color: "rgb(119, 12, 161)" }}/>,
        bgcol: "rgba(25,5,30,1)",
      },
      {
        title: "Active Record",
        icon: <AiOutlineDatabase key={"record"} className={styles.icon}  style={{ color: "rgb(110, 5, 5)" }}/>,
        bgcol: "rgba(30,5,5,1)",
      },
      {
        title: "Stimulus",
        icon: <SiStimulus key={"stimulus"} className={styles.icon}  style={{ color: "rgb(107, 24, 24)" }}/>,
        bgcol: "rgba(20,10,10,1)",
      },
    ],
  },

  Portfolio: {
    title: "Portfolio",
    githubLink: "https://github.com/Robert-Safin/portfolio",
    liveLink: "/",
    about: "Spotify inspired design, with responsive and shifting layouts.",
    technologies: [
      {
        title: "Next",
        icon: <SiNextdotjs key={"next"} className={styles.icon}  style={{ color: "rgb(30, 30, 30)" }}/>,
        bgcol: "rgba(10,10,10,1)",
      },
      {
        title: "React",
        icon: <DiReact key={"react"} className={styles.icon}  style={{ color: "rgb(47, 214, 219)" }}/>,
        bgcol: "rgba(10,35,40,1)",
      },
      {
        title: "TypeScript",
        icon: <SiTypescript key={"type"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(10,20,30,1)",
      },
      {
        title: "TailWindCss",
        icon: <SiTailwindcss key={"Tailwind"} className={styles.icon}  style={{ color: "rgb(60, 110, 180)" }}/>,
        bgcol: "rgba(15,20,25,1)",
      },
    ],
  },

};

export default ProjectData;
