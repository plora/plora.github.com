export interface CareerItem {
  period: string
  company: string
  role: string
  description?: string
}

export const CAREERS: CareerItem[] = [
  {
    period: '2021.04 – 현재',
    company: '사람인HR (Saramin HR)',
    role: 'Frontend Developer / Web Publisher',
    description:
      'Vue, Nuxt.js, React, Next.js 기반 기업 서비스 프론트엔드 개발 및 퍼블리싱. 채용센터, 긱, 포스티니, 빌링관리 등 주요 서비스 UI 구현. 디자인 시스템 컴포넌트 라이브러리 기여.',
  },
  {
    period: '2019.12 – 2021.03',
    company: '델레오 (Deleo)',
    role: 'Frontend Developer / Web Publisher',
    description:
      '기업 웹사이트 및 모바일 웹 퍼블리싱. B2B 어드민 사이트 퍼블리싱. Vue.js 기반 프로젝트 개발.',
  },
  {
    period: '2013.04 – 2019.11',
    company: '웹 에이전시 및 IT 기업',
    role: 'Web Publisher',
    description:
      'PDsoft, Cafe24 스킨, ENPgames, SewonIT, ARC(Mobigo) 등 다양한 클라이언트 웹 퍼블리싱 및 UI 구현.',
  },
]
