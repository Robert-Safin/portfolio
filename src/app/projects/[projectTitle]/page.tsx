'use client'
import { NextPage } from "next";
import styles from './page.module.css'
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import ProjectData from "@/app/data/data";

interface Props {
  params: {projectTitle:string}
}

const ProjectShowPage:NextPage<Props> = (props) => {

  let data

  if (props.params.projectTitle === "Favolist") {
    data = ProjectData.Favolist
  } else if (props.params.projectTitle === "Space%20Trip") {
    data = ProjectData.SpaceTrip
  }




  return (
    <div className={styles.container}>
      <IoIosArrowBack className={styles.backIcon}/>
      <Image className={styles.image} src={`/projects/${props.params.projectTitle}.png`} alt={`project image`} width={1000} height={1000}/>
      <h1 className={styles.title}>{data?.title}</h1>

      <div className={styles.linkIcon}>
      <AiOutlineGithub className={styles.githubIcon}/>
      <AiOutlineLink className={styles.linkIcon}/>
      </div>

      <p className={styles.about}>
       {data?.about}
      </p>

{data?.technologies.map(tech => <div key={tech.title}> {tech.title} {tech.icon}</div> )}
    </div>
  )
}

export default ProjectShowPage
