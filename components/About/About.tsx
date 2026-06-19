import styles from './About.module.scss'

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="plora-contents">
        <div className="plora-title">
          <h2>About Me</h2>
        </div>
        <div className={`plora-cont ${styles.cont}`}>
          <p>안녕하세요. 인터랙티브 퍼블리셔 안수미입니다.</p>
          <p>항상 발전 가능성있고,</p>
          <p>사람들과의 커뮤니케이션을 중요하게 여기며,</p>
          <p>꼼꼼하게 일하는 프론트 전문가가 되겠습니다.</p>
        </div>
      </div>
    </section>
  )
}
