import { SKILLS } from '../../../data/skills'
import type { Skill, SkillCategory } from '../../../data/skills'
import styles from './SkillChips.module.scss'

interface SkillChipsProps {
  skills?: Skill[]
  groupByCategory?: boolean
}

const CATEGORY_ORDER: SkillCategory[] = [
  'HTML/CSS',
  'JavaScript',
  'Framework',
  'Tools',
  'Design',
]

export default function SkillChips({ skills = SKILLS, groupByCategory = true }: SkillChipsProps) {
  if (!groupByCategory) {
    return (
      <div className={styles.flat}>
        {skills.map((skill) => (
          <span key={skill.name} className={`${styles.chip} ${styles[skill.category.replace('/', '_')]}`}>
            {skill.name}
          </span>
        ))}
      </div>
    )
  }

  return (
    <div className={styles.grouped}>
      {CATEGORY_ORDER.map((category) => {
        const categorySkills = skills.filter((s) => s.category === category)
        if (categorySkills.length === 0) return null
        return (
          <div key={category} className={styles.group}>
            <h3 className={styles.categoryLabel}>{category}</h3>
            <div className={styles.chips}>
              {categorySkills.map((skill) => (
                <span
                  key={skill.name}
                  className={`${styles.chip} ${styles[category.replace('/', '_')]}`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}
