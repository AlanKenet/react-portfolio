import { Icon } from '@/components/Icon'

export function SwitchLight ({ light = true }) {
  const icon = 'icon-sun-fill'
  const iconSize = '1.5rem'

  return (
    <li>
      <Icon
        iconID={icon}
        size={iconSize}
      />
    </li>
  )
}
