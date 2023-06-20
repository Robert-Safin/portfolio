import { FC } from 'react'
import styles from './TechonologyCard.module.css'
interface Props {
  icon: any
  name: string
}

const TechnologyCard:FC<Props> = (props) => {
return (
  <div className={styles.container}>
    <div className={styles.fill}>
    {props.icon}
    </div>

    <h1 className={styles.name}>{props.name}</h1>
  </div>
)
}

export default TechnologyCard
