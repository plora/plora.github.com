import Image from 'next/image'
import styles from './ProfileSection.module.scss'

export default function ProfileSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.visual}>
          <div className={styles.visualBg} aria-hidden="true" />
          <div className={styles.imgBlob}>
            <Image
              src="/images/profile.jpg"
              alt="안수미 프로필"
              fill
              sizes="(max-width: 768px) 200px, 280px"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className={styles.profileImage}
            />
          </div>
        </div>
        <div className={styles.bio}>
          <h2 className={styles.name}>안수미</h2>
          <p className={styles.role}>Frontend Developer &amp; Web Publisher</p>
          <div className={styles.description}>
            <p>안녕하세요. 프론트 개발자 &amp; 웹 퍼블리셔 안수미입니다.</p>
            <p>
              웹표준을 지키며 시맨틱 마크업으로 디자인을 구현하고, 다양한
              프레임워크와 기술로 UI를 개발합니다.
            </p>
            <p>
              퍼블리싱에서 쌓은 경험을 바탕으로 디자인·기획·백엔드 팀과
              협업합니다. 좋은 코드와 좋은 협업이 좋은 서비스로 이어진다고
              믿으며, 항상 성장 가능성을 열어두고 더 나은 결과를 만들어
              가겠습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
