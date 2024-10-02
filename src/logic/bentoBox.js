import { TIERS } from '@/constants/bentoTiers'

export const getDeck = (collection) => {
  const deck = collection.map(({ tier, content }, index) => {
    const size = getRandomSize(tier)
    const card = {
      id: index,
      content,
      size,
      tier
    }

    return card
  })

  return deck
}

const getRandomSize = (incomingTier) => {
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

export const shuffleCards = (collection) => {
  const length = collection.length
  const currentCollection = [...collection]

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * length)

    currentCollection.splice(i, 0, ...currentCollection.splice(randomNumber, 1))
  }

  return currentCollection
}
