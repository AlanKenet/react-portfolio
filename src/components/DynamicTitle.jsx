import { useState } from 'react'

export function DynamicTitle ({ onClick, titles }) {
  const [currentTitle, setCurrentTitle] = useState(titles[0])

  const handleClick = (index) => {
    if (index !== currentTitle) {
      setCurrentTitle(titles[index])
      onClick(titles[index].toLowerCase())
    }
  }

  return (
    <h1>
      {
      titles.map((title, index) => (
        <span
          key={index}
          className={
            title === currentTitle
              ? 'current-title'
              : 'title'
          }
          onClick={() => handleClick(index)}
        >
          {title}
        </span>
      ))
      }
    </h1>
  )
}
