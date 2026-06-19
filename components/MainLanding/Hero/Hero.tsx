import Image from 'next/image'
import Link from 'next/link'
import styles from './Hero.module.scss'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            Front-end Developer &amp; Publisher
          </div>
          <h1 className={styles.headline}>
            UI/UX를 이해하는
            <br />
            <span>프론트엔드 개발자</span>,<br />
            안수미입니다.
          </h1>
          <p className={styles.subtitle}>
            디자인 시스템과 인터랙션의 미묘한 차이를 코드로 구현합니다.
            사용자에게 매끄럽고 기분 좋은 경험을 제공하는 것에 집중하며,
            디자이너와 협업하는 것을 즐깁니다.
          </p>
          <div className={styles.cta}>
            <Link href="/projects" className={styles.ctaPrimary}>
              프로젝트 보기
            </Link>
            <Link href="/about" className={styles.ctaSecondary}>
              문의하기
            </Link>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <div className={styles.visualBg} />
          <div className={styles.imgBlob}>
            <Image
              src="/images/hero_visual.jpg"
              alt="작업 환경"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
              quality={90}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
