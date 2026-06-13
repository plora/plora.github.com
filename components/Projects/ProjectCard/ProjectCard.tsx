import Image from 'next/image'
import type { Project } from '../../../data/projects'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
  project: Project
  onClick: (project: Project) => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <button
      className={styles.card}
      onClick={() => onClick(project)}
      aria-label={`${project.title} 상세 보기`}
    >
      <div className={styles.thumbnail}>
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.tags}>
          {project.categories.map((cat) => (
            <span key={cat} className={styles.tag}>
              {cat}
            </span>
          ))}
        </div>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
    </button>
  )
}
