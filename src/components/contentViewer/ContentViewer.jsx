import { ContentSection } from './ContentSection'

import { Home } from '@/pages/home/Home'
import { About } from '@/pages/about/About'
import { Experience } from '@/pages/experience/Experience'
import { Contact } from '@/pages/contact/Contact'

import './styles/ContentViewer.css'

const actualPage = ['home', 'about', 'experience', 'contact']

export function ContentViewer () {
  return (
    <main className='content-viewer'>
      <ContentSection section={actualPage[0]}>
        <Home />
      </ContentSection>
      <ContentSection section={actualPage[1]}>
        <About />
      </ContentSection>
      <ContentSection section={actualPage[2]}>
        <Experience />
      </ContentSection>
      <ContentSection section={actualPage[3]}>
        <Contact />
      </ContentSection>
    </main>
  )
}
