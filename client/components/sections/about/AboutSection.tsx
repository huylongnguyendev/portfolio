import Section from "../../Section"
import Title from "../../Title"
import Bot from "./Bot"
import Top from "./Top"
import AboutImg from "./AboutImg"

const AboutSection = () => {
  return (
    <>
      <Section>
        <Title className="text-center leading-10">
          <p className="text-sm">introduction</p>
          about me
        </Title>
        <div className="flex max-md:flex-col md:items-stretch gap-6 mt-20">
          <AboutImg />
          <div>
            <Top />
            <Bot />
          </div>
        </div>
      </Section>
    </>
  )
}

export default AboutSection