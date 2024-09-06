import { Navbar } from '@/components/bar/Navbar'
import { ContentViewer } from '@/components/contentViewer/ContentViewer'

import '@/styles/App.css'

export default function App () {
  return (
    <div className='app'>
      <Navbar />
      <ContentViewer />
    </div>
  )
}
