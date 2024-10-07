import { useState } from 'react'

export function DynamicTitle ({ onClick, titles }) {
  const [currentTitles, setTitles] = useState(titles)

  const handleClick = (index) => {
    if (index !== 1) {
      const newTitles = [...currentTitles]
      newTitles.splice(1, 0, ...newTitles.splice(index, 1))
      setTitles(newTitles)
      onClick(newTitles[1].toLowerCase())
    }
  }

  return (
    <h1>
      {
      currentTitles.map((title, index) => (
        <div key={index} className={`title-${index}`}>
          <span onClick={() => handleClick(index)}>{title}</span>
        </div>
      ))
        }
    </h1>
  )
}
