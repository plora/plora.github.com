'use client'

import { useState } from 'react'
import Image from 'next/image'
import { FEATURED_PROJECTS } from '../../../data/projects'
import type { Project } from '../../../data/projects'
import ProjectModal from '../../Projects/ProjectModal/ProjectModal'
import styles from './ProjectBentoGrid.module.scss'

export default function ProjectBentoGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const handleOpen = (project: Project) => setSelectedProject(project)
  const handleClose = () => setSelectedProject(null)

  return (
    <>
      <section className={styles.section}>
        <div className={styles.inner}>
          <h2 className={styles.sectionTitle}>주요 프로젝트</h2>
          <div className={styles.grid}>
            {FEATURED_PROJECTS.map((project) => (
              <button
                key={project.id}
                className={`${styles.card} ${styles[project.size]}`}
                onClick={() => handleOpen(project)}
                aria-label={`${project.title} 상세 보기`}
              >
                <div className={styles.thumbnail}>
                  <Image
                    src={project.thumbnail}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.cardContent}>
                      <div className={styles.tags}>
                        {project.categories.map((cat) => (
                          <span key={cat} className={styles.tag}>
                            {cat}
                          </span>
                        ))}
                      </div>
                      <h3 className={styles.cardTitle}>{project.title}</h3>
                      <p className={styles.cardDesc}>{project.description}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleClose}
      />
    </>
  )
}
