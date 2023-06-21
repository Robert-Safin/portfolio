import Image from "next/image"
import styles from './page.module.css'

import { IoLogoCss3, IoLogoGithub, IoMdMap } from 'react-icons/io'
import { AiOutlineHtml5, AiOutlineMail } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import ProjectCard from "./components/ProjectCard"
import TechnologyCard from "./components/TechnologyCard"
import EducationCard from "./components/EducationCard"
import { DiCss3, DiMongodb, DiReact, DiRubyRough } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiCss3, SiCsswizardry, SiExpress, SiFirebase, SiHtml5, SiMongodb, SiNextdotjs, SiPostgresql, SiPrisma, SiRubyonrails, SiSqlite, SiTypescript } from 'react-icons/si'
import Link from "next/link"
import SideBar from "./components/md/Rundown"

const HomePage = () => {
  return (
    <div className={styles.split}>
      <SideBar/>
    <div className={styles.container}>

      <div className={styles.avatarAndContact}>
        <Image className={styles.avatar} src={`/me.png`} alt={'Robert Safin'} width={1000} height={1000} />
        <p className={styles.MDaboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis. Interdum velit laoreet id donec ultrices tincidunt arcu. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Faucibus in ornare quam viverra. Tempor commodo ullamcorper a lacus vestibulum sed. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Urna porttitor rhoncus dolor purus non enim praesent elementum. Vehicula ipsum a arcu cursus vitae congue. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Enim facilisis gravida neque convallis a.
          Eget egestas purus viverra accumsan in nisl nisi scelerisque. Eget sit amet tellus cras adipiscing enim eu turpis. Pretium lectus quam id leo in. Orci eu lobortis elementum nibh tellus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Dictum sit amet justo donec enim diam vulputate. Urna neque viverra justo nec ultrices. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet consectetur adipiscing elit ut aliquam purus sit. Dignissim convallis aenean et tortor at risus viverra adipiscing at.
        </p>
        <div className={styles.contacts}>
          <h1 className={styles.contactHeader}>Contact</h1>
          <Link href={`https://github.com/Robert-Safin`}>
            <div className={styles.contactItem}> <IoLogoGithub className={styles.contactIcon} /> <p className={styles.contactText}>GitHub</p> </div>
          </Link>
          <Link href={`mailto:robertsafin98@gmail.com`}>
          <div className={styles.contactItem}> <AiOutlineMail className={styles.contactIcon} /> <p className={styles.contactText}>Email</p> </div>
          </Link>
          <Link href={`https://www.linkedin.com/in/robert-safin/`}>
            <div className={styles.contactItem}> <AiOutlineLinkedin className={styles.contactIcon} /> <p className={styles.contactText}>LinkedIn</p> </div>
          </Link>
          <Link href={`https://wa.me/+79670429889`}>
          <div className={styles.contactItem}> <AiOutlineWhatsApp className={styles.contactIcon} /> <p className={styles.contactText}>WhatsApp</p> </div>
          </Link>
        </div>
      </div>



      <h1 className={styles.aboutHeader}>About</h1>
      <div className={styles.about}>
        <p className={styles.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla facilisi morbi tempus iaculis urna. Elementum sagittis vitae et leo duis. Interdum velit laoreet id donec ultrices tincidunt arcu. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Turpis egestas pretium aenean pharetra magna ac placerat vestibulum lectus. Faucibus in ornare quam viverra. Tempor commodo ullamcorper a lacus vestibulum sed. Facilisis leo vel fringilla est ullamcorper eget nulla facilisi. Urna porttitor rhoncus dolor purus non enim praesent elementum. Vehicula ipsum a arcu cursus vitae congue. Integer enim neque volutpat ac tincidunt vitae semper quis lectus. Enim facilisis gravida neque convallis a.
          Eget egestas purus viverra accumsan in nisl nisi scelerisque. Eget sit amet tellus cras adipiscing enim eu turpis. Pretium lectus quam id leo in. Orci eu lobortis elementum nibh tellus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Dictum sit amet justo donec enim diam vulputate. Urna neque viverra justo nec ultrices. Odio eu feugiat pretium nibh ipsum consequat nisl vel. Sit amet consectetur adipiscing elit ut aliquam purus sit. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Vitae aliquet nec ullamcorper sit amet risus nullam eget felis. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Non pulvinar neque laoreet suspendisse interdum consectetur libero id.
          Amet mauris commodo quis imperdiet massa tincidunt nunc. Suspendisse potenti nullam ac tortor vitae purus. Rutrum quisque non tellus orci ac auctor augue mauris augue. Aliquet lectus proin nibh nisl condimentum id venenatis a. Eros donec ac odio tempor orci dapibus ultrices in. Id volutpat lacus laoreet non curabitur gravida arcu ac. Mi in nulla posuere sollicitudin aliquam. Proin sagittis nisl rhoncus mattis rhoncus. Dui vivamus arcu felis bibendum ut tristique et egestas quis. Eget mi proin sed libero enim sed. Id leo in vitae turpis. Suspendisse ultrices gravida dictum fusce ut placerat.
        </p>
      </div>

      <h1 className={styles.projectHeader}>Projects</h1>
      <div className={styles.projectCards}>
        <ProjectCard title="lorem" />
        <ProjectCard title="lorem" />
        <ProjectCard title="lorem" />
        <ProjectCard title="lorem" />
        <ProjectCard title="lorem" />
        <ProjectCard title="lorem" />
      </div>


      <h1 className={styles.technologiesHeader}>Technologies</h1>

      <h1 className={styles.technologyHeader}>Languages</h1>
      <div className={styles.technologyGroup}>
        <TechnologyCard icon={<DiRubyRough className={styles.techIcon} style={{ color: "rgb(160, 40, 20)" }} />} name={'Ruby'} />
        <TechnologyCard icon={<IoLogoJavascript className={styles.techIcon} style={{ color: "rgb(224, 209, 99)" }} />} name={'JavaScript'} />
        <TechnologyCard icon={<SiTypescript className={styles.techIcon} style={{ color: "rgb(60, 110, 180)" }} />} name={'TypeScript'} />
        <TechnologyCard icon={<SiHtml5 className={styles.techIcon} style={{ color: "rgb(210, 85, 50)" }} />} name={'HTML'} />
        <TechnologyCard icon={<SiCss3 className={styles.techIcon} style={{ color: "rgb(50, 70, 210)" }} />} name={'CSS'} />

      </div>

      <h1 className={styles.technologyHeader}>Frameworks</h1>
      <div className={styles.technologyGroup}>
        <TechnologyCard icon={<SiNextdotjs className={styles.techIcon} style={{ color: "rgb(241, 241, 241)" }} />} name={'Next'} />
        <TechnologyCard icon={<DiReact className={styles.techIcon} style={{ color: "rgb(79, 226, 226)" }} />} name={'React'} />
        <TechnologyCard icon={<SiExpress className={styles.techIcon} style={{ color: "rgb(168, 162, 161)" }} />} name={'Express'} />
        <TechnologyCard icon={<SiRubyonrails className={styles.techIcon} style={{ color: "rgb(160, 40, 20)" }} />} name={'Rails'} />


      </div>

      <h1 className={styles.technologyHeader}>Databases & ORMs</h1>
      <div className={styles.technologyGroup}>
        <TechnologyCard icon={<SiPostgresql className={styles.techIcon} style={{ color: "rgb(61, 97, 134)" }} />} name={'Postgres'} />
        <TechnologyCard icon={<SiSqlite className={styles.techIcon} style={{ color: "rgb(129, 177, 219)" }} />} name={'SQLite'} />
        <TechnologyCard icon={<SiPrisma className={styles.techIcon} style={{ color: "rgb(24, 49, 69)" }} />} name={'Prisma'} />
        <TechnologyCard icon={<SiMongodb className={styles.techIcon} style={{ color: "rgb(75, 158, 85)" }} />} name={'MongoDB'} />
        <TechnologyCard icon={<DiMongodb className={styles.techIcon} style={{ color: "rgb(64, 137, 82)" }} />} name={'MongoAtlas'} />
        <TechnologyCard icon={<IoMdMap className={styles.techIcon} style={{ color: "rgb(118, 21, 13)" }} />} name={'Mongoose'} />
        <TechnologyCard icon={<SiFirebase className={styles.techIcon} style={{ color: "rgb(230, 160, 60)" }} />} name={'Firebase'} />

      </div>

      <div className={styles.miscGroup}>
        <h1 className={styles.educationHeader}>Education</h1>
        <EducationCard year={'2023'} title="WEB DEVLOPMENT BOOTCAMP" location="Le Wagon, Bali" />
        <EducationCard year={'2020'} title="MS REAL ESTATE DEVELOPMENT" location="University of Westminster, London" />
        <EducationCard year={'2019'} title="BA INTERNATIONAL BUSINESS (SPANISH)" location="University of Westminster, London" />
      </div>

      <div className={styles.miscGroup}>
        <h1 className={styles.educationHeader}>Career</h1>
        <EducationCard year={'2022-2023'} title="Economist at a Petroleum Company" location="Moscow, Russia" />
        <EducationCard year={'2021-2022'} title="Real Estate Developer" location="Moscow, Russia" />
      </div>

      <div className={styles.miscGroup}>
        <h1 className={styles.educationHeader}>Languages</h1>

        <div className={styles.languages}>

          <div className={styles.languageBox}>
            <p className={styles.language}>English | Native</p>
          </div>

          <div className={styles.languageBox}>
            <p className={styles.language}>Russian | Native</p>
          </div>

          <div className={styles.languageBox}>
            <p className={styles.language}>Spanish | Casual</p>
          </div>

        </div>

      </div>


    </div>
    </div>

  )
}

export default HomePage
