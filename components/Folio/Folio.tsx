'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import Image from 'next/image'
import styles from './Folio.module.scss'

interface Project {
  id: string
  image: string
  alt: string
  name: string
  href: string
}

const projects: Project[] = [
  { id: 'hanjeon', image: '/images/hanjeon.png', alt: 'pdsoft 포트폴리오', name: 'PDsoft', href: 'http://www.kepid.co.kr/kepid/index.asp' },
  { id: 'mobile', image: '/images/mobile.jpg', alt: 'Cafe24 포트폴리오', name: 'Cafe24', href: 'http://skin-mobile6.plorasoo26.cafe24.com/' },
  { id: 'aor', image: '/images/aor.jpg', alt: 'ENPgames 포트폴리오', name: 'ENPgames', href: 'http://www.pupugame.com/' },
  { id: 'bdmobile', image: '/images/bdmobile.jpg', alt: 'Pearlabyss 포트폴리오', name: 'Pearlabyss', href: 'https://www.pearlabyss.com/' },
  { id: 'kcg', image: '/images/kcg.jpg', alt: 'SewonIT 포트폴리오', name: 'SewonIT', href: 'http://soo27.cafe24.com/anyone/kcg-index.html' },
  { id: 'mobigo', image: '/images/mobigo.png', alt: 'ARC 포트폴리오', name: 'ARC', href: 'https://www.mobigo.co.kr/' },
  { id: 'deleo', image: '/images/deleo.jpg', alt: 'Deleo 포트폴리오', name: 'Deleo', href: 'http://soo27.cafe24.com/' },
  { id: 'thepllab', image: '/images/thepllab.png', alt: '더플랩 포트폴리오', name: '더플랩', href: 'https://about.thepllab.com/' },
  { id: 'connect', image: '/images/connect.png', alt: '더플랩 커넥트 포트폴리오', name: '더플랩-커넥트', href: 'https://connect.thepllab.com/' },
  { id: 'ref', image: '/images/ref.png', alt: '더플랩 레퍼런스 포트폴리오', name: '더플랩-레퍼런스', href: 'https://ref.indepth.thepllab.com/' },
  { id: 'indepth', image: '/images/indepth.png', alt: '더플랩 인뎁스 포트폴리오', name: '더플랩-인뎁스', href: 'https://indepth.thepllab.com/' },
  { id: 'insight', image: '/images/insight.png', alt: '더플랩 인사이트 포트폴리오', name: '더플랩-인사이트', href: 'https://thepllab.com/' },
  { id: 'gig', image: '/images/gig.png', alt: '사람인 긱 포트폴리오', name: '사람인 긱', href: 'https://gig.saramin.co.kr/' },
  { id: 'preview', image: '/images/preview.png', alt: '사람인 인적성 포트폴리오', name: '사람인 기업-인적성', href: 'https://preview.saramin.co.kr/' },
  { id: 'billing-manage', image: '/images/billing-manage.jpg', alt: '사람인 기업-빌링관리 포트폴리오', name: '사람인 기업-빌링관리', href: 'https://billing.saramin.co.kr/manage/' },
  { id: 'business', image: '/images/business.jpg', alt: '사람인 기업-비지니스 포트폴리오', name: '사람인 기업-비지니스', href: 'https://business.saramin.co.kr/' },
  { id: 'hiring', image: '/images/hiring.png', alt: '사람인 기업-채용센터 포트폴리오', name: '사람인 기업-채용센터', href: 'https://hiring.saramin.co.kr/home' },
  { id: 'calendar', image: '/images/calendar.png', alt: '사람인 개인-채용달력 포트폴리오', name: '사람인 개인-채용달력', href: 'https://calendar.saramin.co.kr/' },
  { id: 'cover-letter', image: '/images/cover-letter.png', alt: '사람인 개인-자소서 포트폴리오', name: '사람인 개인-자소서', href: 'https://cover-letter.saramin.co.kr/list/1' },
  { id: 'fostiny', image: '/images/fostiny.png', alt: '포스티니 포트폴리오', name: '포스티니', href: 'https://fostiny.saramin.co.kr/' },
]

export default function Folio() {
  return (
    <section id="folio" className={styles.folio}>
      <div className="plora-contents">
        <div className="plora-title">
          <h2>Portfolio</h2>
        </div>
        <div className={`plora-cont ${styles.cont}`}>
          <p className={styles['plora-btn']}>
            <a
              href="http://soo27.cafe24.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              전체 보기
            </a>
          </p>
          <Swiper
            modules={[Navigation]}
            navigation
            loop
            spaceBetween={10}
            breakpoints={{
              0: { slidesPerView: 1 },
              767: { slidesPerView: 3 },
              991: { slidesPerView: 5 },
            }}
            className={styles['plora-folio-slider']}
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id} className={`item ${styles.item}`}>
                <h1 className="hide">{project.name}</h1>
                <div className={styles['folio-image']}>
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 767px) 100vw, (max-width: 991px) 33vw, 20vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p>
                    <strong>{project.name}</strong>
                  </p>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
