import { Icon } from '@/components/Icon'

import '@/styles/animations.css'

export function SocialMediaBarElement ({ className, url, icon }) {
  const iconSize = '3rem'
  return (
    <li>
      <a href={url}>
        <Icon
          className={className}
          iconID={icon}
          size={iconSize}
        />
      </a>
    </li>
  )
}
