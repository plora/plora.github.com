import type { Metadata } from 'next'
import ProjectsView from '../../components/Projects/ProjectsView'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: "Projects – Soo's Portfolio",
  description: '안수미 웹 퍼블리셔 프로젝트 포트폴리오 목록',
}

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <ProjectsView />
    </div>
  )
}
