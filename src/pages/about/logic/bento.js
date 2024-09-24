import { TIERS } from '@about/constants/bentoTiers'

export const getRandomSize = (incomingTier) => {
  const tier = (TIERS.find(tier => tier.tier === incomingTier))
  const sizesRatio = Object.entries(tier.sizesRatio)
  const randomNumber = Math.floor(Math.random() * 100)

  let randomSize

  sizesRatio.reduce((floor, [size, ratio]) => {
    const ceiling = floor + (ratio * 100)
    if (randomNumber >= floor && randomNumber < ceiling) {
      randomSize = size
    }
    return ceiling
  }, 0)

  return randomSize
}
