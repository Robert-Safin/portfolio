"use client";
import { NextPage } from "next";
import styles from "./page.module.css";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import ProjectData from "@/app/data/data";
import Link from "next/link";
import SideBar from "@/app/components/md/Rundown";
import { useState } from "react";

interface Props {
  params: { projectTitle: string };
}

const ProjectShowPage: NextPage<Props> = (props) => {

  const [backgroundCol, setBackgroundCol] = useState('rgba(20,20,20,1)')

  let data;
  if (props.params.projectTitle === "Favolist") {
    data = ProjectData.Favolist;
  } else if (props.params.projectTitle === "Space%20Trip") {
    data = ProjectData.SpaceTrip;
  } else if (props.params.projectTitle === "Virtual%20Styler") {
    data = ProjectData.VirtualStyler
  } else if (props.params.projectTitle === "Portfolio") {
    data = ProjectData.Portfolio
  }

  const handleColorChange = (col:any) => {
    setBackgroundCol(col)
  }

  const resetColor = () => {
    setBackgroundCol('rgba(20,20,20,1)')
  }


  return (
    <div className={styles.split}>
      <SideBar />

      <div className={styles.container} style={{background: backgroundCol, transitionDuration: "1s"}}>
        <div className={styles.XLcontainer}>
          <Link href={`/`}>
          <IoIosArrowBack className={styles.XLbackIcon} />
          </Link>
          <div className={styles.XLimageAndTitle}>
            <Image
              className={styles.XLimage}
              src={`/projects/${props.params.projectTitle}.png`}
              alt={`project image`}
              width={1000}
              height={1000}
            />
            <h1 className={styles.XLtitle}>{data?.title}</h1>
          </div>
        </div>
        <Link href={`/`}>
          <IoIosArrowBack className={styles.backIcon} />
        </Link>
        <Image
          className={styles.image}
          src={`/projects/${props.params.projectTitle}.png`}
          alt={`project image`}
          width={1000}
          height={1000}
        />
        <h1 className={styles.title}>{data?.title}</h1>

        <div className={styles.linkIcon}>
          <Link href={data!.githubLink}>
            <AiOutlineGithub className={styles.githubIcon} />
          </Link>
          <Link href={data!.liveLink}>
            <AiOutlineLink className={styles.linkIcon} />
          </Link>
        </div>
        <h1 className={styles.title}>About project</h1>
        <h1 className={styles.XLabout}>About project</h1>
        <p className={styles.about}>{data?.about}</p>

        <h1 className={styles.title}>Built with</h1>
        <h1 className={styles.XLTechTitle}>Built with</h1>
        <div className={styles.technologiesContainer}>
          {data?.technologies.map((tech) => (
            <div className={styles.techContainer} key={tech.title} onMouseEnter={()=> handleColorChange(tech.bgcol)} onMouseLeave={()=> resetColor()}>
              {tech.icon}
              <p className={styles.techTitle}>{tech.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectShowPage;
