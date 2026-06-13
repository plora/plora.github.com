import Hello from '../components/Hello/Hello'
import About from '../components/About/About'
import Skill from '../components/Skill/Skill'
import Folio from '../components/Folio/Folio'
import Contact from '../components/Contact/Contact'

export default function HomePage() {
  return (
    <main id="plora-container">
      <Hello />
      <About />
      <Skill />
      <Folio />
      <Contact />
      <footer id="plora-footer">
        <div className="plora-contents">
          <p>Copyright © 2018 Sumi. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  )
}
