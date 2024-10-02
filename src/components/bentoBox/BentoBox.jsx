import { getDeck } from '@/logic/bentoBox'
import { BentoBoxCompartment } from './BentoBoxCompartment'

import '@/components/bentoBox/styles/BentoBox.css'

export function BentoBox ({ component: Wrapper, className, content }) {
  const columns = 3
  const deck = getDeck(content)

  return (
    <div className={`bento-box columns-${columns} ${className}`}>
      {
        deck.map(({ id, size, content }) => (
          <BentoBoxCompartment key={id} size={size}>
            <Wrapper>
              {content}
            </Wrapper>
          </BentoBoxCompartment>
        ))
      }
    </div>
  )
}
