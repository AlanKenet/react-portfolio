import { useState } from 'react'

import { DynamicTitle } from '@/components/DynamicTitle'

import { ExperienceCard } from '@experience/components/ExperienceCard'
import { getCategories, updateExperience } from '@experience/logic/updateExperience'

import '@experience/styles/Experience.css'

const categories = getCategories()
const titles = categories.map(category => category.charAt(0).toUpperCase() + category.slice(1))

export function Experience () {
  const [experience, setExperience] = useState(updateExperience(categories[0]))

  const handleClick = (category) => {
    setExperience(
      updateExperience(category)
    )
  }

  return (
    <section className='experience-section content'>
      <header className='experience-header'>
        <DynamicTitle onClick={handleClick} titles={titles} />
      </header>
      <main className='experience-main'>
        {
          experience.map((exp) => (
            <ExperienceCard
              key={exp.id}
              props={exp}
            />
          ))
        }
      </main>
    </section>
  )
}
