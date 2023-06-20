import { FC } from 'react'
import styles from './EducationCard.module.css'

interface Props {
  year: string
  title: string
  location: string

}

const EducationCard:FC<Props> = (props) => {
  return (
    <div className={styles.container}>
      <p className={styles.year}>{props.year}</p>
      <p className={styles.title}>{props.title}</p>
      <p className={styles.location}>{props.location}</p>
    </div>
  )
}

export default EducationCard
