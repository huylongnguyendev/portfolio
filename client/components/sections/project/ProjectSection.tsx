import Section from "@/components/Section"
import Title from "@/components/Title"
import ProjectList from "./ProjectList"

const ProjectSection = () => {
  return (
    <>
      <Section className="space-y-10">
        <Title className="text-center">
          Projects
        </Title>
        <ProjectList />
      </Section>
    </>
  )
}

export default ProjectSection