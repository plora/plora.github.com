import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Plus_Jakarta_Sans, Be_Vietnam_Pro } from 'next/font/google'
import './globals.scss'
import SkipNav from '../components/SkipNav/SkipNav'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  display: 'swap',
})

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-vietnam',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Soo's Portfolio",
  description: '웹표준과 접근성을 지키며 사용자 경험을 설계하는 인터랙티브 퍼블리셔 안수미의 포트폴리오',
  keywords: '웹 퍼블리셔,퍼블리셔,포트폴리오,portfolio,web publisher,web publishing,Soo,soo,안수미',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko" className={`${plusJakartaSans.variable} ${beVietnamPro.variable}`}>
      <body>
        <SkipNav />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
