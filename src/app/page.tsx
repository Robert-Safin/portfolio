'use client'
import Image from "next/image"
import styles from './page.module.css'

import { IoLogoGithub, IoMdMap } from 'react-icons/io'
import { AiOutlineMail, AiOutlineProfile } from 'react-icons/ai'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { AiOutlineWhatsApp } from 'react-icons/ai'
import ProjectCard from "./components/ProjectCard"
import TechnologyCard from "./components/TechnologyCard"
import EducationCard from "./components/EducationCard"
import { DiMongodb, DiReact, DiRubyRough } from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io'
import { SiBootstrap, SiCss3, SiExpress, SiFirebase, SiHtml5, SiMongodb, SiNextdotjs, SiPostgresql, SiPrisma, SiRubyonrails, SiSqlite, SiTailwindcss, SiTypescript } from 'react-icons/si'
import Link from "next/link"
import SideBar from "./components/md/Rundown"
import { useState } from "react"
import { useRouter } from "next/navigation"


const HomePage = () => {
  const router = useRouter

  const [backgroundColor, setBackgroundColor] = useState("rgba(20,20,20,1)")

  const handleBackgroundColorChange = (color: any) => {
    setBackgroundColor(color)
  }

  const resetBackgroundColor = () => [
    setBackgroundColor("rgba(20,20,20,1)")
  ]
  return (
    <div className={styles.split}>
      <SideBar />
      <div className={styles.container} style={{ background: backgroundColor, transitionDuration: "1s" }}>

        <div className={styles.avatarAndContact}>
          <Image className={styles.avatar} src={`/me.png`} alt={'Robert Safin'} width={1000} height={1000} />
          <p className={styles.MDaboutText}>
            Hello, I am Robert, I was born in Russia and raised in the United Kingdom.
            I am an economist with 2 years experience working in the petroleum & gas and real estate development industries.
            I decided to to have a career change and become a developer.
            My start was Le Wagon bootcamp, where I learned the foundamentals of web development & programming.
            After the bootcamp I decided to pick up the latest technologies availble for web development, such as TypeScript, React and MongoDB.
            I am now working as a freelancer specialising in full-stack apps built with Next.
            I am now looking for freelance jobs & and remote work opportunities.

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
            <Link href={``}>
              <div className={styles.contactItem}> <AiOutlineProfile className={styles.contactIcon} /> <p className={styles.contactText}>Resume</p> </div>
            </Link>
          </div>
        </div>



        <h1 className={styles.aboutHeader}>About</h1>
        <div className={styles.about}>
          <p className={styles.aboutText}>
            Hello, I am Robert, I was born in Russia and raised in the United Kingdom.
            I am an economist with 2 years experience working in the petroleum & gas and real estate development industries.
            I decided to to have a career change and become a developer.
            My start was Le Wagon bootcamp, where I learned the foundamentals of web development & programming.
            After the bootcamp I decided to pick up the latest technologies availble for web development, such as TypeScript, React and MongoDB.
            I am now working as a freelancer specialising in full-stack apps built with Next.
            I am now looking for freelance jobs & and remote work opportunities.

          </p>

        </div>







        <div className={styles.cards}>

          <div className={styles.projectsContainer}>
            <h1 className={styles.projectHeader}>Projects</h1>
            <div className={styles.projectCards}>
              <ProjectCard title="Favolist" handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,0,0,1)'} />
              <ProjectCard title="Space Trip" handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(0,10,40,1)'} />
              <ProjectCard title="Virtual Styler" handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(10,0,20,1)'} />
              <ProjectCard title="Ouija DEX" handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(5,10,18,1)'} />
              <ProjectCard title="Aletheia" handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(0,10,10,1)'} />
            </div>

          </div>

          <div className={styles.technologiesContainer}>

            <h1 className={styles.technologiesHeader}>Technologies</h1>

            <h1 className={styles.technologyHeader}>Languages</h1>
            <div className={styles.technologyGroup}>
              <TechnologyCard icon={<SiTypescript className={styles.techIcon} style={{ color: "rgb(60, 110, 180)" }} />} name={'TypeScript'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(20,30,40,1)'}/>
              <TechnologyCard icon={<DiRubyRough className={styles.techIcon} style={{ color: "rgb(160, 40, 20)" }} />} name={'Ruby'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,10,5,1)'} />
              <TechnologyCard icon={<IoLogoJavascript className={styles.techIcon} style={{ color: "rgb(224, 209, 99)" }} />} name={'JavaScript'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,35,20,1)'} />
              <TechnologyCard icon={<SiHtml5 className={styles.techIcon} style={{ color: "rgb(210, 85, 50)" }} />} name={'HTML'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,20,10,1)'} />
              <TechnologyCard icon={<SiCss3 className={styles.techIcon} style={{ color: "rgb(50, 70, 210)" }} />} name={'CSS'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(10,10,40,1)'} />

            </div>

            <h1 className={styles.technologyHeader}>Frameworks</h1>
            <div className={styles.technologyGroup}>
              <TechnologyCard icon={<SiNextdotjs className={styles.techIcon} style={{ color: "rgb(241, 241, 241)" }} />} name={'Next'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,40,40,1)'} />
              <TechnologyCard icon={<DiReact className={styles.techIcon} style={{ color: "rgb(79, 226, 226)" }} />} name={'React'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(10,40,40,1)'} />
              <TechnologyCard icon={<SiExpress className={styles.techIcon} style={{ color: "rgb(168, 162, 161)" }} />} name={'Express'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(20,20,20,1)'} />
              <TechnologyCard icon={<SiRubyonrails className={styles.techIcon} style={{ color: "rgb(160, 40, 20)" }} />} name={'Rails'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,10,5,1)'} />
              <TechnologyCard icon={<SiTailwindcss className={styles.techIcon} style={{ color: "rgb(40, 196, 228)" }} />} name={'TailWindCss'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(10,20,40,1)'} />
              <TechnologyCard icon={<SiBootstrap className={styles.techIcon} style={{ color: "rgb(122, 21, 195)" }} />} name={'Bootstrap'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(10,5,30,1)'} />



            </div>

            <h1 className={styles.technologyHeader}>Databases & ORMs</h1>
            <div className={styles.technologyGroup}>
              <TechnologyCard icon={<SiPostgresql className={styles.techIcon} style={{ color: "rgb(61, 97, 134)" }} />} name={'Postgres'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(10,15,20,1)'} />
              <TechnologyCard icon={<SiSqlite className={styles.techIcon} style={{ color: "rgb(129, 177, 219)" }} />} name={'SQLite'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(15,25,35,1)'} />
              <TechnologyCard icon={<SiPrisma className={styles.techIcon} style={{ color: "rgb(24, 49, 69)" }} />} name={'Prisma'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(5,10,15,1)'} />
              <TechnologyCard icon={<SiMongodb className={styles.techIcon} style={{ color: "rgb(75, 158, 85)" }} />} name={'MongoDB'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(10,20,15,1)'} />
              <TechnologyCard icon={<DiMongodb className={styles.techIcon} style={{ color: "rgb(64, 137, 82)" }} />} name={'MongoAtlas'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(20,30,25,1)'} />
              <TechnologyCard icon={<IoMdMap className={styles.techIcon} style={{ color: "rgb(118, 21, 13)" }} />} name={'Mongoose'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,10,10,1)'} />
              <TechnologyCard icon={<SiFirebase className={styles.techIcon} style={{ color: "rgb(230, 160, 60)" }} />} name={'Firebase'} handleBackgroundColorChange={handleBackgroundColorChange} resetBackgroundColor={resetBackgroundColor} color={'rgba(40,20,10,1)'} />

            </div>
          </div>
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
