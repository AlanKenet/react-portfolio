import { Icon } from '@/components/Icon'

export function BarPiece ({ children, icon }) {
  const iconSize = '1.75rem'
  return (
    <li>
      <Icon
        iconID={icon}
        size={iconSize}
      />
      <span>{children}</span>
    </li>
  )
}
