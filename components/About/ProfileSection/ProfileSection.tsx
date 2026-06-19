import Image from 'next/image'
import styles from './ProfileSection.module.scss'

export default function ProfileSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/bg_about.png"
            alt="안수미 프로필"
            width={280}
            height={280}
            className={styles.profileImage}
          />
        </div>
        <div className={styles.bio}>
          <h2 className={styles.name}>안수미</h2>
          <p className={styles.role}>Frontend Developer &amp; Web Publisher</p>
          <div className={styles.description}>
            <p>
              안녕하세요. 인터랙티브 퍼블리셔 안수미입니다.
            </p>
            <p>
              웹표준과 접근성을 기반으로, 사용자 경험을 설계하고 구현합니다.
              꼼꼼한 마크업과 디자인 구현력, 원활한 협업으로
              팀과 함께 가치를 만들어 가겠습니다.
            </p>
            <p>
              항상 성장 가능성을 믿으며,
              좋은 코드와 좋은 협업이 좋은 서비스를 만든다고 생각합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
