import { BarPiece } from './BarPiece'

import { BAR_ELEMENTS } from '@/constants/barElements'

export function BarRepertory ({ className }) {
  return (
    <ul className={className}>
      {
          BAR_ELEMENTS.map(({ id, title }) => (
            <BarPiece key={id}>
              {title}
            </BarPiece>
          ))
        }
    </ul>
  )
}
