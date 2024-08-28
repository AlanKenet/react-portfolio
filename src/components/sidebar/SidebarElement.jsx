import { Icon } from '@/components/Icon'

export function SidebarElement ({ children, icon }) {
  const iconSize = 24
  return (
    <li>
      <Icon
        iconID={icon}
      />
      <span>{children}</span>
    </li>
  )
}
