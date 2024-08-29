import { ICONS } from '@/constants/icons'

export function Icon ({ className, size = '2rem', iconID }) {
  const iconProps = ICONS.find(icon => icon.id === iconID)

  return (
    <div className={className}>
      <svg
        role='img'
        aria-hidden='true'
        fill='currentColor'
        height={size}
        width={size}
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
