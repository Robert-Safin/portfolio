import { FC } from 'react'
import styles from './ProjectCard.module.css'
import Image from 'next/image'
interface Props {
  title: string
  handleBackgroundColorChange: (color: any) => void
  color: any
  resetBackgroundColor: () => void

}
const ProjectCard:FC<Props> = (props) => {
return (
  <div className={styles.container} onMouseEnter={() => props.handleBackgroundColorChange(props.color)} onMouseLeave={props.resetBackgroundColor}>

    <Image className={styles.image} src={`/me.png`} alt={'project'} width={400} height={400}/>
    <p className={styles.title}>{props.title}</p>
  </div>
)
}

export default ProjectCard
