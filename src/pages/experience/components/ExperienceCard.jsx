import { JobCard } from './JobCard'
import { ProjectCard } from './ProjectCard'

export function ExperienceCard ({ props }) {
  return (
    <>
      {
        (props.category === 'jobs') && <JobCard {...props} />
      }
      {
        (props.category === 'projects') && <ProjectCard {...props} />
      }
    </>
  )
}
