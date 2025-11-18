import ProjectList from "../projects/ProjectList"
import Section from "../Section"
import Titile from "../Titile"


const ProjectSection = () => {
  return (
    <>
      <Section>
        <div id="projects" className="space-y-8">
          <Titile>
            Projects
            <p className="text-base">My projects were built by myself</p>
          </Titile>
          <ProjectList />
        </div>
      </Section>
    </>
  )
}

export default ProjectSection