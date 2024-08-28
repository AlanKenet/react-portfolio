import { ContentSection } from './ContentSection'

import { Home } from '@/pages/home/Home'
import { About } from '@/pages/about/About'
import { Experience } from '@/pages/experience/Experience'
import { Contact } from '@/pages/contact/Contact'

const actualPage = ['home', 'about', 'experience', 'contact']

export function ContentViewer () {
  return (
    <main className='content-viewer'>
      <ContentSection classes={`${actualPage[0]}-section`}>
        <Home />
      </ContentSection>
      <ContentSection classes={`${actualPage[1]}-section`}>
        <About />
      </ContentSection>
      <ContentSection classes={`${actualPage[2]}-section`}>
        <Experience />
      </ContentSection>
      <ContentSection classes={`${actualPage[3]}-section`}>
        <Contact />
      </ContentSection>
    </main>
  )
}
