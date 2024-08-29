import { getElements, getUniqueValuesFrom } from '@/logic/colections'

import { ALL_EXPERIENCE } from '@/constants/experience'

export const getCategories = () => {
  return getUniqueValuesFrom(ALL_EXPERIENCE, 'category')
}

export const updateExperience = (category, initIndex = 0) => {
  let newExperience = ALL_EXPERIENCE.filter(experience => experience.category === category)

  if (newExperience.length > 3) newExperience = getElements(newExperience, 3, initIndex)

  return newExperience
}
