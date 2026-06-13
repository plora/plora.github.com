import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.scss'
import SkipNav from '../components/SkipNav/SkipNav'
import Header from '../components/Header/Header'

export const metadata: Metadata = {
  title: "soo's 퍼블리셔",
  description: '쑤 웹퍼블리셔 웹표준 반응형웹 웹접근성 웹최적화 포트폴리오',
  keywords:
    '웹 퍼블리셔,퍼블리셔,포트폴리오,porfolio,web publisher,web publishing,Soo,soo',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ko">
      <body>
        <SkipNav />
        <div id="wrap">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
