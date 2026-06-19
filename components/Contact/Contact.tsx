import styles from './Contact.module.scss'

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className="plora-contents">
        <div className="plora-title">
          <h2>contact</h2>
        </div>
        <div className={`plora-cont clearfix ${styles.cont}`}>
          <dl>
            <dt>Kakao talk</dt>
            <dd>plorasoo</dd>
          </dl>
          <dl>
            <dt>Email</dt>
            <dd>
              <a href="mailto:dkidldfdy@naver.com">dkidldfdy@naver.com</a>
            </dd>
          </dl>
          <dl>
            <dt>contact me</dt>
            <dd>
              <a
                href="http://soo27.cafe24.com/contact.html"
                target="_blank"
                rel="noopener noreferrer"
              >
                location
              </a>
            </dd>
          </dl>
        </div>
      </div>
    </section>
  )
}
