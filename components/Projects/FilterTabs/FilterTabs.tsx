import styles from './FilterTabs.module.scss'

interface FilterTabsProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterTabs({ categories, activeCategory, onCategoryChange }: FilterTabsProps) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="프로젝트 카테고리 필터">
      {categories.map((category) => (
        <button
          key={category}
          className={`${styles.tab} ${activeCategory === category ? styles.active : ''}`}
          onClick={() => onCategoryChange(category)}
          role="tab"
          aria-selected={activeCategory === category}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
