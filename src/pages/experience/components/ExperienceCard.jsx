import { Icon } from '@/components/Icon'
import { Image } from '@/components/Image'

import '@experience/styles/ExperienceCard.css'

export function ExperienceCard ({ category, title, organization, city, state, country, initDate, endDate, description, keySkills, icon, image }) {
  const iconSize = '2.5rem'

  return (
    <article className='experience-card'>
      {
        image && <Image imageID={image} />
      }
      <div className={`${category}-card`}>
        <header>
          <h1>
            {
              icon && <Icon className='iconicon' iconID={icon} size={iconSize} />
            }
            {title}
          </h1>
          {
            organization && <span>{organization}</span>
          }
          {
            initDate && endDate && (
              <span>
                <time dateTime={initDate}>{initDate}</time> / <time dateTime={endDate}>{endDate}</time>
              </span>
            )
          }
          {
            initDate && (!endDate) && (
              <span>
                <time dateTime={initDate}>{initDate}</time>
              </span>
            )
          }
          {
            city && state && country && <span>{city}, {state}, {country}.</span>
          }
        </header>
        {
          description && <p>{description}</p>
        }
        {
          keySkills && (
            <footer>
              <ul>
                {
                  keySkills.map((skill, index) => (
                    <li key={index} className='simple-capsule'>{skill}</li>
                  ))
                }
              </ul>
            </footer>
          )
        }
      </div>
    </article>
  )
}
