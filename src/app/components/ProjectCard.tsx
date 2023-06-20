import { FC } from 'react'
import styles from './ProjectCard.module.css'
import Image from 'next/image'
interface Props {

}
const ProjectCard:FC<Props> = () => {
return (
  <div className={styles.container}>
    <Image className={styles.image} src={`/me.png`} alt={'project'} width={400} height={400}/>
    <p className={styles.title}>Title</p>
  </div>
)
}

export default ProjectCard
