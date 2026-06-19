import type { Metadata } from 'next'
import ProfileSection from '../../components/About/ProfileSection/ProfileSection'
import SkillChips from '../../components/About/SkillChips/SkillChips'
import CareerTimeline from '../../components/About/CareerTimeline/CareerTimeline'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: "About – Soo's Portfolio",
  description: '안수미 웹 퍼블리셔 소개 및 기술 스택, 경력 타임라인',
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <ProfileSection />
      <div className={styles.sections}>
        <section className={styles.skillSection}>
          <h2 className={styles.sectionTitle}>기술 스택</h2>
          <SkillChips />
        </section>
        <CareerTimeline />
      </div>
    </div>
  )
}
