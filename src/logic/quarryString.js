export const getLineBreaks = (text, charsPerLine) => {
  const regex = /\n/g
  const textParagraphs = text.split('\n')
  const explicitLineBreaks = [...text.matchAll(regex)].length

  const lineBreaks = textParagraphs.reduce((lineBreaks, paragraph) => {
    const length = paragraph.length
    if (length > 0) {
      lineBreaks += Math.ceil(length / charsPerLine) - 1
    }
    return lineBreaks
  }, explicitLineBreaks)

  return lineBreaks
}
