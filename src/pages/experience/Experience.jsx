import { useState } from 'react'

import { DynamicTitle } from '@/components/DynamicTitle'

import { ExperienceCard } from '@experience/components/ExperienceCard'

import { ALL_EXPERIENCE } from '@/constants/experience'
import { IMAGES } from '@/constants/images'

import { getElements, getUniqueValuesFrom } from '@/logic/colections'

import '@experience/styles/Experience.css'

const titles = getUniqueValuesFrom(ALL_EXPERIENCE, 'category')

const updateExperience = (category, initIndex = 0) => {
  let newExperience = ALL_EXPERIENCE.filter(experience => experience.category === category.toLowerCase())

  if (newExperience.length > 3) newExperience = getElements(newExperience, 3, initIndex)

  return newExperience
}

export function Experience () {
  const [experience, setExperience] = useState(updateExperience(titles[1]))

  const handleHover = (category) => {
    setExperience(
      updateExperience(category)
    )
  }

  return (
    <>
      <header className='experience-header'>
        <DynamicTitle onMouseEnter={handleHover} titles={titles} />
      </header>
      <main className='experience-main'>
        {
          experience.map((experience) => (
            <ExperienceCard
              key={experience.id}
              category={experience.category}
              title={experience.title}
              organization={experience.organization}
              city={experience.city}
              state={experience.state}
              country={experience.country}
              initDate={experience.initDate}
              endDate={experience.endDate}
              description={experience.description}
              keySkills={experience.keySkills}
              icon={experience.icon}
              image={IMAGES.find(image => image.name === experience.image)}
            />
          ))
        }
      </main>
    </>
  )
}
