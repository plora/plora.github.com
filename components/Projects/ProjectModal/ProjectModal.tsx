'use client'

import { useEffect, useCallback } from 'react'
import Image from 'next/image'
import type { Project } from '../../../data/projects'
import styles from './ProjectModal.module.scss'

interface ProjectModalProps {
  project: Project | null
  isOpen: boolean
  onClose: () => void
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const handleEscKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose]
  )

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleEscKey)
    } else {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscKey)
    }
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isOpen, handleEscKey])

  if (!isOpen || !project) return null

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className={styles.overlay}
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className={styles.panel}>
        <button className={styles.closeButton} onClick={onClose} aria-label="모달 닫기">
          <span aria-hidden="true">×</span>
        </button>
        <div className={styles.thumbnail}>
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className={styles.body}>
          <div className={styles.tags}>
            {project.categories.map((cat) => (
              <span key={cat} className={styles.tag}>
                {cat}
              </span>
            ))}
          </div>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.detail ?? project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              프로젝트 보기 →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
