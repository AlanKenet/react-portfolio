import { Image } from '@/components/Image'

import '@experience/styles/ExperienceCard.css'

export function ProjectCard ({ category, title, organization, initDate, endDate, description, keySkills, image }) {
  return (
    <article className={`experience-card ${category}-card`}>
      <aside>
        {
          image && <Image imageID={image} />
        }
      </aside>
      <div>
        <header>
          <h1>
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
