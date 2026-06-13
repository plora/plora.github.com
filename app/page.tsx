import type { Metadata } from 'next'
import Hero from '../components/MainLanding/Hero/Hero'
import ProjectBentoGrid from '../components/MainLanding/ProjectBentoGrid/ProjectBentoGrid'
import CollaborationCTA from '../components/MainLanding/CollaborationCTA/CollaborationCTA'

export const metadata: Metadata = {
  title: "Soo's Portfolio",
  description: '웹표준과 접근성을 지키며 사용자 경험을 설계하는 인터랙티브 퍼블리셔 안수미의 포트폴리오',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProjectBentoGrid />
      <CollaborationCTA />
    </>
  )
}
