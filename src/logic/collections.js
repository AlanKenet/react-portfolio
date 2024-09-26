export const getElements = (collection, requiredOf, initFrom = 0) => {
  const elements = collection.filter((element, index) => (
    (index >= initFrom) && (index < (initFrom + requiredOf))
  ))

  return elements
}

export const getUniqueValuesFrom = (collection, from) => {
  const uniqueValues = []

  for (const element of collection) {
    if (!uniqueValues.includes(element[from])) {
      uniqueValues.push(element[from])
    }
  }

  return uniqueValues
}
