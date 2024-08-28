export const getElements = (colection, requiredOf, initFrom = 0) => {
  const elements = colection.filter((element, index) => (
    (index >= initFrom) && (index < (initFrom + requiredOf))
  ))

  return elements
}

export const getUniqueValuesFrom = (colection, from) => {
  const uniqueValues = []

  for (const element of colection) {
    if (!uniqueValues.includes(element[from])) {
      uniqueValues.push(element[from])
    }
  }

  return uniqueValues
}
