import { ICONS } from '@/constants/icons'

export function Icon ({ className, size, iconID }) {
  const iconProps = ICONS.find(icon => icon.id === iconID)

  const sizeIcon = size?.toString() || '2rem'

  return (
    <div className={className}>
      <svg
        role='img'
        aria-hidden='true'
        fill='currentColor'
        height={sizeIcon}
        width={sizeIcon}
        {...iconProps.svgAttributes}
      >
        {
          iconProps.path.map((d, index) => (
            <path key={index} d={d} />
          ))
        }
      </svg>
    </div>
  )
}
