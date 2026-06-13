import styles from './CollaborationCTA.module.scss'

export default function CollaborationCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.headline}>함께 만들어 보실래요?</h2>
        <p className={styles.body}>
          새로운 프로젝트, 협업 제안, 또는 단순한 안부 — 언제든 편하게 연락해 주세요.
        </p>
        <a
          href="mailto:qwep0224@insideinfo.co.kr"
          className={styles.cta}
          rel="noopener noreferrer"
        >
          이메일 보내기
        </a>
      </div>
    </section>
  )
}
