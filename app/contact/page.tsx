import type { Metadata } from 'next'
import ContactForm from '../../components/Contact/ContactForm/ContactForm'
import styles from './page.module.scss'

export const metadata: Metadata = {
  title: "Contact – Soo's Portfolio",
  description: '안수미 웹 퍼블리셔에게 문의하기',
}

export default function ContactPage() {
  return (
    <div className={styles.page}>
      <div className={styles.inner}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>문의하기</h1>
          <p className={styles.pageSubtitle}>
            프로젝트 협업이나 채용 문의는 아래 양식 또는{' '}
            <a
              href="mailto:qwep0224@insideinfo.co.kr"
              className={styles.emailLink}
            >
              이메일
            </a>
            로 연락해 주세요.
          </p>
        </header>
        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </div>
  )
}
