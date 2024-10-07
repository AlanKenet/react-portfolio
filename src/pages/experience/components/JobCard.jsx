import '@experience/styles/ExperienceCard.css'

export function JobCard ({ category, title, organization, initDate, endDate, description, keySkills }) {
  return (
    <article className={`experience-card ${category}-card`}>
      <aside>
        {
          initDate && endDate && (
            <span>
              <time dateTime={initDate}>{initDate}</time> — <time dateTime={endDate}>{endDate}</time>
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
      </aside>
      <div>
        <header>
          <h1>
            {title}
          </h1>
          {
            organization && <span>{organization}</span>
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
