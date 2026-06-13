export interface CareerItem {
  period: string
  company: string
  role: string
  description?: string
}

export const CAREERS: CareerItem[] = [
  {
    period: '2021.03 – 현재',
    company: '사람인HR (Saramin HR)',
    role: 'Frontend Developer / Web Publisher',
    description:
      'React + Next.js 기반 기업 서비스 프론트엔드 개발 및 퍼블리싱. 채용센터, 긱, 포스티니, 빌링관리 등 주요 서비스 UI 구현. 디자인 시스템 컴포넌트 라이브러리 기여.',
  },
  {
    period: '2019.06 – 2021.02',
    company: '더플랩 (The PL Lab)',
    role: 'Web Publisher',
    description:
      'HR 미디어·플랫폼 서비스 퍼블리싱. 인뎁스, 커넥트, 레퍼런스, 어바웃 등 B2B 서비스 반응형 마크업 및 SCSS 스타일링.',
  },
  {
    period: '2018.01 – 2019.05',
    company: '딜레오 (Deleo)',
    role: 'Web Publisher',
    description:
      '다양한 기업 웹사이트 및 모바일 웹 퍼블리싱. 반응형 레이아웃, 크로스브라우저 대응, 접근성 마크업 작업.',
  },
  {
    period: '2015.03 – 2017.12',
    company: '프리랜서 / 에이전시',
    role: 'Web Publisher',
    description:
      'PDsoft, Cafe24 스킨, ENPgames, SewonIT, ARC(Mobigo) 등 다양한 클라이언트 웹 퍼블리싱 및 UI 구현.',
  },
]
