import { useState } from 'react'

export function DynamicTitle ({ onMouseEnter, titles }) {
  const [currentTitles, setTitles] = useState(titles)

  const handleHover = (index) => {
    if (index !== 1) {
      const newTitles = [...currentTitles]
      newTitles.splice(1, 0, ...newTitles.splice(index, 1))
      setTitles(newTitles)
      onMouseEnter(newTitles[1])
    }
  }

  return (
    <h1 className='page-title'>
      {
    currentTitles.map((title, index) => (
      <div key={index} className={`title-${index}`}>
        <span onMouseEnter={() => handleHover(index)}>{title}</span>
      </div>
    ))
        }
    </h1>
  )
}
