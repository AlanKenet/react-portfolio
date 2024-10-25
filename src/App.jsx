import { Navbar } from '@/components/bar/Navbar'
import { ContentViewer } from '@/components/contentViewer/ContentViewer'
import { Footer } from '@/components/Footer'

import '@/styles/App.css'

export default function App () {
  return (
    <div className='app'>
      <Navbar />
      <ContentViewer />
      <Footer />
    </div>
  )
}
