'use client'

import { useState } from 'react'
import { PROJECTS } from '../../data/projects'
import type { Project } from '../../data/projects'
import FilterTabs from './FilterTabs/FilterTabs'
import ProjectCard from './ProjectCard/ProjectCard'
import ProjectModal from './ProjectModal/ProjectModal'
import styles from './ProjectsView.module.scss'

const ALL_CATEGORIES = ['전체', 'Web', 'Mobile']

export default function ProjectsView() {
  const [activeCategory, setActiveCategory] = useState('전체')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filtered =
    activeCategory === '전체'
      ? PROJECTS
      : PROJECTS.filter((p) => p.categories.includes(activeCategory))

  const handleOpen = (project: Project) => setSelectedProject(project)
  const handleClose = () => setSelectedProject(null)

  return (
    <>
      <div className={styles.inner}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>프로젝트</h1>
          <p className={styles.pageSubtitle}>
            다양한 도메인에서 쌓아온 프론트엔드 구현 사례들입니다.
          </p>
        </header>
        <div className={styles.toolbar}>
          <FilterTabs
            categories={ALL_CATEGORIES}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          <div className={styles.viewToggle}>
            <button
              className={`${styles.viewBtn} ${viewMode === 'grid' ? styles.viewBtnActive : ''}`}
              onClick={() => setViewMode('grid')}
              aria-label="그리드 보기"
            >
              ▦
            </button>
            <button
              className={`${styles.viewBtn} ${viewMode === 'list' ? styles.viewBtnActive : ''}`}
              onClick={() => setViewMode('list')}
              aria-label="리스트 보기"
            >
              ☰
            </button>
          </div>
        </div>
        {filtered.length === 0 ? (
          <div className={styles.empty}>
            <p>해당 카테고리의 프로젝트가 없습니다.</p>
          </div>
        ) : (
          <div
            className={`${styles.projectGrid} ${viewMode === 'list' ? styles.listMode : ''}`}
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={handleOpen}
              />
            ))}
          </div>
        )}
      </div>
      <ProjectModal
        project={selectedProject}
        isOpen={selectedProject !== null}
        onClose={handleClose}
      />
    </>
  )
}
