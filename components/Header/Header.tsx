'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import styles from './Header.module.scss'

const NAV_ITEMS: string[] = ['Hello', 'About', 'Skill', 'Folio', 'Contact']

export default function Header() {
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const onScrollMove = (scrollOffset: number, scrollBottom: number): void => {
      if (scrollOffset >= 0 && scrollOffset < 25) {
        setActiveIndex(0)
      } else if (scrollOffset >= 25 && scrollOffset < 48) {
        setActiveIndex(1)
      } else if (scrollOffset >= 48 && scrollOffset < 64) {
        setActiveIndex(2)
      } else if (scrollOffset >= 64 && scrollOffset < scrollBottom) {
        setActiveIndex(3)
      } else if (scrollOffset >= scrollBottom) {
        setActiveIndex(4)
      }
    }

    const handleScroll = (): void => {
      const wrap = document.getElementById('wrap')
      if (!wrap) return
      const wrapHeight = wrap.offsetHeight
      const scrollOffset = Math.ceil((window.scrollY / wrapHeight) * 100)
      const scrollBottom = Math.ceil(
        ((document.documentElement.scrollHeight - window.innerHeight) / wrapHeight) * 100
      )
      onScrollMove(scrollOffset, scrollBottom)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header id="plora-header" className={styles.header}>
      <div className="plora-contents clearfix">
        <h1>
          <a href="#wrap">
            <em className="hide">Soo&apos;s home</em>
            <Image src="/images/logo.png" alt="Soo" width={60} height={35} />
          </a>
        </h1>
        <nav className={styles['plora-nav']}>
          <h2 className="hide">soo&apos;s navigation</h2>
          <ul>
            {NAV_ITEMS.map((item, index) => (
              <li
                key={item}
                className={activeIndex === index ? styles.active : ''}
              >
                <a href={`#${item.toLowerCase()}`}>{item}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
