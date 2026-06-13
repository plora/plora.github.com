'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.scss'

const NAV_ITEMS = [
  { label: '메인', href: '/' },
  { label: '프로젝트', href: '/projects' },
  { label: '소개', href: '/about' },
  { label: '문의', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuToggle = () => {
    setIsMobileMenuOpen((prev) => !prev)
  }

  const handleNavClick = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      id="plora-header"
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
    >
      <div className={styles.inner}>
        <h1 className={styles.logo}>
          <Link href="/" onClick={handleNavClick}>
            <em className="hide">Soo&apos;s Portfolio</em>
            <Image src="/images/logo.png" alt="Soo" width={60} height={35} />
          </Link>
        </h1>
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.open : ''}`}
          onClick={handleMenuToggle}
          aria-label="메뉴 열기/닫기"
          aria-expanded={isMobileMenuOpen}
        >
          <span />
          <span />
          <span />
        </button>
        <nav
          className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}
          aria-label="메인 네비게이션"
        >
          <ul>
            {NAV_ITEMS.map(({ label, href }) => (
              <li key={href} className={pathname === href ? styles.active : ''}>
                <Link href={href} onClick={handleNavClick}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
