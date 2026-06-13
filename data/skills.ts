export type SkillCategory = 'HTML/CSS' | 'JavaScript' | 'Framework' | 'Tools' | 'Design'

export interface Skill {
  name: string
  category: SkillCategory
}

export const SKILLS: Skill[] = [
  { name: 'HTML5', category: 'HTML/CSS' },
  { name: 'CSS3', category: 'HTML/CSS' },
  { name: 'SCSS', category: 'HTML/CSS' },
  { name: 'CSS Modules', category: 'HTML/CSS' },
  { name: 'JavaScript', category: 'JavaScript' },
  { name: 'TypeScript', category: 'JavaScript' },
  { name: 'ES6+', category: 'JavaScript' },
  { name: 'jQuery', category: 'JavaScript' },
  { name: 'React', category: 'Framework' },
  { name: 'Next.js', category: 'Framework' },
  { name: 'Redux', category: 'Framework' },
  { name: 'Git', category: 'Tools' },
  { name: 'GitHub', category: 'Tools' },
  { name: 'Webpack', category: 'Tools' },
  { name: 'npm', category: 'Tools' },
  { name: 'Figma', category: 'Design' },
  { name: 'Zeplin', category: 'Design' },
]
