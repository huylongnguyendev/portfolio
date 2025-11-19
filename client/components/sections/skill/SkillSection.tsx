import Section from "@/components/Section"
import Title from "@/components/Title"
import SkillList from "./SkillList"


const SkillSection = () => {
  return (
    <>
      <Section id="skills">
        <Title className="text-center mb-8">
          Skills
        </Title>
        <SkillList />
      </Section>
    </>
  )
}

export default SkillSection