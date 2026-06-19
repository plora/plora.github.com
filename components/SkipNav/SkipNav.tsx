import styles from './SkipNav.module.scss'

export default function SkipNav() {
  return (
    <div id="plora-skip-nav" className={styles['skip-nav']}>
      <ul>
        <li>
          <a href="#plora-header">상단 메뉴로 바로가기</a>
        </li>
        <li>
          <a href="#main-content">컨텐츠 영역으로 바로가기</a>
        </li>
        <li>
          <a href="#plora-footer">하단 메뉴로 바로가기</a>
        </li>
      </ul>
    </div>
  )
}
