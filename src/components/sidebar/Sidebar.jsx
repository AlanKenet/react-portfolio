import { SidebarTitle } from './SidebarTitle'
import { SidebarElement } from './SidebarElement'

import { SIDEBAR_ELEMENTS } from '@/constants/sidebarElements'

export function Sidebar () {
  return (
    <nav className='sidebar'>
      <SidebarTitle />
      <ul className='sidebar-list'>
        {
          SIDEBAR_ELEMENTS.map(({ id, title, icon }) => (
            <SidebarElement key={id} icon={icon}>
              {title}
            </SidebarElement>
          ))
        }
      </ul>
    </nav>
  )
}
