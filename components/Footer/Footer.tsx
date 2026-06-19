import styles from './Footer.module.scss'

export default function Footer() {
  return (
    <footer id="plora-footer" className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copyright}>
          Copyright &copy; 2025 Sumi. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
