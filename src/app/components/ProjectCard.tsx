import { FC } from 'react'
import styles from './ProjectCard.module.css'
import Image from 'next/image'
import Link from 'next/link'
interface Props {
  title: string
  handleBackgroundColorChange: (color: any) => void
  color: any
  resetBackgroundColor: () => void
  imageSrc: string

}
const ProjectCard:FC<Props> = (props) => {
return (
  <Link href={`/projects/${props.title}`}>
  <div className={styles.container} onMouseEnter={() => props.handleBackgroundColorChange(props.color)} onMouseLeave={props.resetBackgroundColor}>
    <Image className={styles.image} src={props.imageSrc} alt={'project'} width={400} height={400}/>
    <p className={styles.title}>{props.title}</p>
  </div>
  </Link>
)
}

export default ProjectCard
