import { FC } from "react";
import styles from './Rundown.module.css'
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io";
import { AiOutlineLinkedin, AiOutlineMail, AiOutlineProfile, AiOutlineWhatsApp } from "react-icons/ai";

const SideBar: FC = () => {
  return (
    <div className={styles.container}>





      <div className={styles.contactContainer}>
        <h1 className={styles.header}>Contact</h1>
        <div>
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
          <Link href={`CV EN.pdf`} target="_blank">
              <div className={styles.contactItem}> <AiOutlineProfile className={styles.contactIcon} /> <p className={styles.contactText}>Resume</p> </div>
            </Link>
        </div>
      </div>


      <div className={styles.educationContainer}>
        <h1 className={styles.header}>Education</h1>
        <div className={styles.educationItem}>
          <p className={styles.year}>2023</p>
          <p className={styles.title}>Web Development Bootcamp</p>
          <p className={styles.location}>Le Wagon, Bali</p>
        </div>
        <div className={styles.educationItem}>
          <p className={styles.year}>2020</p>
          <p className={styles.title}>MS Real Estate Development</p>
          <p className={styles.location}>University Of Westminster, London</p>
        </div>
        <div className={styles.educationItem}>
          <p className={styles.year}>2019</p>
          <p className={styles.title}>BA International Business (Spanish)</p>
          <p className={styles.location}>University Of Westminster, London</p>
        </div>
      </div>


      <div className={styles.careerContainer}>
        <h1 className={styles.header}>Career</h1>
        <div className={styles.educationItem}>
          <p className={styles.year}>2022-2023</p>
          <p className={styles.title}>Economist at a Petroleum Company</p>
          <p className={styles.location}>Moscow, Russia</p>
        </div>
        <div className={styles.educationItem}>
          <p className={styles.year}>2021-2022</p>
          <p className={styles.title}>Real Estate Developer</p>
          <p className={styles.location}>Moscow, Russia</p>
        </div>


      </div>


      <div className={styles.languagesContainer}>
        <h1 className={styles.header}>Languages</h1>
        <p className={styles.languages}>English | Native</p>
        <p className={styles.languages}>Russian | Native</p>
        <p className={styles.languages}>Spanish | Casual</p>
      </div>



    </div>
  )
}

export default SideBar
