import { BarTitle } from './BarTitle'
import { BarRepertory } from './BarRepertory'
import { BarConfigs } from './BarConfigs'

import './styles/Navbar.css'

export function Navbar () {
  return (
    <header className='header'>
      <nav className='navbar'>
        <BarTitle className='navbar-title' />
        <BarRepertory className='navbar-list' />
        <BarConfigs className='navbar-configs' />
      </nav>
    </header>
  )
}
