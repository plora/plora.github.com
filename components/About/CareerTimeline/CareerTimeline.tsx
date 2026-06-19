import { CAREERS } from '../../../data/careers'
import styles from './CareerTimeline.module.scss'

export default function CareerTimeline() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>경력</h2>
      <ol className={styles.timeline}>
        {CAREERS.map((item, index) => (
          <li key={index} className={styles.item}>
            <div className={styles.dot} aria-hidden="true" />
            <div className={styles.content}>
              <span className={styles.period}>{item.period}</span>
              <h3 className={styles.company}>{item.company}</h3>
              <p className={styles.role}>{item.role}</p>
              {item.description && (
                <p className={styles.description}>{item.description}</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
