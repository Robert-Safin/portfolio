import { FC } from 'react'
import styles from './EducationCard.module.css'

interface Props {

}

const EducationCard:FC<Props> = () => {
  return (
    <div className={styles.container}>
      <p className={styles.year}>year</p>
      <p className={styles.title}>title</p>
      <p className={styles.location}>location</p>
    </div>
  )
}

export default EducationCard
