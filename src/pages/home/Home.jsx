import { SocialMediaBar } from '@home/components/SocialMediaBar'

import '@home/styles/Home.css'

export function Home () {
  return (
    <>
      <header className='home-header'>
        <h1 className='home-titles'>
          <span className='text-white'>Alan Kenet</span>
          <span className='text-base'>.</span>
          <br /><span className='text-light'>Front End Dev.</span>
        </h1>
      </header>
      <footer className='home-footer'>
        <button className='home-button'>Contact me</button>
        <SocialMediaBar />
      </footer>
    </>
  )
}
