import { getRandomSize } from '@about/logic/bento'

import '@about/styles/AboutCard.css'

export function AboutCard ({ children, tier }) {
  const size = getRandomSize(tier)

  return (
    <article className={`about-card ${size}`}>
      <h1>
        {children}
      </h1>
    </article>
  )
}
