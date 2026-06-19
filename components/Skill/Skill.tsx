import styles from './Skill.module.scss'

const SKILLS: string[] = ['HTML', 'CSS', 'SCSS', 'JS']

export default function Skill() {
  return (
    <section id="skill" className={styles.skill}>
      <div className="plora-contents">
        <div className="plora-title">
          <h2>Skills</h2>
        </div>
        <div className="plora-cont">
          <p>HTML/HTML5 시멘틱 태그 뿐만 아니라</p>
          <p>CSS/CSS3 스타일을 사용하여 작업하며</p>
          <p>
            javascript(es3 및 문법 es5,es6),jquery와 프레임워크(REACT/REDUX)를
            함께
          </p>
          <p>사이트를 인터랙티브하게 만듭니다.</p>
          <ul className={`plora-skill clearfix ${styles['plora-skill']}`}>
            {SKILLS.map((skill) => (
              <li key={skill}>
                <strong>{skill}</strong>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
