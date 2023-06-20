import Image from "next/image"
import styles from './page.module.css'

import { IoLogoCss3, IoLogoGithub } from 'react-icons/io'
import { AiOutlineHtml5, AiOutlineMail } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import ProjectCard from "./components/ProjectCard"
import TechnologyCard from "./components/TechnologyCard"
import EducationCard from "./components/EducationCard"
import { DiCss3, DiReact, DiRubyRough } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiCss3, SiCsswizardry, SiExpress, SiHtml5, SiNextdotjs, SiRubyonrails, SiTypescript } from 'react-icons/si'

const HomePage = () => {
  return (
    <div className={styles.container}>

      <div className={styles.avatarAndContact}>
        <Image className={styles.avatar} src={`/me.png`} alt={'Robert Safin'} width={1000} height={1000} />
        <div className={styles.contacts}>
          <h1 className={styles.contactHeader}>Contact</h1>
          <div className={styles.contactItem}> <IoLogoGithub className={styles.contactIcon} /> <p className={styles.contactText}>Github</p> </div>
          <div className={styles.contactItem}> <AiOutlineMail className={styles.contactIcon} /> <p className={styles.contactText}>Email</p> </div>
          <div className={styles.contactItem}> <AiOutlineLinkedin className={styles.contactIcon} /> <p className={styles.contactText}>LinkedIn</p> </div>
          <div className={styles.contactItem}> <AiOutlineWhatsApp className={styles.contactIcon} /> <p className={styles.contactText}>WhatsApp</p> </div>
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
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
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
        <TechnologyCard icon={<SiNextdotjs/>} name={'Next.js'} />
        <TechnologyCard icon={<DiReact/>} name={'React.js'} />
        <TechnologyCard icon={<SiExpress/>} name={'Express.js'} />
        <TechnologyCard icon={<SiRubyonrails/>} name={'Ruby On Rails'} />


      </div>

      <h1 className={styles.technologyHeader}>Databases & ORMs</h1>
      <div className={styles.technologyGroup}>
        <TechnologyCard icon={''} name={''} />
        <TechnologyCard icon={''} name={''} />
        <TechnologyCard icon={''} name={''} />
        <TechnologyCard icon={''} name={''} />
        <TechnologyCard icon={''} name={''} />
        <TechnologyCard icon={''} name={''} />
        <TechnologyCard icon={''} name={''} />

      </div>

      <div className={styles.miscGroup}>
        <h1 className={styles.educationHeader}>Education</h1>
        <EducationCard />
        <EducationCard />
        <EducationCard />
      </div>

      <div className={styles.miscGroup}>
        <h1 className={styles.educationHeader}>Career</h1>
        <EducationCard />
        <EducationCard />
        <EducationCard />
      </div>

      <div className={styles.miscGroup}>
        <h1 className={styles.educationHeader}>Languages</h1>

        <div className={styles.languages}>
          <p className={styles.language}>English - Native</p>
          <p className={styles.language}>Russian - Native</p>
          <p className={styles.language}>Spanish - Casual</p>
        </div>

      </div>


    </div>

  )
}

export default HomePage
