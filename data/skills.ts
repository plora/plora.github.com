export type SkillCategory =
  | 'HTML/CSS'
  | 'JavaScript'
  | 'Framework'
  | 'Tools'
  | 'Design'
  | 'Package Manager'

export interface Skill {
  name: string
  category: SkillCategory
}

export const SKILLS: Skill[] = [
  { name: 'HTML5', category: 'HTML/CSS' },
  { name: 'CSS3', category: 'HTML/CSS' },
  { name: 'SCSS', category: 'HTML/CSS' },
  { name: 'Tailwind CSS', category: 'HTML/CSS' },
  { name: 'Styled Components', category: 'HTML/CSS' },
  { name: 'JavaScript', category: 'JavaScript' },
  { name: 'TypeScript', category: 'JavaScript' },
  { name: 'Zustand', category: 'JavaScript' },
  { name: 'ES6+', category: 'JavaScript' },
  { name: 'jQuery', category: 'JavaScript' },
  { name: 'Vue', category: 'Framework' },
  { name: 'Nuxt.js', category: 'Framework' },
  { name: 'React', category: 'Framework' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'GitLab', category: 'Tools' },
  { name: 'Webpack', category: 'Tools' },
  { name: 'Storybook', category: 'Tools' },
  { name: 'npm', category: 'Package Manager' },
  { name: 'yarn', category: 'Package Manager' },
  { name: 'Figma', category: 'Design' },
  { name: 'Zeplin', category: 'Design' },
  { name: 'Adobe Photoshop', category: 'Design' },
]
