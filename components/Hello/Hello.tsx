'use client'

import { useState, useEffect } from 'react'
import styles from './Hello.module.scss'

const SLIDES: string[] = ['안녕하세요 :)', '웹 표준', '웹 접근성', '웹 최적화']

export default function Hello() {
  const [currentIndex, setCurrentIndex] = useState<number>(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="hello" className={styles.hello}>
      <h2 className="hide">Hello</h2>
      <div className="plora-contents">
        <div className={styles['plora-main-slider']}>
          <ul style={{ transform: `translateY(-${currentIndex * 100}px)` }}>
            {SLIDES.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        </div>
        <div className={styles['plora-btn']}>
          <p>
            <a href="#about">Here Me</a>
          </p>
        </div>
      </div>
    </section>
  )
}
